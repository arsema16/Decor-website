import type { Metadata } from "next";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "Maswab Decor — Modern Event Architecture & Maswab Decor Styling",
  description:
    "Maswab Decor crafts luxury atmospheres and bespoke event aesthetics. Weddings, galas, birthdays, and cultural celebrations — curated with refined modern elegance.",
  keywords: [
    "event decoration",
    "wedding decor",
    "Maswab Decor",
    "luxury event styling",
    "floral design",
    "event decor Addis Ababa",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-white text-neutral-900 antialiased selection:bg-emerald-600 selection:text-white">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
