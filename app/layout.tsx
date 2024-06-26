import React from 'react';
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "La Lionesa",
  description: "Pagina web Oficial La Lionesa profesional components",
  icons:{
    icon:["favicon.ico?v=4"],
    apple:["/apple-touch-icon.png"],
    shortcut:["/apple-touch-icon.png"]
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/apple-touch-icon.png" />
        {/* Fin de Favicons */}

        {/* Script del chatbot */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.embeddedChatbotConfig = {
              chatbotId: "iI0WBS8d-86ubE3k6pOK4",
              domain: "www.chatbase.co"
            };
          `
        }} />
        <script src="https://www.chatbase.co/embed.min.js" defer />
        {/* Fin del script del chatbot */}
      </head>
      <body className={`${poppins.className} text-white`}>
        <Toaster
          toastOptions={{
            style: {
              background: "#b36f09",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-[#212121] ">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
