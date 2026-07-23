import Link from 'next/link'
import { sortedArticles } from '@/lib/articles'

export default function Ressources() {
  const articles = sortedArticles.slice(0, 3)
  return (
    <section id="ressources" className="py-24" style={{ background: '#fff' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8a1535' }}>Ressources</p>
            <h2 className="text-3xl font-light" style={{ fontFamily: 'var(--font-playfair)', color: '#111116' }}>
              Articles & guides pratiques
            </h2>
          </div>
          <Link href="/ressources" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: '#8a1535', letterSpacing: '0.12em', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Tous les articles &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map(article => (
            <Link key={article.slug} href={`/ressources/${article.slug}`}
              className="group block rounded-sm overflow-hidden"
              style={{ background: '#f4f1ed', border: '1px solid rgba(138,21,53,0.08)', boxShadow: '0 2px 12px rgba(17,17,22,0.04)', textDecoration: 'none' }}>
              <div className="p-7">
                <p className="text-xs uppercase tracking-widest mb-4"
                  style={{ color: 'rgba(138,21,53,0.75)', letterSpacing: '0.1em' }}>
                  {article.category}
                </p>
                <h3 className="text-base font-light mb-4 group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-playfair)', color: '#111116', lineHeight: 1.45 }}>
                  {article.title}
                </h3>
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
    </section>
  )
}
