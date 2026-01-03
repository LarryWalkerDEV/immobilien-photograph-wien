'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold text-olive mb-4 font-space-grotesk">
          Etwas ist schiefgelaufen
        </h1>
        <p className="text-olive/70 mb-8 font-inter">
          Ein unerwarteter Fehler ist aufgetreten.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gold text-white rounded-lg hover:bg-gold/90 transition-colors font-inter"
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
