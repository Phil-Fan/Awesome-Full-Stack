import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

const titleFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: {
    default: "Phil's Dev Note",
    template: "%s | Phil's Dev Note",
  },
  description: "Phil 的全栈开发笔记",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={titleFont.variable}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
