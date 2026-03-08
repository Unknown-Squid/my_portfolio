import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";


const inter = Inter({ subsets: ["latin"] });




export const metadata = {
  title: "Gerald Fegalan Portfolio",
  description: "Portfolio of Gerald Fegalan - System Developer specializing in React, full-stack development, and modern web applications",
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
