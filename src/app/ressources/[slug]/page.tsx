import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { articles } from '@/lib/articles'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} — Maître Charlène Crochet`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) notFound()

  const paragraphs = article.content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i} style={{ fontFamily: 'var(--font-raleway)', color: '#111116', fontSize: '1.25rem', fontWeight: 300, marginTop: '2rem', marginBottom: '0.75rem' }}>{block.replace('## ', '')}</h2>
    }
    if (block.startsWith('### ')) {
      return <h3 key={i} style={{ fontFamily: 'var(--font-raleway)', color: '#111116', fontSize: '1.05rem', fontWeight: 400, marginTop: '1.5rem', marginBottom: '0.5rem' }}>{block.replace('### ', '')}</h3>
    }
    if (block.includes('\n- ')) {
      const [intro, ...items] = block.split('\n- ')
      return (
        <div key={i} style={{ marginBottom: '1rem' }}>
          {intro && <p style={{ color: '#6a5548', marginBottom: '0.5rem', lineHeight: 1.75 }}
            dangerouslySetInnerHTML={{ __html: intro.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111116;font-weight:500">$1</strong>') }} />}
          <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
            {items.map((item, j) => (
              <li key={j} style={{ color: '#6a5548', marginBottom: '0.3rem', lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111116;font-weight:500">$1</strong>') }} />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <p key={i} style={{ color: '#6a5548', lineHeight: 1.8, marginBottom: '1rem' }}
        dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#111116;font-weight:500">$1</strong>') }} />
    )
  })

  return (
    <>
      <Navbar />
      <main style={{ background: '#f4f1ed', minHeight: '100vh' }}>
        <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
          <Link href="/ressources"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest mb-10 hover:opacity-70 transition-opacity"
            style={{ color: '#8a1535', textDecoration: 'none', letterSpacing: '0.12em' }}>
            &larr; Toutes les ressources
          </Link>

          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(138,21,53,0.75)', letterSpacing: '0.1em' }}>
            {article.category}
          </p>
          <h1 className="font-light mb-4 leading-tight" style={{ fontFamily: 'var(--font-raleway)', color: '#111116', fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {article.title}
          </h1>
          <p className="text-xs mb-10" style={{ color: 'rgba(17,17,22,0.35)', letterSpacing: '0.04em' }}>{article.date}</p>

          <div style={{ borderTop: '1px solid rgba(138,21,53,0.15)', paddingTop: '2rem' }}>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: '#111116', fontStyle: 'italic', fontFamily: 'var(--font-raleway)' }}>
              {article.excerpt}
            </p>
            <div className="text-sm">{paragraphs}</div>
          </div>

          <div className="mt-16 p-7 rounded-sm" style={{ background: '#111116' }}>
            <p className="text-sm text-white mb-1" style={{ fontFamily: 'var(--font-raleway)' }}>Une question sur votre situation ?</p>
            <p className="text-xs mb-5" style={{ color: 'rgba(244,241,237,0.40)' }}>
              Maître Crochet vous reçoit pour un premier entretien afin d'analyser votre dossier et vous conseiller sur les démarches à engager.
            </p>
            <a href="/#contact" className="inline-flex items-center gap-2 text-xs px-6 py-3"
              style={{ background: '#8a1535', color: '#f4f1ed', letterSpacing: '0.06em' }}>
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
