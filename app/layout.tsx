import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";



export const metadata: Metadata = {
  title: "Our template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full  w-full flex flex-col relative">
        <Header/>
        {children}</body>
    </html>
  );
}
