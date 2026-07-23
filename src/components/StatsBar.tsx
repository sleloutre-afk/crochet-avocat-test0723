export default function StatsBar() {
  const stats = [
    { value: '2021', label: 'Serment · Barreau de Bordeaux' },
    { value: 'Pénal', label: 'Droit pénal & correctionnel' },
    { value: 'Famille', label: 'Droit de la famille' },
    { value: 'AJ', label: 'Aide juridictionnelle acceptée' },
  ]
  return (
    <div style={{ background: '#111116' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="py-8 px-4 text-center"
              style={{ borderRight: i < 3 ? '1px solid rgba(138,21,53,0.12)' : 'none' }}>
              <p className="text-xl font-light mb-1" style={{ fontFamily: 'var(--font-playfair)', color: '#8a1535' }}>{s.value}</p>
              <p className="text-xs leading-tight" style={{ color: 'rgba(244,241,237,0.38)', letterSpacing: '0.04em' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
