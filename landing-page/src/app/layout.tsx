import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgentsPalace - AI Agent Orchestration Hub",
  description: "Deploy, coordinate, and scale autonomous agents across your stack — with one unified control plane. Where agents come alive.",
  keywords: ["AI", "Agents", "Orchestration", "Microservices", "Automation", "Machine Learning"],
  authors: [{ name: "everything agent" }],
  openGraph: {
    title: "AgentsPalace - Orchestrate the Future",
    description: "The AI Agent Orchestration Hub for modern enterprises",
    type: "website",
    siteName: "AgentsPalace",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentsPalace - Where Agents Come Alive",
    description: "Your Central Command for Autonomous Systems",
  },
};

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
