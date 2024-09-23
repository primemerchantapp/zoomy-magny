import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from '@next/font/google';
import { ClerkProvider } from "@clerk/nextjs";

import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css';

import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Zoom",
  description: "Zoom APP with Next.js and TypeScript",
  keywords: "zoom, clone, nextjs, typescript",
  icons: {
    icon: '/icons/logo.svg',
  }
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
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}

export default RootLayout
