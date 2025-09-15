import type { Metadata } from "next";
import "./globals.css";
import "@/lib/pixel-retroui-setup.js";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "SnipIt!",
  description: "Raven's AI summerizer is here..!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
