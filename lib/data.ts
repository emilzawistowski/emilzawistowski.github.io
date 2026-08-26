export type Work = {
  slug: string
  title: string
  category: string
  year: string
  image: string
  venue: string
  description: string
  collaborators?: string[]
  links?: { label: string; href: string }[]
}

export type ContactLink = {
  label: string
  href: string
  icon: 'google-scholar' | 'orcid' | 'researchgate' | 'github'
}

export const scholar = {
  name: 'Emil Zawistowski',
  title: 'Emil Zawistowski',
  role: 'Computational / Cognitive / Auditory / Neuroscience',
  affiliation: 'Aalborg University',
  location: 'Copenhagen, DK',
  email: 'zemilpl@gmail.com',
}

export const works: Work[] = [
  {
    slug: 'msc-thesis-auditory-distance',
    title: 'Neural Correlates of Auditory Distance Perception',
    category: 'Master\'s Thesis',
    year: '2026',
    image: '/works/thesis-eeg.png',
    venue: 'Aalborg University Copenhagen',
    description:
      'Investigating auditory distance using a Wave Field Synthesis (WFS) setup capable of rendering physically accurate distance cues. The project employs an EEG-based approach, tracking Event-Related Potential (ERP) measures like Mismatch Negativity (MMN) and P3a as indices of pre-attentive distance change detection.',
    links: [
      { label: 'Thesis info', href: '#' },
    ],
  },
  {
    slug: 'harman-spatial-audio',
    title: 'Acoustic & Perceptual Feature Engineering for Spatial Audio',
    category: 'Industry Collaboration',
    year: '2025',
    image: '/works/harman-spatial.png',
    venue: 'HARMAN International',
    description:
      'Engineered acoustic and perceptual features distinguishing stereo and binaural spatial audio formats. Applied MFCC/cepstral modeling, inter-channel energy statistics, spectral analysis, and PCA-based dimensionality reduction to correlate physical acoustic descriptors with perceptual spatial attributes.',
    links: [],
  },
  {
    slug: 'demant-audio-explorers',
    title: 'Multi-Talker Audio Analysis Pipeline',
    category: 'Case Competition',
    year: '2026',
    image: '/works/audio_explorers_2026.png',
    venue: 'Demant Audio Explorers',
    description:
      'Developed a comprehensive analysis pipeline for complex multi-talker audio environments, implementing Direction of Arrival (DoA) estimation, talker characterization, transcription, and target-speaker enhancement.',
    links: [],
  },
  {
    slug: 'nmf-source-separation',
    title: 'Computational Auditory Scene Analysis via NMF',
    category: 'Research Project',
    year: '2026',
    image: '/works/nmf-casa.png',
    venue: 'Aalborg University Copenhagen',
    description:
      'A systematic evaluation of classical Non-Negative Matrix Factorization (NMF) for audio source separation across extreme audio textures, including dense choral polyphony, tropical soundscapes, and reverberant speech, evaluating 288 distinct hyperparameter configurations.',
    links: [],
  },
  {
    slug: 'anomalous-sound-detection',
    title: 'Unsupervised Anomalous Sound Detection',
    category: 'Research Project',
    year: '2026',
    image: '/works/dcase-anomaly.png',
    venue: 'DCASE 2025 Challenge (Task 2)',
    description:
      'First-shot unsupervised anomaly detection framework designed for machine condition monitoring under domain shift. Compared GMM+MFCC and Mahalanobis distance approaches on log-Mel spectrograms across multiple machine types.',
    links: [],
  },
  {
    slug: 'auditory-subitizing',
    title: 'Spatial Hearing and Auditory Object Enumeration',
    category: 'Research Project',
    year: '2024',
    image: '/works/subitizing.png',
    venue: 'University of Warsaw',
    description:
      'Explored the foundational cognitive boundaries of spatial hearing, gathering preliminary empirical evidence for parallel auditory object enumeration and analyzing the exact influence of spatial cues on auditory subitizing efficiency.',
    collaborators: ['Research Circle of Cognitive Psychology of Music'],
    links: [],
  },
]

export type Publication = {
  authors: string
  title: string
  venue: string
  year: string
  type: string
  doi?: string
  abstract?: string
  href?: string
}

export const publications: Publication[] = [
  {
    authors: 'E. Zawistowski',
    title: 'Timbre Familiarity and Auditory Salience in Spatial Scene Detection: A Preliminary Study with Musicians and Non-Musicians',
    venue: 'International Conference on Auditory Display (ICAD)',
    year: '2026',
    type: 'Extended Abstract',
    href: '#',
  },
  {
    authors: 'E. Zawistowski, M. Sęklewski, J. Zając',
    title: 'Influence of Spatial Hearing on Auditory Parallel Subitizing Efficiency',
    venue: 'Virtual Conference on Computational Audiology (VCCA)',
    year: '2026',
    type: 'Abstract',
    href: '#',
  },
  {
    authors: 'F. Lorenzen, K. Hansen, E. Zawistowski, E. Liapikou',
    title: 'CamJam: A Modular Collaborative and Accessible Digital Musical Interface',
    venue: 'New Interfaces for Musical Expression (NIME)',
    year: '2026',
    type: 'Conference Paper',
    href: '#',
  },
  {
    authors: 'Sofia Przyłuska, Emil Zawistowski, Wiktoria Sodel, Bogumiła Jamiołkowska, Aleksandra Ogrodnik, Patryk Karp, Julia Kuczmierowska, Ewa Czerniawska',
    title: 'Auditory Object Enumeration: Preliminary Evidence of Parallel Auditory Subitizing',
    venue: 'Manuscript in preparation',
    year: '2026',
    type: 'Preprint',
    href: '#',
  },
]

export type NewsItem = {
  date: string
  title: string
  body: string
}

export const news: NewsItem[] = [
  {
    date: '15.09.2026 - 18.09.2026',
    title: 'Volunteering at ICDVRAT 2026',
    body: 'Volunteering at the 16th International Conference on Disability, Virtual Reality & Associated Technologies, hosted at Aalborg University Copenhagen.',
  },
{
    date: '01.09.2026',
    title: 'Starting MSc in Engineering Acoustics at DTU',
    body: 'Beginning Master’s degree studies in Engineering Acoustics at the Technical University of Denmark (DTU).',
  },
  {
    date: '28.08.2026',
    title: 'Defending MSc Thesis at Aalborg University Copenhagen',
    body: 'Defending Master’s thesis in Sound and Music Computing at Aalborg University Copenhagen.',
  },
{
    date: '13.08.2026 - 18.08.2026',
    title: 'Presenting Winning Solution at Demant Canada Headquarters',
    body: 'Following our team\'s win in the Demant Audio Explorers Case Competition, we visited Demant\'s Canadian facilities. We presented our winning Software Case solution at the Toronto headquarters and toured the Oticon production facility in Kitchener, Ontario.',
  },
  {
    date: '28.07.2026',
    title: 'Presenting at ICAD 2026 – The 31st International Conference on Auditory Display, 28-31.07',
    body: 'Presenting during poster session at Escola Superior de Música de Catalunya (ESMUC) located at L’Auditory building in Barcelona',
  },
  {
    date: '06.2026 - 08.2026',
    title: 'Trust Analyst Internship at Paavis',
    body: 'Designed and structured the foundational research methodology and evaluation framework for assessing B2B digital trust signals, as a Trust Analyst Intern at Paavis, Copenhagen.',
  },
  {
    date: '25.06.2026',
    title: 'Presenting at Virtual Conference on Computational Audiology (VCCA 2026)',
    body: 'Presenting virtually during poster session',
  },
  {
    date: '25.06.2026',
    title: 'Presenting at New Interfaces for Musical Expression 2026',
    body: 'Presenting during poster session at Loughborough University London',
  },
  {
    date: '28.05.2026 - 30.05.2026',
    title: 'Volunteering at 160th Audio Engineering Society Convention',
    body: 'Volunteered at the AES Europe 2026 convention at DTU, providing technical support during the conference.',
  },
  {
    date: '13.05.2026',
    title: 'Abstract accepted at Virtual Conference on Computational Audiology (VCCA 2026)',
    body: 'Abstract “Influence of Spatial Hearing on Auditory Parallel Subitizing Efficiency" will be presented during poster session at VCCA 2026',
  },
  {
    date: '08.05.2026',
    title: 'Extended abstract accepted at International Conference on Auditory Display 2026',
    body: 'Extended abstract "Piano stream dominance in spatial auditory scene detection: A preliminary study with musicians and non-musicians" will be presented during poster session at ICAD 2026',
  },
  {
    date: '04.05.2026',
    title: 'Winner of Demant Audio Explorers Case Competition',
    body: 'Together with Wiktoria Sodel, we have won in the Audio Explorers challenge, proposing our solution for Software Case',
  },
  {
    date: '28.04.2026',
    title: 'Volunteering at ADCx Copenhagen 2026',
    body: 'Provided technical support and guided participants during the ADCx Copenhagen conference at Aalborg University.',
  },
  {
    date: '25.04.2026 - 26.04.2026',
    title: 'BR41N.io BCI Hackathon at Augmented Cognition Lab',
    body: 'Developed "Brain-Controlled Jukebox" — a motor imagery-based music selection interface — with Jeppe Dahl Guldager, Julia Jünger, Steffen Møgelmose, and Laurids Jacobsen.',
  },
  {
    date: '23.04.2026',
    title: 'Paper accepted at New Interfaces for Musical Expression 2026',
    body: 'Paper accepted: “CamJam: A Modular Collaborative and Accessible Digital Musical Interface”',
  },
  {
    date: '14.04.2026',
    title: 'Visit at Eriksholm Research Centre',
    body: 'Participated in a DAS student member visit to the Eriksholm Research Centre, featuring lectures on hearing research and laboratory tours.',
  },
  {
    date: '15.02.2026 - 10.03.2026',
    title: 'Peer Reviewer for NIME 2026',
    body: 'Served as a peer reviewer for paper submissions to the International Conference on New Interfaces for Musical Expression 2026.',
  },
  {
    date: '22.11.2025',
    title: 'Won "Innovation Award" at Techathon - AAU Sydhavnen',
    body: 'Together with Jinpeng Zhang and Alberte Lohse, we designed an smart recycling drop-off system using computer vision, pathfinding, and 3D modeling.',
  },
  {
    date: '20.01.2025',
    title: 'Completed Student Research Project with HARMAN International',
    body: 'Finalized an intensive industry research collaboration engineering acoustic and perceptual features for stereo vs. binaural spatial formats.',
  },
  {
    date: '11.07.2024',
    title: 'Defended Bachelor\'s Thesis at University of Warsaw',
    body: 'Defended thesis "The Phenomenon of Auditory Salience: An Experimental Examination with Consideration of Spatial Aspects," examining how musicians\' long-term memory for instrument timbre influences auditory attention in spatial listening.',
  },
  {
    date: '03.2023',
    title: 'Co-Founded Research Circle of Cognitive Psychology of Music',
    body: 'Co-founded and led a student research organisation at the Faculty of Psychology, University of Warsaw, focused on auditory perception.',
  },
]

export const biography = {
  short:
    'I am a researcher and engineer working with sound, hearing, and computational methods. My work spans psychoacoustics, spatial audio, and computational auditory scene analysis — bridging cognitive science and technical acoustic engineering to understand how the brain and machine intelligence process complex acoustic fields.',
  paragraphs: [
    'I am currently completing my Master’s degree in Sound and Music Computing at Aalborg University Copenhagen, and will continue my academic path in Engineering Acoustics at the Technical University of Denmark (DTU) starting September 2026. My core research investigates the neural and perceptual mechanisms underlying spatial hearing, with a primary focus on auditory distance perception and pre-attentive neural markers using electrophysiology (EEG/ERP) and Wave Field Synthesis.',
    'Prior to my studies in Denmark, I graduated with a BSc in Cognitive Science from the University of Warsaw, where I co-founded and led the Research Circle of Cognitive Psychology of Music. I also hold a Vocational Diploma in Sound Engineering, giving my highly theoretical research a solid, hands-on empirical foundation in studio and live sound environments.',
    'My interdisciplinary output spans across accepted papers at NIME, ICAD, and VCCA. Beyond the laboratory, I translate my fascination with acoustics into cultural practice as an independent radio host on Radio Kapitał, producing shows that communicate advanced perceptual and psychoacoustic concepts to the public, alongside working as a freelance and volunteer sound engineer.',
  ],
  education: [
    { year: '2026–', text: 'MSc, Engineering Acoustics — Technical University of Denmark (DTU)' },
    { year: '2024–2026', text: 'MSc, Sound and Music Computing — Aalborg University Copenhagen' },
    { year: '2021–2024', text: 'BSc, Cognitive Science — University of Warsaw' },
    { year: '2021–2023', text: 'Vocational Diploma, Sound Engineering — Academy of Audio Engineering, Warsaw' },
  ],
  appointments: [
    { year: '2024–2025', text: 'Student Research Project Partner, HARMAN International' },
    { year: '2023–Present', text: 'Freelance & Volunteer Sound Engineer, Copenhagen & Warsaw' },
    { year: '2023–2024', text: 'Co-Founder & Vice President, Research Circle of Cognitive Psychology of Music, Warsaw' },
    { year: '2022–Present', text: 'Independent Radio Host, Radio Kapitał' },
  ],
}

export const contact = {
  email: 'zemilpl@gmail.com',
  phone: '+45 71 84 05 18',
  address: [
    'Copenhagen, Denmark',
  ],
  links: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=qwiXzX0AAAAJ', icon: 'google-scholar' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0003-7500-791X', icon: 'orcid' },
    { label: 'ResearchGate', href: 'https://researchgate.net/profile/Emil-Zawistowski', icon: 'researchgate' },
    { label: 'GitHub', href: 'https://github.com/emilzawistowski', icon: 'github' },
  ] satisfies ContactLink[],
}