import { Theme } from '@radix-ui/themes'
import './globals.css'
import './theme-config.css'
import '@radix-ui/themes/styles.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Calorie Tracker",
  description: "An app for tracking your calories and macros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="purple">
          <Navbar />
          <main className='p-5'>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
