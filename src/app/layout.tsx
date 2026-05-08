import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: {
    default: "Vikas Jyoti Foundation – Illuminating Lives in Odisha",
    template: "%s | Vikas Jyoti Foundation",
  },
  description:
    "Vikas Jyoti Foundation is a registered NGO working in healthcare, rural development, disability support, women empowerment, and education across Odisha.",
  keywords: [
    "NGO Odisha",
    "Vikas Jyoti Foundation",
    "rural development",
    "disability support",
    "healthcare camps",
    "women empowerment",
    "donate NGO India",
  ],
  openGraph: {
    title: "Vikas Jyoti Foundation",
    description: "Illuminating lives through compassion and community.",
    type: "website",
    locale: "en_IN",
    siteName: "Vikas Jyoti Foundation",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {/* paddingTop matches navbar height: 68px mobile, 76px desktop */}
        <main style={{ paddingTop: "68px", minHeight: "100vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
