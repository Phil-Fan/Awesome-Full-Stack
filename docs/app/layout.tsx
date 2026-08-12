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
  metadataBase: new URL("https://dev.philfan.cn"),
  title: {
    default: "Phil's Dev Note",
    template: "%s | Phil's Dev Note",
  },
  description: "Phil 的全栈开发笔记",
  openGraph: {
    title: "Phil's Dev Note",
    description: "Phil 的全栈开发笔记",
    url: "https://dev.philfan.cn",
    siteName: "Phil's Dev Note",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phil's Dev Note",
    description: "Phil 的全栈开发笔记",
    images: ["/og.png"],
  },
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
