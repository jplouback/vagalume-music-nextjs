import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainProvider } from '@/providers/MainProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vagalume Search',
  description: 'App para busca de músicas no vagalume.com.br',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MainProvider>
          {children}
        </MainProvider>
      </body>
    </html>
  )
}
