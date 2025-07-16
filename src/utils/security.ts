import CryptoJS from 'crypto-js';

// Security utilities for data protection and LGPD compliance

const SECRET_KEY = 'lanza-medical-2024-security-key'; // In production, use environment variable

export const encryptData = (data: string): string => {
  try {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
  } catch (error) {
    console.error('Encryption error:', error);
    return data;
  }
};

export const decryptData = (encryptedData: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error('Decryption error:', error);
    return encryptedData;
  }
};

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-+\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const generateSecureId = (): string => {
  return CryptoJS.lib.WordArray.random(16).toString();
};

// Rate limiting utilities
class RateLimiter {
  private attempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempt = this.attempts.get(identifier);

    if (!attempt) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }

    if (now - attempt.lastAttempt > this.windowMs) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }

    if (attempt.count >= this.maxAttempts) {
      return false;
    }

    attempt.count++;
    attempt.lastAttempt = now;
    return true;
  }

  getRemainingTime(identifier: string): number {
    const attempt = this.attempts.get(identifier);
    if (!attempt || attempt.count < this.maxAttempts) {
      return 0;
    }
    
    const elapsed = Date.now() - attempt.lastAttempt;
    return Math.max(0, this.windowMs - elapsed);
  }
}

export const formRateLimiter = new RateLimiter(3, 10 * 60 * 1000); // 3 attempts per 10 minutes

// LGPD compliance utilities
export const lgpdCompliance = {
  consentTypes: {
    ESSENTIAL: 'essential',
    ANALYTICS: 'analytics',
    MARKETING: 'marketing',
    PERFORMANCE: 'performance'
  },

  getConsentStatus: (type: string): boolean => {
    if (typeof window === 'undefined') return false;
    
    const consent = localStorage.getItem('lanza-lgpd-consent');
    if (!consent) return false;
    
    try {
      const consentData = JSON.parse(consent);
      return consentData[type] === true;
    } catch {
      return false;
    }
  },

  setConsent: (consents: Record<string, boolean>): void => {
    if (typeof window === 'undefined') return;
    
    const consentData = {
      ...consents,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    
    localStorage.setItem('lanza-lgpd-consent', JSON.stringify(consentData));
  },

  revokeConsent: (): void => {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem('lanza-lgpd-consent');
    // Clear all non-essential cookies
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      if (!['lanza-cookie-consent'].includes(name)) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      }
    });
  }
};

// Data anonymization for analytics
export const anonymizeData = (data: any): any => {
  const anonymized = { ...data };
  
  // Remove or hash sensitive fields
  if (anonymized.email) {
    anonymized.email = CryptoJS.SHA256(anonymized.email).toString().substring(0, 8);
  }
  
  if (anonymized.phone) {
    anonymized.phone = 'masked';
  }
  
  if (anonymized.name) {
    anonymized.name = 'masked';
  }
  
  // Keep only necessary fields for analytics
  return {
    id: anonymized.id || generateSecureId(),
    timestamp: new Date().toISOString(),
    source: anonymized.source || 'website',
    category: anonymized.category || 'general'
  };
};
