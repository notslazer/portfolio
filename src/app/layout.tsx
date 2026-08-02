import "./globals.css";
import Navbar from "@/components/Navbar";
import { Bricolage_Grotesque, Sora, JetBrains_Mono } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "800"],
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "600"],
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${sora.variable} ${jetbrains.variable}`}>
      <body className="font-body bg-slate-950 text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}