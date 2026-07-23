import type { Metadata } from 'next'
import { Inter, Playfair_Display, Raleway } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500'], style: ['normal', 'italic'], variable: '--font-raleway', display: 'swap' })
const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maître Charlène Crochet — Avocate · Droit Pénal & Famille · Bordeaux',
  description: 'Maître Charlène Crochet, avocate au Barreau de Bordeaux. Spécialiste en droit pénal et droit de la famille. Cabinet situé 2 Rue Buhan, 33000 Bordeaux. Aide juridictionnelle acceptée.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} ${raleway.variable}`} style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
