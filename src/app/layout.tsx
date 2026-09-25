import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { BUSINESS_INFO } from "@/data/business";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A130E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://coffeeandmorebar.com"),
  title: {
    default: `${BUSINESS_INFO.name} | Specialty Coffee & Evening Bar in Prishtinë`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: `${BUSINESS_INFO.name} on ${BUSINESS_INFO.address.street}, Prishtinë. Enjoy specialty espresso, signature iced caramel coffee, fresh artisanal pastries, craft beer, and fine wine with scenic boulevard views.`,
  keywords: [
    "Coffee and more Bar",
    "Prishtinë coffee shop",
    "Bulevardi Dëshmorët E Kombit cafe",
    "Specialty Coffee Pristina",
    "Iced Caramel Coffee Pristina",
    "Wine Bar Prishtina",
    "Cafe Prishtinë",
    "Best coffee in Pristina",
    "Laptop friendly cafe Pristina",
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coffeeandmorebar.com",
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} — Specialty Coffee & Evening Bar in Prishtinë`,
    description: `Experience handcrafted coffee, signature iced drinks, fresh pastries, and evening wines right on Bulevardi Dëshmorët E Kombit in Prishtinë. Rated 5.0 Stars on Google Maps.`,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: `${BUSINESS_INFO.name} interior and coffee bar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} | Prishtinë`,
    description: `Specialty coffee, artisanal pastries, and evening wine lounge on Bulevardi Dëshmorët E Kombit.`,
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://coffeeandmorebar.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <SchemaJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1510] antialiased selection:bg-[#B86B35] selection:text-white">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
