import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

type ConsentLevel = 'all' | 'essential' | 'rejected' | null;

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<ConsentLevel>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedConsent = Cookies.get('lanza-cookie-consent') as ConsentLevel;
    setConsent(savedConsent || null);
    setIsLoading(false);
  }, []);

  const updateConsent = (level: ConsentLevel) => {
    if (level) {
      Cookies.set('lanza-cookie-consent', level, { expires: 365 });
    } else {
      Cookies.remove('lanza-cookie-consent');
    }
    setConsent(level);
  };

  const hasAnalyticsConsent = () => {
    return consent === 'all';
  };

  const hasMarketingConsent = () => {
    return consent === 'all';
  };

  const hasEssentialConsent = () => {
    return consent !== 'rejected';
  };

  return {
    consent,
    isLoading,
    updateConsent,
    hasAnalyticsConsent,
    hasMarketingConsent,
    hasEssentialConsent
  };
};