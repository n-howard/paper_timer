import type { Metadata } from "next";
import { Patrick_Hand , Karla } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: '400',
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Paper Time",
  description: "A very papery timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${patrickHand.variable} ${karla.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
