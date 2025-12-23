import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Trans Haul | Total Supply Chain Solution",
  description: "Logistics, Warehousing and Transport Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
