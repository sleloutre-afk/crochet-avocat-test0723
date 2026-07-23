import Image from 'next/image'

export default function Verbatim() {
  return (
    <section className="py-24" style={{ background: '#111116' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-sm overflow-hidden" style={{ height: '420px' }}>
            <Image src="/cabinet.png" alt="Cabinet Charlène Crochet — Bordeaux" fill className="object-cover" />
            <div className="absolute inset-0" style={{ background: 'rgba(17,17,22,0.22)' }} />
          </div>

          <div>
            <div style={{ color: 'rgba(138,21,53,0.40)', fontSize: '4rem', lineHeight: 1, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
            <blockquote className="mt-4">
              <p className="font-light leading-relaxed mb-10"
                style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', color: 'rgba(244,241,237,0.80)', fontStyle: 'italic' }}>
                En droit pénal, on ne défend pas des coupables ou des innocents — on défend des droits. La présomption d'innocence, le droit à un procès équitable, le droit d'être entendu : ce sont ces garanties fondamentales que je m'attache à faire respecter, quel que soit le dossier.
              </p>
              <footer>
                <div style={{ width: '32px', height: '1px', background: 'rgba(138,21,53,0.45)', marginBottom: '1rem' }} />
                <p className="text-sm font-medium" style={{ color: '#8a1535', letterSpacing: '0.06em' }}>
                  Charlène Crochet
                </p>
                <p className="text-xs mt-1" style={{ color: 'rgba(244,241,237,0.30)', letterSpacing: '0.08em' }}>
                  Avocate · Droit pénal &amp; Droit de la famille
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
