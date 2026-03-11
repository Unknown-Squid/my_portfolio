import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";


const inter = Inter({ subsets: ["latin"] });




export const metadata = {
  title: "Gerald Fegalan Portfolio",
  description: "Portfolio of Gerald Fegalan - System Developer specializing in React, full-stack development, and modern web applications",
  openGraph: {
    title: "Gerald Fegalan Portfolio",
    description: "Portfolio of Gerald Fegalan - System Developer specializing in React, full-stack development, and modern web applications",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://gerald-portfolio-beryl.vercel.app/",
    siteName: "Gerald Fegalan Portfolio",
    images: [
      {
        url: "/images/profile/personal-avatar.png",
        width: 1200,
        height: 630,
        alt: "Gerald Fegalan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerald Fegalan Portfolio",
    description: "Portfolio of Gerald Fegalan - System Developer specializing in React, full-stack development, and modern web applications",
    images: ["/images/profile/personal-avatar.png"],
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
