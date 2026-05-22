import { Syne, DM_Sans } from "next/font/google";
import { contact, metaDescription } from "@/constants/resume";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gerald-portfolio-beryl.vercel.app/";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: `${contact.name} — ${contact.headline}`,
  description: metaDescription,
  openGraph: {
    title: `${contact.name} — ${contact.headline}`,
    description: metaDescription,
    url: siteUrl,
    siteName: "Fritz Gerald Fegalan",
    images: [
      {
        url: "/images/profile/personal-avatar.png",
        width: 1200,
        height: 630,
        alt: "Fritz Gerald Fegalan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${contact.name} — ${contact.headline}`,
    description: metaDescription,
    images: ["/images/profile/personal-avatar.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
