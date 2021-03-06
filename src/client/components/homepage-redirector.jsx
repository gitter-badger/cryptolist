import React from 'react';
import { Redirect } from 'react-router-dom';

export const HomepageRedirector = () => {
  if (window.location.pathname) {
    let [quote, base] = window.location.pathname.split('/').filter(s => s.length);
    let changed = false;

    if (!quote) {
      quote = 'usd';
      changed = true;
    }
    if (!base) {
      base = 'btc';
      changed = true;
    }

    if (changed) return <Redirect to={`/${quote}/${base}/chart`} />;
  }
  return <div />;
};
