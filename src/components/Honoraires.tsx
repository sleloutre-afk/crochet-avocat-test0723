const MODES = [
  {
    titre: 'Honoraires au temps passé',
    desc: "Le temps consacré à votre dossier est facturé sur la base d'un taux horaire fixé à l'avance. Un relevé détaillé peut vous être remis à tout moment.",
    usage: 'Contentieux pénal, procédures complexes',
  },
  {
    titre: 'Forfait',
    desc: "Pour les dossiers dont le périmètre est clairement défini dès l'ouverture — divorce amiable, consultation juridique, rédaction d'un acte — un forfait tout inclus est proposé.",
    usage: 'Divorce par consentement mutuel, conseil',
  },
  {
    titre: 'Aide juridictionnelle',
    desc: "Maître Crochet accepte les dossiers en aide juridictionnelle totale ou partielle. Vos ressources sont vérifiées lors du premier entretien, sans engagement de votre part.",
    usage: 'Sous conditions de ressources',
  },
]

export default function Honoraires() {
  return (
    <section id="honoraires" className="py-24" style={{ background: '#f4f1ed' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8a1535' }}>Honoraires</p>
          <h2 className="text-3xl font-light" style={{ fontFamily: 'var(--font-playfair)', color: '#111116' }}>
            Des honoraires clairs dès le départ
          </h2>
          <div className="mx-auto mt-5" style={{ width: '40px', height: '1px', background: 'rgba(138,21,53,0.4)' }} />
          <p className="mt-6 text-sm leading-relaxed max-w-xl mx-auto" style={{ color: '#6a5548' }}>
            Avant toute intervention, une convention d'honoraires est signée. Elle précise le mode de calcul, le montant prévisionnel et les modalités de paiement. Vous savez exactement à quoi vous engager.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {MODES.map((mode, i) => (
            <div key={i} className="p-7 rounded-sm"
              style={{ background: '#fff', border: '1px solid rgba(138,21,53,0.10)', boxShadow: '0 2px 12px rgba(17,17,22,0.04)' }}>
              <div className="mb-1 text-xs uppercase tracking-widest" style={{ color: 'rgba(138,21,53,0.65)', letterSpacing: '0.12em' }}>
                {`0${i + 1}`}
              </div>
              <h3 className="text-base font-light mb-4 mt-3" style={{ fontFamily: 'var(--font-playfair)', color: '#111116' }}>
                {mode.titre}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#6a5548' }}>{mode.desc}</p>
              <p className="text-xs" style={{ color: 'rgba(138,21,53,0.70)', letterSpacing: '0.04em' }}>{mode.usage}</p>
            </div>
          ))}
        </div>

        <div className="rounded-sm p-7 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: '#111116' }}>
          <div>
            <p className="text-sm font-light text-white mb-1">Premier entretien</p>
            <p className="text-xs" style={{ color: 'rgba(244,241,237,0.45)' }}>
              Vous exposez votre situation, Maître Crochet vous informe sur vos droits et vous propose un mode d'honoraires adapté — sans engagement.
            </p>
          </div>
          <a href="/#contact" className="cta-primary shrink-0 px-7 py-3.5 text-sm"
            style={{ background: '#8a1535', color: '#f4f1ed', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  )
}
