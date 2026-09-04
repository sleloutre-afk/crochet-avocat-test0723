import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f4f1ed', minHeight: '100vh', paddingTop: '100px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '64px 24px 96px' }}>
          <p style={{ fontFamily: 'var(--font-raleway)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8a1535', marginBottom: '12px' }}>Informations légales</p>
          <h1 style={{ fontFamily: 'var(--font-raleway)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#111116', fontWeight: 300, marginBottom: '48px' }}>Mentions légales</h1>

          {[
            {
              titre: 'Éditeur du site',
              corps: <>
                Maître Charlène Crochet<br />
                Avocate au Barreau de Bordeaux<br />
                2 Rue Buhan<br />
                33000 Bordeaux<br />
                Tél. : 06 99 04 68 62<br />
                E-mail : charlene.crochet.avocat@gmail.com
              </>,
            },
            {
              titre: 'Qualité professionnelle',
              corps: <>
                Maître Charlène Crochet est avocate inscrite au Barreau de Bordeaux depuis sa prestation de serment en décembre 2021, soumise au Règlement intérieur national (RIN) de la profession d'avocat et au code de déontologie.
              </>,
            },
            {
              titre: 'Assurance professionnelle',
              corps: <>
                Maître Charlène Crochet est couverte par une assurance responsabilité civile professionnelle souscrite auprès du Barreau de Bordeaux, conformément aux obligations légales de la profession.
              </>,
            },
            {
              titre: 'Hébergement',
              corps: <>
                Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.
              </>,
            },
            {
              titre: 'Propriété intellectuelle',
              corps: <>
                L'ensemble du contenu de ce site (textes, images, éléments graphiques) est protégé par le droit d'auteur. Toute reproduction, même partielle, est soumise à l'autorisation préalable de Maître Charlène Crochet.
              </>,
            },
            {
              titre: 'Données personnelles',
              corps: <>
                Les informations recueillies via ce site sont destinées exclusivement à Maître Charlène Crochet et ne sont pas transmises à des tiers. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à : charlene.crochet.avocat@gmail.com.
              </>,
            },
          ].map(s => (
            <section key={s.titre} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-raleway)', fontSize: '1.15rem', color: '#111116', fontWeight: 400, marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid rgba(138,21,53,0.12)' }}>{s.titre}</h2>
              <p style={{ fontSize: '0.9rem', color: '#6a5548', lineHeight: 1.8 }}>{s.corps}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
