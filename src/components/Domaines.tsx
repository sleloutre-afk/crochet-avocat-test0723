import Image from 'next/image'

const DOMAINES = [
  {
    icon: '/penal.svg',
    title: 'Droit pénal',
    intro: 'Une présence à chaque étape de la procédure — de la garde à vue jusqu\'à l\'exécution de la peine — tant aux côtés des personnes mises en cause qu\'aux côtés des victimes.',
    points: [
      { label: 'Garde à vue', detail: 'Assistance immédiate dès le placement, information sur les droits, entretien confidentiel avant chaque audition.' },
      { label: 'Défense pénale', detail: 'Représentation devant le tribunal correctionnel et la cour d\'assises, plaidoirie, gestion des voies de recours et de l\'appel.' },
      { label: 'Assistance aux victimes', detail: 'Constitution de partie civile, suivi de la plainte, présence aux audiences, accompagnement dans la procédure d\'indemnisation.' },
      { label: 'Exécution des peines', detail: 'Demandes d\'aménagement de peine (semi-liberté, bracelet électronique, libération conditionnelle), recours devant le juge d\'application des peines.' },
    ],
  },
  {
    icon: '/famille.svg',
    title: 'Droit de la famille',
    intro: 'Un accompagnement centré sur les situations de séparation et leurs conséquences directes — avec l\'objectif de trouver des solutions qui protègent chaque membre de la famille.',
    points: [
      { label: 'Divorce par consentement mutuel', detail: 'Organisation de la séparation amiable, rédaction de la convention réglant tous les effets du divorce, dépôt chez le notaire.' },
      { label: 'Divorce contentieux', detail: 'Procédure judiciaire, demandes de mesures provisoires, plaidoirie devant le juge aux affaires familiales.' },
      { label: 'Autorité parentale & résidence', detail: 'Fixation ou modification de la résidence des enfants, droit de visite et d\'hébergement, déplacement à l\'étranger.' },
      { label: 'Séparation hors mariage', detail: 'Dissolution de PACS, séparation de concubins, partage des biens, pension alimentaire et prestation compensatoire.' },
    ],
  },
]

export default function Domaines() {
  return (
    <section id="domaines" className="py-24" style={{ background: '#fff' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8a1535' }}>Domaines d'intervention</p>
          <h2 className="text-3xl font-light" style={{ fontFamily: 'var(--font-raleway)', color: '#111116' }}>
            Un accompagnement ciblé
          </h2>
          <div className="mx-auto mt-5" style={{ width: '40px', height: '1px', background: 'rgba(138,21,53,0.4)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {DOMAINES.map(d => (
            <div key={d.title} className="p-8 rounded-sm"
              style={{ background: '#111116', border: '1px solid rgba(138,21,53,0.18)' }}>
              <div className="mb-5">
                <Image src={d.icon} alt="" width={44} height={44}
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.50 }} />
              </div>
              <h3 className="text-xl font-light text-white mb-3" style={{ fontFamily: 'var(--font-raleway)' }}>{d.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(244,241,237,0.50)' }}>{d.intro}</p>
              <ul className="space-y-4">
                {d.points.map(p => (
                  <li key={p.label} className="flex gap-3">
                    <span style={{ marginTop: '6px', flexShrink: 0, width: '4px', height: '4px', borderRadius: '50%', background: '#8a1535', display: 'inline-block' }} />
                    <span className="text-xs leading-relaxed" style={{ color: 'rgba(244,241,237,0.55)' }}>
                      <strong style={{ color: 'rgba(244,241,237,0.85)', fontWeight: 500 }}>{p.label}</strong> — {p.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm mb-6" style={{ color: '#6a5548' }}>
            Aide juridictionnelle acceptée — vos droits sont vérifiés lors du premier entretien.
          </p>
          <a href="/#contact" className="cta-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm"
            style={{ background: '#8a1535', color: '#f4f1ed', letterSpacing: '0.06em' }}>
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  )
}
