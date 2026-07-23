import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { sortedArticles } from '@/lib/articles'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ressources juridiques — Maître Charlène Crochet · Bordeaux',
  description: 'Articles et guides pratiques en droit pénal, droit de la famille et droit des étrangers, rédigés par Maître Charlène Crochet, avocate à Bordeaux.',
}

export default function RessourcesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f4f1ed', minHeight: '100vh' }}>
        <div className="max-w-6xl mx-auto px-6 pt-36 pb-24">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8a1535' }}>Ressources</p>
            <h1 className="text-3xl font-light" style={{ fontFamily: 'var(--font-playfair)', color: '#111116' }}>
              Articles & guides pratiques
            </h1>
            <div className="mt-5" style={{ width: '40px', height: '1px', background: 'rgba(138,21,53,0.4)' }} />
            <p className="mt-6 text-sm leading-relaxed max-w-2xl" style={{ color: '#6a5548' }}>
              Comprendre ses droits est le premier pas vers leur défense. Ces articles ont pour vocation d'informer et d'éclairer — ils ne remplacent pas un conseil personnalisé.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sortedArticles.map(article => (
              <Link key={article.slug} href={`/ressources/${article.slug}`}
                className="group block rounded-sm overflow-hidden"
                style={{ background: '#fff', border: '1px solid rgba(138,21,53,0.08)', boxShadow: '0 2px 12px rgba(17,17,22,0.04)', textDecoration: 'none' }}>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-widest mb-4"
                    style={{ color: 'rgba(138,21,53,0.75)', letterSpacing: '0.1em' }}>
                    {article.category}
                  </p>
                  <h2 className="text-base font-light mb-4 group-hover:opacity-70 transition-opacity"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#111116', lineHeight: 1.45 }}>
                    {article.title}
                  </h2>
                  <p className="text-xs leading-relaxed mb-6" style={{ color: '#6a5548' }}>{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'rgba(17,17,22,0.30)', letterSpacing: '0.04em' }}>{article.date}</span>
                    <span className="text-xs" style={{ color: '#8a1535', letterSpacing: '0.08em' }}>Lire &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
