import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Cristina Cendejas",
  description:
    "Technical Project Manager, Yoga Teacher, and Community Builder creating environments where people, ideas, and technology come together to do their best work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable}`}
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(247, 243, 237, 0.28),
              rgba(247, 243, 237, 0.28)
            ),
            url('/pictures/background.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}