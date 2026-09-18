import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";



export const metadata: Metadata = {
  title: "Mostafa Naguib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full  w-full flex flex-col overflow-x-hidden relative">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
