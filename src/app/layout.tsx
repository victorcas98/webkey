import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/app/geo/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WebKey | Criação de Sites Profissionais em Belo Horizonte e Brasil",
    template: "%s | WebKey"
  },
  description: "A WebKey cria sites profissionais, responsivos e otimizados para Google e IA. Pacotes a partir de R$1.500. Atendimento presencial na Grande BH.",
  keywords: ["criação de sites", "desenvolvimento web", "Belo Horizonte", "site profissional", "SEO", "agência digital BH"],
  authors: [{ name: "WebKey" }],
  creator: "WebKey",
  metadataBase: new URL("https://webkeysites.com.br"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://webkeysites.com.br",
    siteName: "WebKey",
    title: "WebKey | Criação de Sites Profissionais em BH",
    description: "Sites profissionais otimizados para Google e IA, design responsivo e suporte real. Atendimento presencial na Grande BH.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "WebKey - Criação de Sites" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "WebKey | Sites Profissionais em BH",
    description: "Crie seu site com a WebKey. SEO, WhatsApp Business, Google Maps integrado.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <JsonLd />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
