export interface Article {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  content: string
}

function parseDate(d: string): number {
  const [day, month, year] = d.split(' ')
  const months: Record<string, number> = {
    janvier: 1, février: 2, mars: 3, avril: 4, mai: 5, juin: 6,
    juillet: 7, août: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12,
  }
  return parseInt(year) * 10000 + (months[month] ?? 0) * 100 + parseInt(day)
}

export const articles: Article[] = [
  {
    slug: 'garde-a-vue-vos-droits',
    title: 'Garde à vue : vos droits et comment les exercer',
    category: 'Droit pénal',
    date: '10 juillet 2026',
    excerpt: 'Placé en garde à vue, vous n\'êtes pas sans droits. Silence, avocat, examen médical : voici ce que la loi vous garantit dès la première heure de votre placement.',
    content: `La garde à vue est une mesure de contrainte qui permet à la police ou à la gendarmerie de retenir une personne soupçonnée d'avoir commis ou tenté de commettre un crime ou un délit. Elle peut durer jusqu'à 24 heures, prolongeable une fois sous le contrôle du procureur de la République.

## Vos droits dès le début de la garde à vue

Dès le début du placement, vous devez être informé de vos droits dans une langue que vous comprenez :

**1. Le droit de garder le silence**
Vous n'êtes pas obligé de répondre aux questions des enquêteurs. Ce droit fondamental ne peut vous être retiré. Exercer son droit au silence n'est pas un aveu de culpabilité — c'est une protection.

**2. Le droit à un avocat**
Vous pouvez demander à être assisté par un avocat dès la première heure. Si vous n'en avez pas, le bâtonnier peut en désigner un d'office. L'avocat peut s'entretenir avec vous confidentiellement pendant 30 minutes avant chaque audition, et peut assister aux auditions.

**3. Le droit à un examen médical**
Vous pouvez demander à être examiné par un médecin. Ce droit peut également être exercé par un membre de votre famille.

**4. Le droit de prévenir un proche**
Vous pouvez faire prévenir par téléphone un membre de votre famille ou votre employeur de votre placement en garde à vue.

## Ce que vous ne devez pas faire

- **Ne signez rien sans l'avoir lu et compris**, et si possible sans l'avis de votre avocat.
- **Ne faites pas de déclarations spontanées** avant d'avoir pu consulter votre avocat.
- **Ne minimisez pas les faits** en pensant que ça arrangera votre situation — cela peut au contraire être utilisé contre vous.

## Après la garde à vue

À l'issue de la garde à vue, le procureur peut :
- Vous libérer sans suite
- Vous convoquer ultérieurement (convocation par officier de police judiciaire)
- Vous présenter au parquet en vue d'une comparution immédiate ou d'une mise en examen

Chaque heure compte. Si vous êtes placé en garde à vue, demandez immédiatement à contacter un avocat.`,
  },
  {
    slug: 'divorce-contentieux-se-preparer',
    title: 'Divorce contentieux : comment se préparer à la procédure',
    category: 'Droit de la famille',
    date: '18 mai 2026',
    excerpt: 'Quand la séparation ne peut pas se faire à l\'amiable, le divorce contentieux s\'impose. Une procédure exigeante, mais balisée — à condition de s\'y préparer dès le départ.',
    content: `Lorsque les époux ne s'accordent pas sur le principe du divorce ou sur ses conséquences (garde des enfants, partage des biens, prestation compensatoire), le divorce contentieux devient la voie inévitable. Contrairement au divorce par consentement mutuel, il nécessite l'intervention d'un juge aux affaires familiales (JAF).

## Les quatre cas de divorce contentieux

La loi prévoit trois fondements :

**Le divorce pour faute** — L'un des époux reproche à l'autre une violation grave ou renouvelée des devoirs du mariage (infidélité, violence, abandon du domicile conjugal…). Le juge apprécie souverainement.

**Le divorce pour altération définitive du lien conjugal** — Les époux vivent séparés depuis au moins un an. Aucune faute n'est nécessaire à prouver. C'est la voie la plus courante lorsque les époux ne s'entendent pas mais ne souhaitent pas s'accuser mutuellement.

**Le divorce pour acceptation du principe de la rupture** — Les deux époux reconnaissent que le mariage est rompu, sans s'accuser. Ils laissent au juge le soin de régler les conséquences.

## La procédure étape par étape

**1. L'assignation** — Votre avocat rédige et fait signifier à votre conjoint une assignation en divorce. Ce document précise le fondement choisi et les demandes provisoires.

**2. L'ordonnance de non-conciliation (supprimée en 2021)** — Depuis la réforme de 2021, la procédure a été simplifiée. La phase de conciliation préalable a été supprimée. L'assignation vaut désormais demande en divorce.

**3. L'audience de mise en état** — Le juge organise l'échange des pièces et conclusions entre avocats.

**4. L'audience de plaidoirie** — Les avocats plaident devant le juge, qui rend son jugement dans les semaines ou mois suivants.

## Les mesures provisoires

Dès le début de la procédure, le juge peut prendre des mesures d'urgence : résidence séparée, pension alimentaire provisoire, résidence des enfants, usage du logement familial. Ne sous-estimez pas cette phase — elle conditionne souvent l'issue finale.

## L'importance d'anticiper

Rassemblez dès maintenant : relevés de comptes, avis d'imposition, contrat de mariage, documents relatifs aux biens immobiliers, justificatifs de revenus de chaque époux. Plus votre dossier est solide, plus votre avocat peut défendre efficacement vos intérêts.`,
  },
  {
    slug: 'droit-des-etrangers-titre-de-sejour-recours',
    title: 'Titre de séjour refusé : quels recours ?',
    category: 'Droit des étrangers',
    date: '3 mars 2026',
    excerpt: 'Un refus de titre de séjour n\'est pas une décision définitive. Des voies de recours existent — à condition de les exercer dans les délais et avec les bons arguments.',
    content: `Recevoir un refus de titre de séjour est une épreuve, mais ce n'est pas une fin de non-recevoir. La décision administrative peut être contestée devant le tribunal administratif, et plusieurs recours sont envisageables selon le type de refus et votre situation.

## Comprendre le refus

Toute décision de refus de titre de séjour doit être **motivée** — c'est-à-dire qu'elle doit expliquer les raisons juridiques et factuelles du refus. Lisez attentivement la décision : elle conditionne la stratégie de recours.

Deux types de décisions peuvent accompagner le refus :
- Une **obligation de quitter le territoire français (OQTF)**, avec un délai de départ volontaire (généralement 30 jours)
- Une décision **sans OQTF** (moins fréquente)

## Les voies de recours

**1. Le recours gracieux**
Vous demandez à la préfecture de reconsidérer sa décision, en apportant des éléments nouveaux ou en pointant une erreur d'appréciation. Ce recours suspend les délais du recours contentieux.

**2. Le recours hiérarchique**
Adressé au ministre de l'Intérieur, il est peu usité mais peut être utile dans certains cas.

**3. Le recours contentieux devant le tribunal administratif**
C'est la voie principale. Vous disposez de **30 jours** à compter de la notification du refus pour saisir le tribunal (15 jours si une OQTF sans délai de départ volontaire est jointe).

Le tribunal peut :
- Annuler la décision et enjoindre à la préfecture de vous délivrer un titre
- Rejeter votre recours
- Ordonner un réexamen de votre dossier

**4. Le référé-suspension**
En urgence, si vous risquez une mesure d'éloignement imminente, vous pouvez demander au juge de suspendre l'exécution de la décision dans l'attente du jugement au fond.

## L'importance des délais

Les délais en droit des étrangers sont **stricts et non prorogeables**. Un recours déposé un seul jour après l'expiration du délai sera irrecevable. Consultez un avocat dès réception de la décision de refus.

## Quels arguments invoquer ?

- Erreur de droit : la préfecture a mal appliqué un texte
- Erreur de fait : les informations retenues sont inexactes
- Violation des droits fondamentaux (vie privée et familiale, article 8 CEDH)
- Défaut de motivation ou vice de procédure

Chaque situation est unique. Un examen attentif de votre parcours, de votre dossier et des motifs du refus est indispensable avant tout recours.`,
  },
]

export const sortedArticles = [...articles].sort(
  (a, b) => parseDate(b.date) - parseDate(a.date)
)
