import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

// Definiere den Typen für die Cookie-Zustimmung
interface CookieContextType {
  necessaryCookies: boolean;
  analyticsCookies: boolean;
  setAnalyticsCookies: (value: boolean) => void;
}

// Erstelle den Context
const CookieContext = createContext<CookieContextType | undefined>(undefined);

// CookieProvider-Komponente
interface CookieProviderProps {
  children: ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [necessaryCookies, setNecessaryCookies] = useState<boolean>(false);
  const [analyticsCookies, setAnalyticsCookies] = useState<boolean>(false);

  useEffect(() => {
    // Lade den Cookie-Zustand aus dem localStorage
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'true') {
      const necessary = localStorage.getItem('necessaryCookies');
      const analytics = localStorage.getItem('analyticsCookies');
      setNecessaryCookies(necessary === 'true');
      setAnalyticsCookies(analytics === 'true');
    }
  }, []);

  const setAnalyticsConsent = (value: boolean) => {
    setAnalyticsCookies(value);
    localStorage.setItem('analyticsCookies', value ? 'true' : 'false');
  };

  const value = {
    necessaryCookies,
    analyticsCookies,
    setAnalyticsCookies: setAnalyticsConsent,
  };

  return <CookieContext.Provider value={value}>{children}</CookieContext.Provider>;
};

// Custom Hook, um auf den Cookie-Zustand zuzugreifen
export const useCookies = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};
