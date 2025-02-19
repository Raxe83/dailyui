import React from 'react'
import { useCookies } from './Components/privacy/CookieProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function AnalyticsRequest() {
      const { analyticsCookies } = useCookies();
  return (
    <div>
        {analyticsCookies ? (
        <div>
          <Analytics />
          <SpeedInsights />
        </div>
      ): null}
    </div>
  )
}

export default AnalyticsRequest