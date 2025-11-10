// src/app/layout.tsx
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "EmoVibe", description: "AI + Human emotional support" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Header />
          <main style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>{children}</main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}