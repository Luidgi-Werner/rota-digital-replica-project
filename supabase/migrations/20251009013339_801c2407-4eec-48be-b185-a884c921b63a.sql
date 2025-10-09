-- Phase 1: Critical Security Fixes

-- 1. Create app_role enum for role-based access control
CREATE TYPE public.app_role AS ENUM ('admin', 'viewer', 'user');

-- 2. Create user_roles table to store user-role mappings
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Create security definer function to check user roles (prevents recursive RLS issues)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 4. RLS Policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 5. Add SELECT policies to contact_submissions (CRITICAL FIX)
CREATE POLICY "Only admins and viewers can view contact submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'viewer')
);

-- 6. Add UPDATE/DELETE policies to contact_submissions
CREATE POLICY "Only admins can update contact submissions"
ON public.contact_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete contact submissions"
ON public.contact_submissions
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 7. Add SELECT policies to lead_submissions (CRITICAL FIX)
CREATE POLICY "Only admins and viewers can view lead submissions"
ON public.lead_submissions
FOR SELECT
TO authenticated
USING (
  public.has_role(auth.uid(), 'admin') OR 
  public.has_role(auth.uid(), 'viewer')
);

-- 8. Add UPDATE/DELETE policies to lead_submissions
CREATE POLICY "Only admins can update lead submissions"
ON public.lead_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete lead submissions"
ON public.lead_submissions
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 9. Add database column length constraints for security
ALTER TABLE public.contact_submissions
ADD CONSTRAINT contact_name_length CHECK (char_length(name) <= 100),
ADD CONSTRAINT contact_email_length CHECK (char_length(email) <= 255),
ADD CONSTRAINT contact_phone_length CHECK (char_length(phone) <= 20),
ADD CONSTRAINT contact_company_length CHECK (char_length(company) <= 200),
ADD CONSTRAINT contact_message_length CHECK (char_length(message) <= 5000);

ALTER TABLE public.lead_submissions
ADD CONSTRAINT lead_name_length CHECK (char_length(name) <= 100),
ADD CONSTRAINT lead_email_length CHECK (char_length(email) <= 255),
ADD CONSTRAINT lead_phone_length CHECK (char_length(phone) <= 20);