import Image from 'next/image'

export default function About() {
  return (
    <section id="apropos" className="py-24" style={{ background: '#f4f1ed' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden" style={{ height: '520px' }}>
              <Image src="/crochet.png" alt="Maître Charlène Crochet" fill className="object-cover object-top" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(17,17,22,0.45) 0%, transparent 50%)' }} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-light text-lg" style={{ fontFamily: 'var(--font-raleway)' }}>Maître Charlène Crochet</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(244,241,237,0.65)', letterSpacing: '0.08em' }}>Avocate au Barreau de Bordeaux</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8a1535' }}>À propos</p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-raleway)', color: '#111116' }}>
              Une défense engagée,<br />
              <em style={{ color: '#8a1535' }}>cas par cas</em>
            </h2>
            <div className="mb-5" style={{ width: '40px', height: '1px', background: 'rgba(138,21,53,0.4)' }} />

            <p className="text-sm leading-relaxed mb-5" style={{ color: '#6a5548' }}>
              Maître Charlène Crochet exerce au Barreau de Bordeaux depuis sa prestation de serment en décembre 2021. Formée au droit pénal à l'Université de Bordeaux et à l'École des Avocats Alienor, elle a construit son expertise au sein de plusieurs cabinets bordelais avant d'ouvrir son propre cabinet.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#6a5548' }}>
              Son cabinet est structuré autour de deux axes exclusifs. En droit pénal, elle intervient tant aux côtés des victimes qu'en défense des personnes mises en cause — de la garde à vue jusqu'à l'exécution de la peine, en passant par l'instruction et les audiences. En droit de la famille, elle accompagne les situations de séparation et leurs conséquences : divorce amiable ou contentieux, autorité parentale, résidence des enfants, pension alimentaire et prestation compensatoire.
            </p>

            <div className="mb-8 pt-6" style={{ borderTop: '1px solid rgba(138,21,53,0.12)' }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#8a1535', letterSpacing: '0.12em' }}>Formation</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Master 2 Droit pénal', detail: 'Université de Bordeaux · 2016' },
                  { label: 'Master 1 Droit pénal et carrières judiciaires', detail: 'Université de Bordeaux · 2015 · Mention Bien' },
                  { label: 'Licence Droit français et anglo-américain', detail: 'CY Cergy Paris Université · 2014 · Mention Bien' },
                  { label: 'Diplôme de Barreau (CRFPA)', detail: 'EDA Alienor · 2021' },
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#6a5548' }}>
                    <span style={{ marginTop: '5px', flexShrink: 0, width: '4px', height: '4px', borderRadius: '50%', background: '#8a1535', display: 'inline-block' }} />
                    <span><strong style={{ color: '#111116', fontWeight: 500 }}>{f.label}</strong> · {f.detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6" style={{ borderTop: '1px solid rgba(138,21,53,0.12)' }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#8a1535', letterSpacing: '0.12em' }}>Expérience</p>
              <ul className="space-y-2.5">
                {[
                  { label: 'Cabinet Charlène Crochet', detail: 'Avocate à la Cour · depuis déc. 2023' },
                  { label: 'Cabinet Duran-Martial', detail: 'Avocate à la Cour · 2022 – 2023' },
                  { label: 'Cabinets Julie Elduayen & Myriam Sebban', detail: 'Élève avocate · 2021' },
                  { label: 'Association Diaconat de Bordeaux', detail: 'Juriste · 2020' },
                ].map((e, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{ color: '#6a5548' }}>
                    <span style={{ marginTop: '5px', flexShrink: 0, width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(138,21,53,0.4)', display: 'inline-block' }} />
                    <span><strong style={{ color: '#111116', fontWeight: 500 }}>{e.label}</strong> · {e.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
