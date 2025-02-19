import React, { useState, useEffect } from 'react';
import { useCookies } from './CookieProvider';

const CookieConsent: React.FC = () => {
  const { analyticsCookies, setAnalyticsCookies } = useCookies();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [localAnalytics, setLocalAnalytics] = useState<boolean>(true);

  // Beim ersten Laden: Falls noch keine Entscheidung vorliegt, gehen wir von aktivierten Cookies aus.
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== null) {
      setIsVisible(false);
    } else {
      // Setze standardmäßig Analytics auf true, wenn noch keine Entscheidung vorliegt
      setLocalAnalytics(true);
      setAnalyticsCookies(true);
      localStorage.setItem('analyticsCookies', 'true');
      localStorage.setItem('necessaryCookies', 'true');
    }
  }, [setAnalyticsCookies]);

  // Funktion zum Akzeptieren der Cookies
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('necessaryCookies', 'true'); // Notwendige Cookies immer akzeptieren
    localStorage.setItem('analyticsCookies', localAnalytics ? 'true' : 'false');
    setIsVisible(false);
  };

  // Funktion zum Ablehnen der Cookies
  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    localStorage.setItem('necessaryCookies', 'true'); // Notwendige Cookies immer aktiv
    localStorage.setItem('analyticsCookies', 'false');
    setIsVisible(false);
  };

  // Falls die Abfrage nicht angezeigt werden soll, rendern wir nichts
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p className="text-sm">
          Diese Webseite verwendet Cookies, um die Nutzererfahrung zu verbessern und die Webseite zu analysieren.
          Notwendige Cookies sind immer aktiviert.
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-start md:items-center">
        {/* Notwendige Cookies – immer aktiviert */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="necessaryCookies"
            checked={true}
            disabled
            className="mr-2"
          />
          <label htmlFor="necessaryCookies" className="text-sm">Notwendige Cookies</label>
        </div>
        {/* Analytics-Cookies – standardmäßig aktiviert */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="analyticsCookies"
            checked={localAnalytics}
            onChange={(e) => {
              setLocalAnalytics(e.target.checked);
              setAnalyticsCookies(e.target.checked);
              localStorage.setItem('analyticsCookies', e.target.checked ? 'true' : 'false');
            }}
            className="mr-2"
          />
          <label htmlFor="analyticsCookies" className="text-sm">Analytics-Cookies</label>
        </div>
      </div>
      <div className="space-x-4 mt-4 md:mt-0">
        <button
          onClick={handleDecline}
          className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600"
        >
          Ablehnen
        </button>
        <button
          onClick={handleAccept}
          className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600"
        >
          Zustimmen
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
