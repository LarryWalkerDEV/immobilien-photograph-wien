'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="de">
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DCDCD0',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#292919',
              marginBottom: '16px'
            }}>
              Kritischer Fehler
            </h1>
            <p style={{
              color: '#292919',
              opacity: 0.7,
              marginBottom: '24px'
            }}>
              Ein schwerwiegender Fehler ist aufgetreten.
            </p>
            <button
              onClick={() => reset()}
              style={{
                padding: '12px 24px',
                backgroundColor: '#C9A55C',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Erneut versuchen
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
