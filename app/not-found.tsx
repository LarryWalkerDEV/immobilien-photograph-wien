import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-olive mb-4 font-space-grotesk">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-olive mb-4 font-space-grotesk">
          Seite nicht gefunden
        </h2>
        <p className="text-olive/70 mb-8 font-inter">
          Die angeforderte Seite existiert nicht.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gold text-white rounded-lg hover:bg-gold/90 transition-colors font-inter inline-block"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
