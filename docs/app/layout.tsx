import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import "fumadocs-ui/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Awesome Full Stack",
    template: "%s | Awesome Full Stack",
  },
  description: "全栈开发资源与知识库",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
