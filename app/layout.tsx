import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Angel Cool — AC, Washing Machine & Refrigerator Service and Repair in Thrissur",
  description:
    "Angel Cool offers expert AC service and repair in Thrissur, washing machine service and repair in Thrissur, and refrigerator service and repair in Thrissur. 6000+ trusted customers. Same-day service available. Call +91 9495783297.",
  keywords: [
    "AC service and repair in Thrissur",
    "washing machine service and repair in Thrissur",
    "refrigerator service and repair in Thrissur",
    "AC repair Thrissur",
    "washing machine repair Thrissur",
    "refrigerator repair Thrissur",
    "fridge repair Thrissur",
    "AC service Kerala",
    "appliance repair Mala",
    "air conditioning service Thrissur",
    "washing machine service Kerala",
    "refrigerator service Kerala",
  ],
  authors: [{ name: "Angel Cool" }],
  openGraph: {
    title: "Angel Cool — AC, Washing Machine & Refrigerator Repair Thrissur",
    description:
      "6000+ trusted customers. Expert AC service and repair, washing machine service and repair, and refrigerator service and repair in Thrissur. Same-day service. Call +91 9495783297.",
    url: "https://www.angelcool.in",
    siteName: "Angel Cool",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.angelcool.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Angel Cool",
  description:
    "Angel Cool provides AC service and repair in Thrissur, washing machine service and repair in Thrissur, and refrigerator service and repair in Thrissur, Kerala.",
  telephone: "+919495783297",
  url: "https://www.angelcool.in",
  areaServed: {
    "@type": "City",
    name: "Thrissur",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mala Church Complex",
    addressLocality: "Thrissur",
    postalCode: "680732",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Appliance Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Service and Repair in Thrissur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Washing Machine Service and Repair in Thrissur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigerator Service and Repair in Thrissur" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Preventative Maintenance" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full antialiased font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
