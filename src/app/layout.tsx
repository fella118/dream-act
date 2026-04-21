import type { Metadata } from "next";
import { Amiri, Cormorant_Garamond, Reem_Kufi } from "next/font/google";
import "./globals.css";
import Entete from "@/components/Entete";
import PiedDePage from "@/components/PiedDePage";
import BoutonWhatsApp from "@/components/BoutonWhatsApp";

const amiri = Amiri({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const reemKufi = Reem_Kufi({
  subsets: ["latin", "arabic"],
  weight: ["500", "700"],
  variable: "--font-reem-kufi",
});

export const metadata: Metadata = {
  title: "Dream Act Traiteur Event - L'Art de Recevoir à la Marocaine",
  description: "Traiteur d'exception et organisateur d'événements de luxe à Safi et partout au Maroc. Mariages, pool parties, location de matériel événementiel.",
  openGraph: {
    title: "Dream Act Traiteur Event",
    description: "L'organisation de vos événements d'exception à Safi et au Maroc.",
    url: "https://dreamact-traiteur.com",
    siteName: "Dream Act Traiteur Event",
    images: [{ url: "/og-image.jpg" }],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${amiri.variable} ${cormorantGaramond.variable} ${reemKufi.variable} font-sans antialiased text-minuit bg-os`}
      >
        <Entete />
        <main>{children}</main>
        <PiedDePage />
        <BoutonWhatsApp />
      </body>
    </html>
  );
}
