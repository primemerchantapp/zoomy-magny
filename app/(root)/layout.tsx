import StreamVideoProvider from '@/providers/StreamClientProviders'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Zoom",
  description: "Zoom APP with Next.js and TypeScript",
  keywords: "zoom, clone, nextjs, typescript",
  icons: {
    icon: '/icons/logo.svg',
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider >
        {children}
      </StreamVideoProvider>

    </main>
  )
}

export default RootLayout