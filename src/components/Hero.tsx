import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/hero.png" alt="Maître Charlène Crochet — Avocate à Bordeaux" fill
          className="object-cover object-center ken-burns" priority />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(244,241,237,0.88) 0%, rgba(244,241,237,0.72) 55%, rgba(244,241,237,0.45) 100%)' }} />
      </div>

      <div className="relative text-center px-6 max-w-3xl mx-auto" style={{ paddingTop: '70px' }}>
        <div className="flex items-center justify-center gap-8 mb-10" style={{ marginTop: '40px' }}>
          <Image src="/logo-crochet.png" alt="Charlène Crochet Avocate" width={450} height={180}
            style={{ objectFit: 'contain', height: '180px', width: 'auto', flexShrink: 0 }} />
          <div style={{ borderLeft: '1px solid rgba(138,21,53,0.25)', paddingLeft: '2rem', textAlign: 'left' }}>
            <p style={{ fontFamily: 'var(--font-raleway)', fontWeight: 400, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#111116', lineHeight: 1.2, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Charlène Crochet
            </p>
            <p className="mt-2" style={{ color: 'rgba(17,17,22,0.45)', letterSpacing: '0.12em', fontSize: '0.8rem' }}>
              Avocate au Barreau de Bordeaux
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <div style={{ width: '48px', height: '1px', background: 'rgba(138,21,53,0.45)' }} />
          <span className="text-xs" style={{ color: 'rgba(17,17,22,0.42)', letterSpacing: '0.14em' }}>2 Rue Buhan · Bordeaux</span>
          <div style={{ width: '48px', height: '1px', background: 'rgba(138,21,53,0.45)' }} />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['Droit pénal', 'Droit de la famille', 'Droit des étrangers', 'Droit de la consommation', 'Droit des assurances'].map(d => (
            <span key={d} className="text-xs px-3 py-1.5"
              style={{ border: '1px solid rgba(138,21,53,0.50)', color: 'rgba(17,17,22,0.65)', background: 'rgba(244,241,237,0.55)', letterSpacing: '0.05em' }}>
              {d}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="tel:+33699046862"
            className="cta-primary flex items-center gap-3 px-8 py-4 text-sm font-medium w-full sm:w-auto justify-center"
            style={{ background: '#8a1535', color: '#f4f1ed', letterSpacing: '0.06em' }}>
            <PhoneIcon />06 99 04 68 62
          </a>
          <a href="mailto:charlene.crochet.avocat@gmail.com"
            className="cta-ghost flex items-center gap-3 px-6 py-4 text-sm w-full sm:w-auto justify-center"
            style={{ border: '1px solid rgba(17,17,22,0.18)', color: 'rgba(17,17,22,0.55)', letterSpacing: '0.06em' }}>
            Écrire à Maître Crochet
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(138,21,53,0.55))' }} />
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(138,21,53,0.55)' }} />
      </div>
    </section>
  )
}

function PhoneIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
}
