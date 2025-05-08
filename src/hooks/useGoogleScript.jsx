// hooks/useGoogleScript.js
import { useEffect } from 'react';

const useGoogleScript = (onLoadCallback) => {
  useEffect(() => {
    const existingScript = document.getElementById('google-client-script');

    if (existingScript) {
      if (window.google?.accounts?.id) {
        onLoadCallback();
      } else {
        existingScript.addEventListener('load', onLoadCallback);
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.id = 'google-client-script';
    script.onload = onLoadCallback;
    document.body.appendChild(script);
  }, [onLoadCallback]);
};

export default useGoogleScript;
