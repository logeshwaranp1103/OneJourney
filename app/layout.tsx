import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/animations/SmoothScroll";
import { AppProvider } from "@/context/AppContext";
import EnquiryModal from "@/components/modals/EnquiryModal";
import AccessibilityProvider from "@/components/layout/AccessibilityProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OneJourney | Trusted AI Travel & Pilgrimage Planner",
  description: "OneJourney is a trusted AI-powered travel platform for spiritual journeys, pilgrimage tours, group travel, and personalized travel planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface">
        <AppProvider>
          <AccessibilityProvider>
            <SmoothScroll>
              {children}
            </SmoothScroll>
            <EnquiryModal />
          </AccessibilityProvider>
        </AppProvider>
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
