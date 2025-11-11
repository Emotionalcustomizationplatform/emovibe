import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "Emovibe - Emotional Companion Platform",
  description: "AI and human emotional companionship platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}