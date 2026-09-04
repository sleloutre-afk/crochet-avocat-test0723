import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CGV() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#f4f1ed', minHeight: '100vh', paddingTop: '100px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '64px 24px 96px' }}>
          <p style={{ fontFamily: 'var(--font-raleway)', fontSize: '0.72rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8a1535', marginBottom: '12px' }}>Conditions générales</p>
          <h1 style={{ fontFamily: 'var(--font-raleway)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#111116', fontWeight: 300, marginBottom: '48px' }}>Conditions générales de vente</h1>

          {[
            {
              titre: '1. Objet',
              corps: 'Les présentes conditions générales définissent les modalités de prestations de services juridiques assurées par Maître Charlène Crochet, avocate au Barreau de Bordeaux, dans le cadre d\'une relation professionnelle avec ses clients.',
            },
            {
              titre: '2. Honoraires',
              corps: 'Conformément aux articles 10 à 10-3 de la loi n° 71-1130 du 31 décembre 1971 et aux dispositions du Règlement intérieur national (RIN), les honoraires sont fixés par forfait, en accord avec le client, avant toute intervention. Une convention d\'honoraires écrite est établie pour toute mission, précisant le périmètre de la mission et le montant forfaitaire convenu.',
            },
            {
              titre: '3. Modes de règlement',
              corps: 'Les honoraires sont réglables par virement bancaire, chèque ou espèces dans les limites légales. Des provisions peuvent être demandées en début de mission.',
            },
            {
              titre: '4. Secret professionnel et confidentialité',
              corps: 'Maître Charlène Crochet est soumise au secret professionnel absolu. Toutes les informations communiquées dans le cadre d\'une relation client sont strictement confidentielles, conformément aux articles 66-5 de la loi du 31 décembre 1971 et 2 du RIN.',
            },
            {
              titre: '5. Aide juridictionnelle',
              corps: 'Maître Charlène Crochet accepte les missions au titre de l\'aide juridictionnelle totale ou partielle. Les justificatifs de ressources nécessaires à la constitution du dossier sont à fournir lors du premier entretien.',
            },
            {
              titre: '6. Droit applicable et litiges',
              corps: 'Les présentes conditions sont soumises au droit français. En cas de litige sur les honoraires, le client peut saisir le Bâtonnier du Barreau de Bordeaux, conformément à l\'article 174 du décret n° 91-1197 du 27 novembre 1991.',
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
