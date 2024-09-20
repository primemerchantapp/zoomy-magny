import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from '@next/font/google';

const inter = Inter({subsets: ["latin"]});
export const metadata: Metadata = { 
  title: "Zoom",
  description: "Ứng dụng Zoom Clone với Next.js và TypeScript",
  keywords: "zoom, clone, nextjs, typescript"
};
const RootLayout = ( { children }:{children: ReactNode}) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-2`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout
