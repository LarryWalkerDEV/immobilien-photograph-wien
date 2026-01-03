import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immobilien Photograph Wien | Virtuelle Rundgänge",
  description: "Professionelle Immobilienfotografie und virtuelle Touren in Wien",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
