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
    slug: 'divorce-consentement-mutuel-avec-avocat',
    title: 'Divorce par consentement mutuel avec avocat : comment ça marche ?',
    category: 'Droit de la famille',
    date: '15 juillet 2026',
    excerpt: 'Depuis 2017, le divorce amiable peut se conclure sans passer devant un juge. Mais il exige l\'assistance obligatoire de deux avocats. Comment se déroule la procédure, et à quoi sert l\'avocat dans ce cadre ?',
    content: `Depuis la loi du 18 novembre 2016 (entrée en vigueur le 1er janvier 2017), le divorce par consentement mutuel peut être homologué sans audience judiciaire : la convention est déposée directement au rang des minutes d'un notaire, qui lui confère force exécutoire. Cette réforme a simplifié et accéléré la procédure — mais elle n'a pas supprimé l'avocat. Au contraire, elle l'a rendu indispensable pour chaque époux.

## Pourquoi deux avocats sont-ils obligatoires ?

La loi impose à chaque époux d'être assisté de son propre avocat. Ils ne peuvent pas partager le même. Cette règle a une raison simple : chaque conjoint a des intérêts qui peuvent diverger, même dans un divorce amiable. L'avocat garantit que son client comprend ce à quoi il s'engage, que ses droits sont respectés et que la convention est juridiquement valide.

## Le déroulement de la procédure

**1. Premier entretien avec chaque avocat**
Chaque époux rencontre son avocat séparément. L'avocat fait le point sur la situation personnelle, patrimoniale et familiale : biens communs, résidence des enfants, pension alimentaire, prestation compensatoire le cas échéant.

**2. Négociation et rédaction de la convention**
Les deux avocats échangent pour rédiger la convention de divorce. Celle-ci règle tous les effets de la séparation : partage des biens, sort du logement familial, garde et résidence des enfants, modalités des visites, montant de la pension alimentaire.

**3. Le délai de réflexion de 15 jours**
Une fois le projet de convention adressé à chaque époux par courrier recommandé, un délai incompressible de 15 jours s'écoule avant que la signature puisse intervenir. Ce délai est d'ordre public : il ne peut pas être réduit.

**4. La signature et le dépôt chez le notaire**
À l'issue du délai, les deux époux et leurs avocats signent la convention. Elle est ensuite déposée chez un notaire dans un délai de 7 jours. Ce dépôt lui confère force exécutoire — équivalente à celle d'un jugement.

## Quand cette procédure est-elle impossible ?

Le divorce par consentement mutuel sans juge est exclu dans deux cas :
- **Un enfant mineur demande à être entendu par le juge** : la procédure bascule alors vers le divorce judiciaire par consentement mutuel (devant le JAF).
- **L'un des époux est sous tutelle ou curatelle** : la protection de la personne vulnérable exige l'intervention d'un juge.

## Ce que l'avocat apporte concrètement

Au-delà de la rédaction de la convention, l'avocat évalue les conséquences fiscales et patrimoniales du partage, vérifie que les droits aux prestations sociales et à la retraite ne sont pas sacrifiés, et s'assure que les clauses relatives aux enfants correspondent à l'intérêt de ces derniers. Un divorce amiable mal rédigé peut générer des litiges coûteux des années plus tard.`,
  },
  {
    slug: 'garde-a-vue-droits-mise-en-cause',
    title: 'Garde à vue : vos droits si vous êtes mis en cause',
    category: 'Droit pénal',
    date: '1 juillet 2026',
    excerpt: 'Placé en garde à vue, vous n\'êtes pas sans droits. Droit au silence, assistance d\'un avocat, examen médical : voici ce que la loi vous garantit dès la première heure — et comment en tirer parti.',
    content: `La garde à vue est une mesure de contrainte qui permet à la police ou à la gendarmerie de retenir une personne soupçonnée d'avoir commis ou tenté de commettre un crime ou un délit. Elle peut durer jusqu'à 24 heures, prolongeable une fois sur autorisation du procureur de la République.

## Vos droits dès le début du placement

Dès le début de la garde à vue, vous devez être informé de vos droits dans une langue que vous comprenez.

**Le droit de garder le silence**
Vous n'êtes pas obligé de répondre aux questions des enquêteurs. Ce droit fondamental ne peut vous être retiré. Exercer son droit au silence n'est pas un aveu de culpabilité — c'est une protection légale.

**Le droit à un avocat**
Vous pouvez demander à être assisté par un avocat dès la première heure. Si vous n'en avez pas, le bâtonnier peut en désigner un d'office. L'avocat peut s'entretenir avec vous confidentiellement pendant 30 minutes avant chaque audition, consulter les procès-verbaux d'audition déjà réalisés, et assister aux auditions pour formuler des observations.

**Le droit à un examen médical**
Vous pouvez demander à être examiné par un médecin. Ce droit peut aussi être exercé à la demande d'un membre de votre famille.

**Le droit de prévenir un proche**
Vous pouvez faire prévenir par téléphone un membre de votre famille ou votre employeur de votre placement en garde à vue.

## Ce qu'il ne faut pas faire

- Ne signez aucun document sans l'avoir lu et compris — et si possible sans l'avis de votre avocat.
- Ne faites pas de déclarations spontanées avant d'avoir pu consulter votre avocat.
- Ne minimisez pas les faits en pensant que cela arrangera votre situation : toute déclaration peut être utilisée contre vous.

## Après la garde à vue

À l'issue du délai, le procureur de la République peut décider :
- De vous libérer sans suite
- De vous convoquer ultérieurement (convocation par officier de police judiciaire ou citation directe)
- De vous présenter au parquet pour une comparution immédiate ou une mise en examen

Chaque heure compte. Dès votre placement en garde à vue, demandez immédiatement à contacter un avocat. L'assistance à ce stade conditionne souvent l'issue de la procédure.`,
  },
  {
    slug: 'victime-infraction-faire-valoir-droits',
    title: 'Victime d\'une infraction : comment faire valoir vos droits ?',
    category: 'Droit pénal',
    date: '17 juin 2026',
    excerpt: 'Porter plainte ne suffit pas toujours. Pour être véritablement entendu et obtenir réparation, la victime doit connaître ses droits et les exercer activement — dès le dépôt de plainte jusqu\'à l\'audience.',
    content: `Être victime d'une infraction pénale — agression, violence, escroquerie, harcèlement — ne donne pas automatiquement accès à une réparation. Il faut agir, et agir au bon moment. L'avocat de la partie civile joue un rôle essentiel pour que la voix de la victime soit entendue tout au long de la procédure.

## Porter plainte : simple et insuffisant

Déposer une plainte simple (au commissariat ou à la gendarmerie) déclenche une enquête, mais ne fait pas de vous une partie au procès. Le procureur reste seul maître de l'opportunité des poursuites : il peut classer sans suite. Pour peser sur la procédure, il faut aller plus loin.

## Se constituer partie civile

La constitution de partie civile est l'acte par lequel la victime entre formellement dans la procédure pénale. Elle peut intervenir :

- Lors du dépôt de plainte (plainte avec constitution de partie civile auprès du juge d'instruction)
- À l'audience correctionnelle ou aux assises, avant les réquisitions du procureur

En vous constituant partie civile, vous obtenez le droit d'être informé des actes de la procédure, d'accéder au dossier (avec votre avocat), de demander des actes d'enquête, et de solliciter des dommages et intérêts devant le tribunal pénal.

## La plainte avec constitution de partie civile

Lorsque le procureur a classé sans suite ou n'a pas donné suite dans un délai raisonnable, la victime peut déposer une plainte directement auprès du doyen des juges d'instruction. Cette démarche oblige l'ouverture d'une information judiciaire. Elle est soumise au paiement d'une consignation fixée par le juge.

## L'indemnisation

L'indemnisation peut intervenir par deux voies :

**Devant le tribunal pénal** : si le prévenu est condamné, le tribunal peut l'obliger à verser des dommages et intérêts à la partie civile dans le même jugement.

**Devant la CIVI** (Commission d'indemnisation des victimes d'infractions) : pour certaines infractions graves (violence, viol, homicide), l'État peut verser une indemnisation via le FGTI (Fonds de garantie des victimes), même si l'auteur n'est pas solvable ou identifié.

## L'importance d'un avocat dès le début

L'avocat de la partie civile n'est pas qu'un accompagnant moral. Il constitue le dossier, demande les actes d'enquête nécessaires, assure le suivi de la procédure et plaide l'indemnisation à l'audience. Plus l'intervention est précoce, plus les droits de la victime sont préservés.`,
  },
  {
    slug: 'divorce-contentieux-se-preparer',
    title: 'Divorce contentieux : comment se préparer à la procédure',
    category: 'Droit de la famille',
    date: '3 juin 2026',
    excerpt: 'Quand la séparation ne peut pas se faire à l\'amiable, le divorce contentieux s\'impose. Une procédure exigeante mais balisée — à condition de s\'y préparer dès le départ.',
    content: `Lorsque les époux ne s'accordent pas sur le principe du divorce ou sur ses conséquences (garde des enfants, partage des biens, prestation compensatoire), le divorce contentieux devient la voie inévitable. Contrairement au divorce par consentement mutuel, il nécessite l'intervention d'un juge aux affaires familiales (JAF).

## Les fondements du divorce contentieux

La loi prévoit trois fondements :

**Le divorce pour faute** — L'un des époux reproche à l'autre une violation grave ou renouvelée des devoirs du mariage (violence, infidélité, abandon du domicile conjugal). Le juge apprécie souverainement les faits invoqués.

**Le divorce pour altération définitive du lien conjugal** — Les époux vivent séparés depuis au moins un an. Aucune faute n'est nécessaire à prouver. C'est la voie la plus courante lorsque les époux ne s'entendent pas mais ne souhaitent pas s'accuser mutuellement.

**Le divorce pour acceptation du principe de la rupture** — Les deux époux reconnaissent que le mariage est rompu, sans s'accuser mutuellement. Ils laissent au juge le soin de régler les conséquences.

## La procédure étape par étape

**L'assignation** — Votre avocat rédige et fait signifier à votre conjoint une assignation en divorce. Ce document précise le fondement choisi et les demandes provisoires (résidence, pension alimentaire, usage du logement).

**La mise en état** — Le juge organise l'échange de pièces et de conclusions entre les avocats des deux parties. Cette phase peut durer plusieurs mois.

**L'audience de plaidoirie** — Les avocats plaident devant le JAF, qui rend son jugement dans les semaines suivantes.

## Les mesures provisoires : une phase décisive

Dès le dépôt de l'assignation, le juge peut prendre des mesures d'urgence : résidence séparée, pension alimentaire provisoire, résidence des enfants, attribution de l'usage du logement familial. Ne sous-estimez pas cette phase — les mesures provisoires conditionnent souvent les décisions définitives.

## Ce qu'il faut préparer

Rassemblez dès maintenant : relevés de comptes des trois dernières années, avis d'imposition, contrat de mariage, actes de propriété, justificatifs de revenus, bulletins de salaire des deux époux. Plus votre dossier est documenté, plus votre avocat peut défendre efficacement vos intérêts.`,
  },
  {
    slug: 'autorite-parentale-separation-enfants',
    title: 'Autorité parentale après la séparation : ce que vous devez savoir',
    category: 'Droit de la famille',
    date: '20 mai 2026',
    excerpt: 'La séparation des parents ne met pas fin à l\'autorité parentale conjointe. Résidence, droit de visite, décisions importantes : comment s\'organise la vie de l\'enfant après la rupture ?',
    content: `La séparation des parents — qu'ils soient mariés, pacsés ou en union libre — ne modifie pas en principe l'exercice de l'autorité parentale. Celle-ci reste conjointe : les deux parents continuent de prendre ensemble les décisions importantes concernant l'enfant. C'est la règle. Les exceptions sont rares et nécessitent une décision judiciaire.

## L'autorité parentale conjointe : le principe

Quelle que soit la situation maritale des parents, l'autorité parentale est exercée en commun dès lors que la filiation est établie à l'égard des deux. Les décisions majeures concernant l'enfant (scolarité, interventions médicales non urgentes, pratique religieuse, déplacement à l'étranger) requièrent l'accord des deux parents.

En cas de désaccord persistant sur une décision importante, le juge aux affaires familiales peut être saisi pour trancher.

## La résidence de l'enfant

Le juge aux affaires familiales fixe la résidence de l'enfant, soit :

- En **résidence principale** chez l'un des parents, avec un droit de visite et d'hébergement pour l'autre (généralement un week-end sur deux et la moitié des vacances scolaires)
- En **résidence alternée** : l'enfant réside de manière égale chez chaque parent (semaine/semaine ou autre rythme)

La résidence alternée n'est pas automatique. Le juge tient compte de l'âge de l'enfant, de la distance entre les domiciles, de l'organisation de chaque parent et de l'intérêt de l'enfant.

## La pension alimentaire

Chaque parent contribue à l'entretien et à l'éducation de l'enfant en proportion de ses ressources et des besoins de l'enfant. Le parent qui n'a pas la résidence principale verse généralement une pension alimentaire à l'autre.

En résidence alternée, si les revenus des deux parents sont équivalents, le juge peut décider qu'aucune pension n'est versée. En cas de déséquilibre significatif, une pension est fixée en faveur du parent aux revenus les plus faibles.

## La modification des mesures

Les décisions du juge concernant la résidence et la pension alimentaire ne sont pas définitives. Elles peuvent être révisées en cas de changement de circonstances : déménagement d'un parent, évolution des revenus, modification des besoins de l'enfant. Une nouvelle saisine du juge est alors nécessaire.`,
  },
  {
    slug: 'defense-penale-comparution-immediate',
    title: 'Comparution immédiate : ce qui se passe quand vous êtes jugé le jour même',
    category: 'Droit pénal',
    date: '5 mai 2026',
    excerpt: 'La comparution immédiate est une procédure rapide qui peut aboutir à une condamnation en quelques heures. Comment fonctionne-t-elle, et comment l\'avocat peut-il intervenir efficacement dans ce délai contraint ?',
    content: `La comparution immédiate (CI) est une procédure correctionnelle permettant de juger une personne le jour même de sa présentation au parquet — ou le lendemain au plus tard — sans instruction préalable. Rapide et souvent redoutée, elle impose une réactivité maximale de la part de l'avocat de la défense.

## Dans quels cas la comparution immédiate est-elle possible ?

Le procureur peut recourir à la comparution immédiate lorsque trois conditions sont réunies :
- Les charges sont réunies et suffisantes pour justifier le renvoi en jugement
- L'infraction est un délit passible d'au moins 6 mois d'emprisonnement (2 ans si elle a été commise en flagrance)
- L'affaire est en état d'être jugée immédiatement

Elle intervient souvent à l'issue d'une garde à vue, notamment pour des faits de violence, vol avec violence, conduite en état d'ivresse avec récidive, ou trafic de stupéfiants.

## Le déroulement de l'audience

**La présentation au parquet**
À l'issue de la garde à vue, le mis en cause est présenté au procureur. Celui-ci lui notifie les faits reprochés et l'informe de la procédure de comparution immédiate. L'avocat est présent ou désigné d'office.

**Le renvoi et la détention provisoire**
Si le prévenu ou son avocat demande un délai pour préparer la défense (ce qui est un droit), l'affaire peut être renvoyée à une date ultérieure dans un délai maximum de 3 semaines. Pendant ce délai, le juge des libertés et de la détention peut être saisi pour ordonner une détention provisoire ou un contrôle judiciaire.

**L'audience de jugement**
Le tribunal correctionnel (composé de trois juges) entend les réquisitions du procureur, puis les explications du prévenu et la plaidoirie de l'avocat. Le jugement peut être rendu le jour même ou mis en délibéré.

## Le rôle de l'avocat dans ce délai très contraint

L'avocat de la défense doit analyser rapidement le dossier, évaluer la pertinence d'une demande de renvoi, recueillir des éléments de personnalité (situation professionnelle, familiale, antécédents) et construire une plaidoirie en quelques heures. La qualité de cette intervention peut faire la différence entre une peine d'emprisonnement ferme et une peine aménagée.

Si vous êtes convoqué en comparution immédiate, ne tardez pas à contacter un avocat dès votre sortie de garde à vue ou, si possible, pendant celle-ci.`,
  },
]

export const sortedArticles = [...articles].sort(
  (a, b) => parseDate(b.date) - parseDate(a.date)
)
