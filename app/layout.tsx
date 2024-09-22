import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from '@next/font/google';
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Zoom",
  description: "Ứng dụng Zoom Clone với Next.js và TypeScript",
  keywords: "zoom, clone, nextjs, typescript"
};
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/yoom-logo.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          }
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}

export default RootLayout
