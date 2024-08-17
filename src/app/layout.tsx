import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutDefault from "./components/layout/LayoutDefault";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khu vườn của tôi",
  description:
    "Mỗi câu từ là một hạt mầm, hạt mầm nào cũng đều cần được tươi tắn, vun vén từng ngày",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutDefault>{children}</LayoutDefault>
      </body>
    </html>
  );
}
