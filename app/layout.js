import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { Playfair } from 'next/font/google'

export const metadata = {
  title: 'Songy',
  description: 'landing page for fiverr',
}
const playfair = Playfair({subsets:['latin']})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
