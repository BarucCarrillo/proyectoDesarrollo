"use client";
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumbs from "@/components/breadcrumbs";
import Loader from "@/components/loader"; // Importa el loader
import MetadataComponent from "@/components/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  // Simula la carga del contenido
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Después de 2 segundos, cambiar el estado de loading
    }, 2000);

    return () => clearTimeout(timer); // Limpia el temporizador cuando se desmonte el componente
  }, []);

  return (
    <html lang="en">
      <MetadataComponent/>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          <Breadcrumbs /> {/* Aquí agregamos los breadcrumbs */}
          <main>
            {loading ? <Loader /> : children} {/* Muestra el loader mientras carga */}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
