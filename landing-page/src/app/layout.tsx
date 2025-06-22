import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals-new.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AgentsPalace - AI Agent Orchestration Hub",
    template: "%s | AgentsPalace"
  },
  description: "Deploy, coordinate, and scale autonomous agents across your stack — with one unified control plane. Where agents come alive.",
  keywords: ["AI", "Agents", "Orchestration", "Microservices", "Automation", "Machine Learning", "AgentsPalace", "AI Platform", "Agent Management"],
  authors: [{ name: "everything agent" }],
  creator: "everything agent",
  publisher: "everything agent",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AgentsPalace - Orchestrate the Future",
    description: "The AI Agent Orchestration Hub for modern enterprises. Microservice architecture, multi-language support, real-time monitoring.",
    type: "website",
    siteName: "AgentsPalace",
    locale: "tr_TR",
    url: "https://agentspalace.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentsPalace - Where Agents Come Alive",
    description: "Your Central Command for Autonomous Systems",
    creator: "@agentspalace",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#6236ff' },
      { media: '(prefers-color-scheme: dark)', color: '#0a0f1c' },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
