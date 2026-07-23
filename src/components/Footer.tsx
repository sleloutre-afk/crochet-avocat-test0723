import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0e', borderTop: '1px solid rgba(138,21,53,0.15)' }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-5">
              <Image src="/logo-crochet.png" alt="Charlène Crochet Avocate" width={130} height={52}
                style={{ objectFit: 'contain', height: '44px', width: 'auto', filter: 'drop-shadow(0 0 3px rgba(138,21,53,0.20))' }} />
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(244,241,237,0.65)' }}>
              Avocate au Barreau de Bordeaux, spécialisée en droit pénal et droit de la famille. Cabinet situé 2 Rue Buhan, 33000 Bordeaux.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(138,21,53,0.85)', letterSpacing: '0.12em' }}>Navigation</p>
            <ul className="space-y-2.5">
              {[
                { label: 'À propos', href: '/#apropos' },
                { label: 'Domaines d\'intervention', href: '/#domaines' },
                { label: 'Honoraires', href: '/#honoraires' },
                { label: 'Ressources', href: '/ressources' },
                { label: 'Contact', href: '/#contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs hover:opacity-70 transition-opacity"
                    style={{ color: 'rgba(244,241,237,0.65)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(138,21,53,0.85)', letterSpacing: '0.12em' }}>Coordonnées</p>
            <address style={{ fontStyle: 'normal' }} className="space-y-2">
              <p className="text-xs" style={{ color: 'rgba(244,241,237,0.65)' }}>2 Rue Buhan</p>
              <p className="text-xs" style={{ color: 'rgba(244,241,237,0.65)' }}>33000 Bordeaux</p>
              <a href="tel:+33699046862" className="block text-xs mt-3 hover:opacity-70 transition-opacity"
                style={{ color: 'rgba(244,241,237,0.65)', textDecoration: 'none' }}>
                06 99 04 68 62
              </a>
              <a href="mailto:charlene.crochet.avocat@gmail.com" className="block text-xs hover:opacity-70 transition-opacity"
                style={{ color: 'rgba(244,241,237,0.65)', textDecoration: 'none' }}>
                charlene.crochet.avocat@gmail.com
              </a>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <p className="text-xs" style={{ color: 'rgba(244,241,237,0.45)', letterSpacing: '0.04em' }}>
            &copy; {new Date().getFullYear()} Maître Charlène Crochet. Tous droits réservés.
          </p>
          <p className="text-xs" style={{ color: 'rgba(244,241,237,0.40)' }}>
            Barreau de Bordeaux · N° 1317 · Aide juridictionnelle acceptée
          </p>
        </div>
      </div>
    </footer>
  )
}
