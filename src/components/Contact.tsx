import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="py-24" style={{ background: '#f4f1ed' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8a1535' }}>Contact</p>
          <h2 className="text-3xl font-light" style={{ fontFamily: 'var(--font-raleway)', color: '#111116' }}>
            Parlons de votre situation
          </h2>
          <div className="mx-auto mt-5" style={{ width: '40px', height: '1px', background: 'rgba(138,21,53,0.4)' }} />
          <p className="mt-6 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: '#6a5548' }}>
            Que vous fassiez face à une procédure pénale, une séparation difficile ou une démarche administrative bloquée, Maître Crochet vous reçoit pour un premier entretien confidentiel afin d'analyser votre dossier et définir ensemble la meilleure stratégie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#8a1535', letterSpacing: '0.12em' }}>
                Maître Charlène Crochet
              </p>
              <a href="tel:+33699046862"
                className="flex items-center gap-2 text-sm mb-2 hover:opacity-70 transition-opacity"
                style={{ color: '#111116', textDecoration: 'none' }}>
                <PhoneIcon />06 99 04 68 62
              </a>
              <a href="mailto:charlene.crochet.avocat@gmail.com"
                className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                style={{ color: '#111116', textDecoration: 'none' }}>
                <MailIcon />charlene.crochet.avocat@gmail.com
              </a>
            </div>

            <div className="mb-8 py-6" style={{ borderTop: '1px solid rgba(138,21,53,0.12)', borderBottom: '1px solid rgba(138,21,53,0.12)' }}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#8a1535', letterSpacing: '0.12em' }}>Adresse</p>
              <p className="text-sm" style={{ color: '#111116' }}>2 Rue Buhan</p>
              <p className="text-sm" style={{ color: '#111116' }}>33000 Bordeaux</p>
            </div>

            <p className="text-xs" style={{ color: '#6a5548' }}>
              Aide juridictionnelle acceptée · Barreau de Bordeaux · N° 1317
            </p>

            <div className="flex gap-3 mt-8">
              <a href="tel:+33699046862"
                className="cta-primary flex items-center gap-2 px-6 py-3.5 text-sm"
                style={{ background: '#8a1535', color: '#f4f1ed', letterSpacing: '0.06em' }}>
                <PhoneIcon />Appeler
              </a>
              <a href="mailto:charlene.crochet.avocat@gmail.com"
                className="flex items-center gap-2 px-6 py-3.5 text-sm transition-all duration-200 hover:opacity-80"
                style={{ background: '#111116', color: '#f4f1ed', letterSpacing: '0.06em' }}>
                <MailIcon />Écrire
              </a>
            </div>
          </div>

          <div className="relative rounded-sm overflow-hidden" style={{ height: '440px' }}>
            <Image src="/office.png" alt="Cabinet Charlène Crochet — 2 Rue Buhan, Bordeaux" fill
              className="object-cover" />
            <div className="absolute inset-0" style={{ background: 'rgba(17,17,22,0.25)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/logo-crochet.png" alt="Charlène Crochet Avocate" width={220} height={100}
                style={{ objectFit: 'contain', height: '100px', width: 'auto', filter: 'drop-shadow(0 0 8px rgba(138,21,53,0.35))' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.4 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
}
function MailIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
}
