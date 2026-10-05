import type { Metadata, Viewport } from "next";
import { Permanent_Marker, Inter } from "next/font/google";
import "./globals.css";

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BHAGI — College Union Magazine | CEV",
  description: "We were never meant to be silent. The official digital edition of BHAGI, College Union Magazine, College of Engineering Vadakara.",
  openGraph: {
    title: "BHAGI — College Union Magazine",
    description: "We were never meant to be silent.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marker.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-[#050505] text-[#F5F0E8] overflow-x-hidden selection:bg-[#F5B82E]/30 selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
