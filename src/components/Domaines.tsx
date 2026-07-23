import Image from 'next/image'

const DOMAINES = [
  {
    icon: '/penal.svg',
    title: 'Droit pénal',
    text: 'Assistance et représentation en garde à vue, défense devant les juridictions pénales (tribunal correctionnel, cour d\'assises), crimes et délits, appel des peines.',
    featured: true,
  },
  {
    icon: '/famille.svg',
    title: 'Droit de la famille',
    text: 'Divorce (amiable ou contentieux), autorité parentale, pension alimentaire, résidence des enfants, adoption, PACS, violences intrafamiliales.',
    featured: true,
  },
  {
    icon: '/migrant.svg',
    title: 'Droit des étrangers',
    text: 'Titre de séjour, recours contre refus préfectoral, OQTF (obligation de quitter le territoire), régularisation, contentieux devant le tribunal administratif.',
    featured: false,
  },
  {
    icon: '/consommation.svg',
    title: 'Droit de la consommation',
    text: 'Litiges avec professionnels, clauses abusives, crédit à la consommation, pratiques commerciales trompeuses, recouvrement de sommes indûment prélevées.',
    featured: false,
  },
  {
    icon: '/assurance.svg',
    title: 'Droit des assurances',
    text: 'Contestation de refus d\'indemnisation, interprétation des contrats, sinistres (corporels, matériels), litiges avec compagnies d\'assurance.',
    featured: false,
  },
]

export default function Domaines() {
  const featured = DOMAINES.filter(d => d.featured)
  const secondary = DOMAINES.filter(d => !d.featured)

  return (
    <section id="domaines" className="py-24" style={{ background: '#fff' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: '#8a1535' }}>Domaines d'intervention</p>
          <h2 className="text-3xl font-light" style={{ fontFamily: 'var(--font-playfair)', color: '#111116' }}>
            Un accompagnement ciblé
          </h2>
          <div className="mx-auto mt-5" style={{ width: '40px', height: '1px', background: 'rgba(138,21,53,0.4)' }} />
        </div>

        {/* Domaines principaux */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map(d => (
            <div key={d.title} className="p-8 rounded-sm"
              style={{ background: '#111116', border: '1px solid rgba(138,21,53,0.18)' }}>
              <div className="mb-5">
                <Image src={d.icon} alt="" width={44} height={44}
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.50 }} />
              </div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(138,21,53,0.80)', letterSpacing: '0.12em' }}>Domaine phare</p>
              <h3 className="text-xl font-light text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>{d.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,241,237,0.48)' }}>{d.text}</p>
            </div>
          ))}
        </div>

        {/* Domaines secondaires */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {secondary.map(d => (
            <div key={d.title} className="domain-card p-6 rounded-sm"
              style={{ background: '#f4f1ed', border: '1px solid rgba(138,21,53,0.10)', transition: 'all 0.2s' }}>
              <div className="mb-4">
                <Image src={d.icon} alt="" width={36} height={36}
                  style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(70%) saturate(1200%) hue-rotate(320deg) brightness(75%) contrast(95%)', opacity: 0.70 }} />
              </div>
              <h3 className="text-base font-medium mb-3" style={{ fontFamily: 'var(--font-playfair)', color: '#111116' }}>{d.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#6a5548' }}>{d.text}</p>
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
