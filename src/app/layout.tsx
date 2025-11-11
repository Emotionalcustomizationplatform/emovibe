import "./globals.css";
import { Providers } from "@/components/ui/ToastProvider";

export const metadata = {
  title: "EmoVibe - 情感陪聊平台",
  description: "AI 与真人结合的情感陪伴网站",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}