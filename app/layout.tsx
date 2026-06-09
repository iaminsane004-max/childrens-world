import "./globals.css";
import { Fredoka, Quicksand } from 'next/font/google'

const fredoka = Fredoka({ 
  subsets: ['latin'], 
  variable: '--font-fredoka',
  weight: ['400', '500', '600', '700'] 
})

const quicksand = Quicksand({ 
  subsets: ['latin'], 
  variable: '--font-quicksand',
  weight: ['400', '500', '600', '700'] 
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${quicksand.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}