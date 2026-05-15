import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/app/config/site";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { LanguageProvider } from "@/app/context/LanguageContext";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.SITE_URL),
  title: {
    default: `${SITE_CONFIG.COMPANY_NAME} — Bolt Food & Bolt Drive Slovakia`,
    template: `%s | ${SITE_CONFIG.COMPANY_NAME}`,
  },
  description: SITE_CONFIG.META_DESCRIPTION_SK,
  keywords: [
    "Bolt Food kuriér",
    "Bolt Drive taxikár",
    "flotila Bolt Slovensko",
    "práca kuriér Bratislava",
    "práca taxikár Bratislava",
    "Bolt Food courier Slovakia",
    "Bolt Drive fleet Slovakia",
    "zarábaj s Bolt",
    "flexibilná práca Bratislava",
  ],
  authors: [{ name: SITE_CONFIG.COMPANY_NAME }],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    alternateLocale: "en_US",
    url: SITE_CONFIG.SITE_URL,
    siteName: SITE_CONFIG.COMPANY_NAME,
    title: `${SITE_CONFIG.COMPANY_NAME} — Bolt Food & Bolt Drive Slovakia`,
    description: SITE_CONFIG.META_DESCRIPTION_SK,
    images: [{ url: SITE_CONFIG.OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.COMPANY_NAME} — Bolt Food & Bolt Drive Slovakia`,
    description: SITE_CONFIG.META_DESCRIPTION_SK,
    images: [SITE_CONFIG.OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_CONFIG.SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.COMPANY_NAME,
  url: SITE_CONFIG.SITE_URL,
  logo: `${SITE_CONFIG.SITE_URL}/logo.svg`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.PHONE_FOOD,
      contactType: "customer service",
      areaServed: "SK",
      availableLanguage: ["Slovak", "English", "Ukrainian"],
      productSupported: "Bolt Food",
    },
    {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.PHONE_DRIVE,
      contactType: "customer service",
      areaServed: "SK",
      availableLanguage: ["Slovak", "English", "Ukrainian"],
      productSupported: "Bolt Drive",
    },
  ],
  sameAs: [],
  areaServed: { "@type": "Country", name: "Slovakia" },
  description: SITE_CONFIG.META_DESCRIPTION_SK,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e){}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} font-[var(--font-dm-sans)] antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
