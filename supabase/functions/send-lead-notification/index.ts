import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NotificationData {
  name: string;
  email: string;
  phone: string;
  type: 'lead' | 'contact';
  specialty?: string;
  company?: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: NotificationData = await req.json();

    console.log('Enviando notificação por email:', data);

    // Definir o conteúdo do email baseado no tipo
    const subject = data.type === 'lead' 
      ? `Novo Lead Capturado - ${data.name}`
      : `Nova Mensagem de Contato - ${data.name}`;

    let htmlContent = `
      <h2>${data.type === 'lead' ? 'Novo Lead Capturado' : 'Nova Mensagem de Contato'}</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefone:</strong> ${data.phone}</p>
    `;

    if (data.type === 'lead' && data.specialty) {
      htmlContent += `<p><strong>Especialidade:</strong> ${data.specialty}</p>`;
    }

    if (data.type === 'contact') {
      if (data.company) {
        htmlContent += `<p><strong>Empresa:</strong> ${data.company}</p>`;
      }
      if (data.message) {
        htmlContent += `<p><strong>Mensagem:</strong></p><p>${data.message}</p>`;
      }
    }

    // Enviar email
    const emailResponse = await resend.emails.send({
      from: 'RT Equipment <onboarding@resend.dev>',
      to: ['contato@rtequipment.com.br'], // Email de destino - ajustar conforme necessário
      subject: subject,
      html: htmlContent,
    });

    console.log('Email enviado com sucesso:', emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Notificação enviada com sucesso!' 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Erro ao enviar notificação por email:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
