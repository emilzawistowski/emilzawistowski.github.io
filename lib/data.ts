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
      'Investigating how auditory distance affects auditory salience using a Wave Field Synthesis (WFS) setup capable of rendering physically accurate distance cues. The project employs an EEG-based approach, tracking Event-Related Potential (ERP) measures like Mismatch Negativity (MMN) and P3a as indices of pre-attentive distance change detection.',
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
    featured: true
  },
  {
    slug: 'demant-audio-explorers',
    title: 'Multi-Talker Audio Analysis Pipeline',
    category: 'Case Competition',
    year: '2026',
    image: '/works/demant-pipeline.png',
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
    title: 'Piano Stream Dominance in Spatial Auditory Scene Detection',
    venue: 'International Conference on Auditory Display (ICAD)',
    year: '2026',
    type: 'Conference',
    href: '#',
  },
  {
    authors: 'E. Zawistowski, et al.',
    title: 'Influence of Spatial Hearing on Auditory Parallel Subitizing Efficiency',
    venue: 'Virtual Conference on Computational Audiology (VCCA)',
    year: '2026',
    type: 'Conference',
    href: '#',
  },
  {
    authors: 'F. Lorenzen, et al.',
    title: 'CamJam: A Modular Collaborative and Accessible Digital Musical Interface',
    venue: 'New Interfaces for Musical Expression (NIME)',
    year: '2026',
    type: 'Conference',
    href: '#',
  },
  {
    authors: 'E. Zawistowski, et al.',
    title: 'Auditory Object Enumeration: Preliminary Evidence of Parallel Auditory Subitizing',
    venue: 'Preprint / Manuscript in preparation',
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
    date: '2026.09.01',
    title: 'Starting MSc in Engineering Acoustics at DTU',
    body: 'Moving to the Technical University of Denmark (DTU) to begin a Master of Science program focusing on Engineering Acoustics.',
  },
  {
    date: '2026.05.01',
    title: 'Papers accepted at ICAD, VCCA, and NIME',
    body: 'Research contributions on spatial auditory scene detection, auditory subitizing, and collaborative musical interfaces have been accepted for presentation at international conferences.',
  },
  {
    date: '2026.03.15',
    title: 'Winner of Demant Audio Explorers Case Competition',
    body: 'Successfully developed and pitched a full multi-talker audio analysis pipeline, taking first place in the 2026 competition.',
  },
  {
    date: '2025.01.15',
    title: 'Completed Spatial Audio Project with HARMAN',
    body: 'Finalized an intensive industry research collaboration engineering acoustic and perceptual features for stereo vs. binaural spatial formats.',
  },
]

export const biography = {
  short:
    'Emil Zawistowski is an audio researcher and engineering student working at the intersection of psychoacoustics, spatial audio, and computational auditory scene analysis. His work bridges cognitive science and technical acoustic engineering to dissect how the human brain and machine intelligence process complex acoustic fields.',
  paragraphs: [
    'Emil is currently completing his Master’s degree in Sound and Music Computing at Aalborg University Copenhagen, and will continue his academic path in Engineering Acoustics at the Technical University of Denmark (DTU) starting September 2026. His core research investigates the neural and perceptual mechanisms underlying spatial hearing, with a primary focus on auditory distance perception and pre-attentive neural markers using electrophysiology (EEG/ERP) and Wave Field Synthesis.',
    'Prior to his studies in Denmark, he graduated with a BSc in Cognitive Science from the University of Warsaw, where he co-founded and led the Research Circle of Cognitive Psychology of Music. He also holds a Vocational Diploma in Sound Engineering, giving his highly theoretical research a solid, hands-on empirical foundation in studio and live sound environments.',
    'His interdisciplinary output spans across accepted papers at NIME, ICAD, and VCCA. Beyond the laboratory, Emil translates his fascination with acoustics into cultural practice as an independent radio host on Radio Kapitał, producing shows that communicate advanced perceptual and psychoacoustic concepts to the public, alongside working as a freelance and volunteer sound engineer.',
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
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=qwiXzX0AAAAJ' },
    { label: 'ORCID', href: 'https://orcid.org/0009-0003-7500-791X' },
    { label: 'ResearchGate', href: 'https://researchgate.net/profile/Emil-Zawistowski' },
  ],
}