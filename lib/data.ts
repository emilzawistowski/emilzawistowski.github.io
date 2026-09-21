export type Work = {
  slug: string
  title: string
  keywords: string[]
  shortTitle: string
  focus: string
  question: string
  methods: string
  findings: string
  category: string
  year: string
  image: string
  featured?: boolean
  selected?: boolean
  venue: string
  description: string
  collaborators?: string[]
  links?: { label: string; href: string }[]
}

export type ContactLink = {
  label: string
  href: string
  icon:
    'google-scholar' | 'orcid' | 'researchgate' | 'github' | 'linkedin' | 'osf'
}

export const scholar = {
  name: 'Emil Zawistowski',
  title: 'Emil Zawistowski',
  role: 'Hearing Science | Auditory Cognition',
  affiliation: 'Technical University of Denmark (DTU)',
  location: 'Copenhagen, DK',
  email: 'zemilpl@gmail.com',
}

export const works: Work[] = [
  {
    slug: 'msc-thesis-auditory-distance',
    keywords: ['EEG', 'WFS', 'Auditory distance'],
    shortTitle: 'Auditory Distance & EEG',
    focus: 'MSc thesis · EEG / WFS',
    question:
      'Does the brain automatically detect changes in sound-source distance in a multi-talker environment?',
    methods:
      'A passive oddball experiment with 20 participants, a 60-loudspeaker Wave Field Synthesis array and 32-channel EEG. Analyses targeted MMN and P3a responses and single-trial CSP+LDA decoding.',
    findings:
      'Neither component showed a reliable distance-deviant effect, and decoding did not exceed chance. Bayes factors favoured the null. The thesis discusses methodological limitations and provides a reusable WFS/EEG framework for further research.',
    title:
      'Auditory Distance Perception in Wave Field Synthesis: Pre-Attentive Neural Processing in a Cocktail-Party Environment',
    category: 'Thesis',
    year: '2026',
    image: '/works/thesis-eeg.png',
    featured: true,
    selected: true,
    venue: 'Aalborg University Copenhagen',
    description:
      'Investigated whether the brain automatically detects shifts in sound-source distance within a multi-talker "cocktail party" scene, using a 60-loudspeaker Wave Field Synthesis array to render physically accurate distance cues (wavefront curvature, direct-to-reverberant ratio, intensity gradients). A passive oddball paradigm with 32-channel EEG in 20 participants targeted the Mismatch Negativity (MMN) and P3a components, plus single-trial CSP+LDA decoding. Contrary to predictions, neither component showed a reliable distance-deviant effect (Bayes factors favouring the null) and decoding did not exceed chance — a null result discussed against methodological limitations, alongside a validated, reusable WFS/EEG methodological framework for future work.',
    links: [
      {
        label: 'Code & analysis',
        href: 'https://github.com/emilzawistowski/MSc_Emil_Zawistowski',
      },
    ],
  },
  {
    slug: 'harman-spatial-audio',
    keywords: ['Spatial audio', 'Acoustic features'],
    shortTitle: 'Spatial Audio Features',
    focus: 'HARMAN · Industry collaboration',
    question:
      'Which acoustic features help describe the perceptual differences between stereo and binaural spatial audio?',
    methods:
      'A semester project with HARMAN’s Advanced Audio Engineering team, combining a literature-based perceptual lexicon with acoustic feature extraction.',
    findings:
      'The project investigated links between acoustic descriptors and spatial perception. Full methods and technical results are withheld under an industry confidentiality agreement.',
    title: 'Acoustic Feature Analysis of Spatial Audio',
    category: 'Industry Collaboration',
    year: '2024',
    image: '/works/harman-spatial.png',
    featured: true,
    selected: true,
    venue: 'HARMAN International',
    description:
      "A semester project with HARMAN International's Advanced Audio Engineering team, investigating acoustic features and perceptual attributes that differentiate stereo and binaural spatial audio, combining a literature-based perceptual lexicon with acoustic feature extraction. Full methodological and technical detail is withheld under an industry confidentiality agreement.",
    collaborators: ['Daniel Sousa'],
    links: [],
  },
  {
    slug: 'demant-audio-explorers',
    keywords: ['Speech enhancement', 'Source localisation'],
    shortTitle: 'Target Talker Extraction',
    focus: 'Demant · Winning solution',
    question:
      'How can a talker of interest be identified and enhanced in a multi-talker hearing-aid recording?',
    methods:
      'Analysis of a four-channel recording to estimate the number, directions, gender and content of talkers, followed by identification and enhancement of the talker of interest.',
    findings:
      'Our team, EarCode Duo, won the Demant Audio Explorers software engineering case. Full technical details are withheld under the competition’s confidentiality terms.',
    title:
      'Software Engineering Case: Extracting the Talker of Interest in a Multi-Talker Sound Scene',
    category: 'Competition',
    year: '2026',
    image: '/works/audio_explorers_2026.png',
    featured: true,
    selected: true,
    venue: 'Demant Audio Explorers (Team "EarCode Duo")',
    description:
      "Winning solution to Demant's Audio Explorers case competition, analysing a four-channel hearing-aid recording of a multi-talker scene to estimate each talker's number, direction, gender, and content, and to identify and enhance the talker of interest. Full technical detail is withheld under the competition's confidentiality terms.",
    collaborators: ['Wiktoria Sodel'],
    links: [],
  },
  {
    slug: 'nmf-source-separation',
    keywords: ['NMF', 'Source separation'],
    shortTitle: 'NMF Source Separation',
    focus: 'Computational auditory scene analysis',
    question:
      'How well does classical non-negative matrix factorization separate sources in dense and reverberant audio textures?',
    methods:
      'Evaluation across 288 configurations, varying rank, beta-divergence, sparsity, iterations and phase recovery for choral polyphony, tropical soundscapes and reverberant speech.',
    findings:
      'High rank, Euclidean divergence and zero regularization gave the best reconstruction quality: approximately 5–10 dB SDR for choir and speech, and 20–29 dB for environmental textures. The results also exposed limitations of reconstruction-based metrics, motivating a reformulation of the proposed Mix Clarity Index and psychoacoustic overlap measures.',
    title:
      'Computational Auditory Scene Analysis using Non-negative Matrix Factorization: Performance Evaluation on Extreme Audio Textures',
    category: 'Research Project',
    year: '2026',
    image: '/works/nmf-casa.png',
    featured: true,
    selected: true,
    venue: 'Aalborg University Copenhagen',
    description:
      'A systematic evaluation of classical NMF for source separation on extreme audio textures (dense choral polyphony, tropical soundscapes, reverberant speech), sweeping rank, beta-divergence, sparsity regularization, iteration count, and phase-recovery method across 288 configurations. High rank, Euclidean divergence, and zero regularization gave the best reconstruction quality (~5–10 dB SDR for choir/speech, ~20–29 dB for environmental textures), while exposing limitations in reconstruction-based metrics and motivating a reformulation of the proposed Mix Clarity Index and psychoacoustic overlap measures.',
    links: [],
  },
  {
    slug: 'anomalous-sound-detection',
    keywords: ['Anomaly detection', 'Domain shift'],
    shortTitle: 'Anomalous Sound Detection',
    focus: 'Audio ML · DCASE dataset',
    question:
      'How well do unsupervised acoustic models detect machine anomalies under domain shift?',
    methods:
      'A coursework study using the DCASE 2025 Task 2 dataset across seven machine types. Compared MFCC- and log-mel-based Gaussian Mixture Models with Mahalanobis distances on mean-pooled log-mel features.',
    findings:
      'The Mahalanobis approach generalized best under domain shift, reaching AUC values of 0.6394 for valves and 0.6234 for sliders.',
    title:
      'DCASE 2025 – Task 2: First-Shot Unsupervised Anomalous Sound Detection for Machine Condition Monitoring',
    category: 'Research Project',
    year: '2026',
    image: '/works/dcase-anomaly.png',
    selected: true,
    venue:
      'Aalborg University Copenhagen (coursework based on the DCASE 2025 Task 2 dataset)',
    description:
      'A student mini-project exploring first-shot unsupervised anomalous sound detection for industrial machine condition monitoring, using the DCASE 2025 Task 2 dataset. Compared MFCC- and log-mel-based Gaussian Mixture Models against a Mahalanobis-distance approach on mean-pooled log-mel features across seven machine types; the Mahalanobis approach generalized best under domain shift, reaching AUC scores of 0.6394 (valves) and 0.6234 (sliders).',
    links: [],
  },
  {
    slug: 'auditory-object-enumeration',
    keywords: ['Auditory subitizing', 'Enumeration'],
    shortTitle: 'Auditory Object Enumeration',
    focus: 'Psychoacoustics · Auditory cognition',
    question:
      'Can listeners rapidly enumerate simultaneous auditory objects without counting?',
    methods:
      'An experimental study of parallel auditory object enumeration, investigating the range over which listeners can subitize.',
    findings:
      'Preliminary findings suggest a limited ability to enumerate simultaneous auditory objects, consistent with an auditory subitizing mechanism.',
    title:
      'Auditory Object Enumeration: Preliminary Evidence of Parallel Auditory Subitizing',
    category: 'Preprint',
    year: '2024',
    image: '/works/subitizing.png',
    selected: true,
    venue:
      'University of Warsaw — Research Circle of Cognitive Psychology of Music',
    description:
      "Investigated participants' capacity to subitize (rapidly enumerate without counting) auditory objects presented in parallel, and aimed to determine the subitizing range for auditory stimuli. Findings suggest a limited ability to enumerate auditory objects presented in parallel, indicative of an auditory subitizing mechanism.",
    collaborators: [
      'Sofia Kalina Przyłuska',
      'Wiktoria Sodel',
      'Bogumiła Jamiołkowska',
      'Aleksandra Ogrodnik',
      'Patryk Karp',
      'Julia Kuczmierowska',
      'Ewa Czerniawska',
    ],
    links: [],
  },
  {
    slug: 'spatial-hearing-subitizing-efficiency',
    keywords: ['Spatial hearing', 'Auditory subitizing'],
    shortTitle: 'Spatial Hearing & Subitizing',
    focus: 'Spatial hearing · Auditory cognition',
    question:
      'How does the spatial distribution of simultaneous sounds influence auditory subitizing?',
    methods:
      'An experimental investigation of spatial cues in parallel auditory object enumeration, building on preliminary evidence for auditory subitizing.',
    findings:
      'The project examines the role of spatial cues in enumeration efficiency. See the related conference abstract in Publications.',
    title:
      'Influence of Spatial Hearing on Auditory Parallel Subitizing Efficiency',
    category: 'Research Project',
    year: '2024',
    image: '/works/subitizing.png',
    selected: true,
    venue: 'University of Warsaw',
    description:
      'Explored how the spatial distribution of simultaneously presented sounds influences auditory parallel subitizing efficiency, building on preliminary evidence for a parallel auditory subitizing mechanism to examine the specific role of spatial cues.',
    collaborators: ['Mikołaj Sęklewski', 'Jakub Zając'],
    links: [],
  },
  {
    slug: 'camjam',
    keywords: ['Musical interaction', 'Accessibility'],
    shortTitle: 'CamJam',
    focus: 'NIME · Musical interaction',
    question:
      'How can camera-based interfaces support collaborative music-making by musicians and non-musicians?',
    methods:
      'Four embodied interaction stations arranged in a circle: a hand-height drum machine, a contrast-based synthesizer, facial-expression chords and a gesture-controlled plucked-string instrument, sharing a synchronized loop.',
    findings:
      'A modular digital musical interface designed for accessible, collaborative music-making. The work is associated with a conference paper at NIME 2026.',
    title:
      'CamJam: A Modular Collaborative and Accessible Digital Musical Interface',
    category: 'Research Project',
    year: '2026',
    image: '/works/camjam.png',
    selected: true,
    venue: 'New Interfaces for Musical Expression (NIME)',
    description:
      'A modular, collaborative, and accessible digital musical interface supporting inclusive music-making, enabling musicians and non-musicians to engage in shared sound creation through embodied, camera-based interaction modules that each contribute a distinct musical role within a synchronized loop. Stations include a drum machine controlled by hand height across three vertical zones, a contrast-based synthesizer modulated by dark paper shapes placed on a white background, an interface mapping facial expressions to chord progressions with on-screen emotion display, and a plucked-string instrument where vertical hand position maps to pitch with plucking gestures — arranged as four interaction stations in a circle.',
    collaborators: [
      'Frej Spangsberg Lorenzen',
      'Kevin Thor Hansen',
      'Eirini Liapikou',
    ],
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
    title:
      'Timbre Familiarity and Auditory Salience in Spatial Scene Detection: A Preliminary Study with Musicians and Non-Musicians',
    venue: 'International Conference on Auditory Display (ICAD)',
    year: '2026',
    type: 'Extended Abstract',
  },
  {
    authors: 'E. Zawistowski, M. Sęklewski, J. Zając',
    title:
      'Influence of Spatial Hearing on Auditory Parallel Subitizing Efficiency',
    venue: 'Virtual Conference on Computational Audiology (VCCA)',
    year: '2026',
    type: 'Abstract',
  },
  {
    authors: 'F. Lorenzen, K. Hansen, E. Zawistowski, E. Liapikou',
    title:
      'CamJam: A Modular Collaborative and Accessible Digital Musical Interface',
    venue: 'New Interfaces for Musical Expression (NIME)',
    year: '2026',
    type: 'Conference Paper',
  },
  {
    authors:
      'S. Przyłuska, E. Zawistowski, W. Sodel, B. Jamiołkowska, A. Ogrodnik, P. Karp, J. Kuczmierowska, E. Czerniawska',
    title:
      'Auditory Object Enumeration: Preliminary Evidence of Parallel Auditory Subitizing',
    venue: 'OSF Preprints',
    year: '2026',
    type: 'Preprint',
    href: 'https://osf.io/2rwja',
  },
]

export type NewsItem = {
  date: string
  title: string
  body: string
}

export const news: NewsItem[] = [
  {
    date: '11.11.2026',
    title: 'Volunteering at Danish Sound Day',
    body: 'Volunteering at Danish Sound Day, organised by the Danish Sound Cluster.',
  },
  {
    date: '17.09.2026 - 20.09.2026',
    title: 'Participated in Nordic AI Cup 2026',
    body: 'Took part solo in the Nordic AI Cup 2026 national challenge, a four-day online AI competition hosted by Ambolt AI.',
  },
  {
    date: '15.09.2026 - 18.09.2026',
    title: 'Volunteering at ICDVRAT 2026',
    body: 'Volunteering at the 16th International Conference on Disability, Virtual Reality & Associated Technologies, hosted at Aalborg University Copenhagen.',
  },
  {
    date: '07.09.2026',
    title: 'Attended NAD Poster Course 2026',
    body: 'Attended a poster-communication course led by Gert K. Nielsen at Neuroscience Academy Denmark (NAD), ahead of presenting at the NAD 2026 Annual Meeting.',
  },
  {
    date: '01.09.2026',
    title: 'Starting MSc in Engineering Acoustics at DTU',
    body: 'Beginning Master’s degree studies in Engineering Acoustics at the Technical University of Denmark (DTU).',
  },
  {
    date: '28.08.2026',
    title: 'Defended MSc Thesis at Aalborg University Copenhagen',
    body: 'Defended the Master’s thesis in Sound and Music Computing at Aalborg University Copenhagen; the final grade was 12/12, the highest possible grade in the Danish system.',
  },
  {
    date: '13.08.2026 - 18.08.2026',
    title: 'Presenting Winning Solution at Demant Canada Headquarters',
    body: "Following our team's win in the Demant Audio Explorers Case Competition, we visited Demant's Canadian facilities. We presented our winning Software Case solution at the Toronto headquarters and toured the Oticon production facility in Kitchener, Ontario.",
  },
  {
    date: '28.07.2026',
    title:
      'Presenting at ICAD 2026 – The 31st International Conference on Auditory Display, 28-31.07',
    body: 'Presenting during poster session at Escola Superior de Música de Catalunya (ESMUC) located at L’Auditory building in Barcelona',
  },
  {
    date: '06.07.2026',
    title: 'Neurojukebox Selected for FENS Art & Science Initiative',
    body: 'Our project "Neurojukebox: A Brain-Controlled Sound and Vision" was selected as one of 10 projects featured in the FENS Communication Committee\'s Art & Science initiative. A QR code linking to the project will appear on a poster at FENS Forum 2026 in Barcelona.',
  },
  {
    date: '06.2026 - 08.2026',
    title: 'Trust Analyst Internship at Paavis',
    body: 'Designed and structured the foundational research methodology and evaluation framework for assessing B2B digital trust signals, as a Trust Analyst Intern at Paavis, Copenhagen.',
  },
  {
    date: '25.06.2026',
    title:
      'Presenting at Virtual Conference on Computational Audiology (VCCA 2026)',
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
    title:
      'Abstract accepted at Virtual Conference on Computational Audiology (VCCA 2026)',
    body: 'Abstract “Influence of Spatial Hearing on Auditory Parallel Subitizing Efficiency" will be presented during poster session at VCCA 2026',
  },
  {
    date: '08.05.2026',
    title:
      'Extended abstract accepted at International Conference on Auditory Display 2026',
    body: 'Extended abstract "Timbre Familiarity and Auditory Salience in Spatial Scene Detection: A Preliminary Study with Musicians and Non-Musicians" will be presented during poster session at ICAD 2026',
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
    title: "Defended Bachelor's Thesis at University of Warsaw",
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
    'My research investigates the cognitive mechanisms underlying auditory attention, organisation, and the segregation of sound in complex acoustic environments. I approach these questions through behavioural, neurophysiological, and computational methods.',
  paragraphs: [
    'I am studying Engineering Acoustics at the Technical University of Denmark (DTU), after completing my MSc in Sound and Music Computing at Aalborg University Copenhagen in August 2026. My thesis investigated auditory distance perception and pre-attentive neural processing using EEG and Wave Field Synthesis.',
    'I hold a BSc in Cognitive Science from the University of Warsaw, where I co-founded the Research Circle of Cognitive Psychology of Music, and a vocational diploma in sound engineering. My research and collaborations connect auditory cognition with acoustic measurement, signal processing and experimental methods.',
    'Beyond research, I host programmes on Radio Kapitał exploring psychoacoustics, music and listening, and work as a freelance and volunteer sound engineer.',
  ],
  education: [
    {
      year: '2026–',
      text: 'MSc, Engineering Acoustics — Technical University of Denmark (DTU)',
    },
    {
      year: '2024–2026',
      text: 'MSc, Sound and Music Computing — Aalborg University Copenhagen',
    },
    {
      year: '2021–2024',
      text: 'BSc, Cognitive Science — University of Warsaw',
    },
    {
      year: '2021–2023',
      text: 'Vocational Diploma, Sound Engineering — Academy of Audio Engineering, Warsaw',
    },
  ],
  appointments: [
    {
      year: '2024–2025',
      text: 'Student Research Project Partner — HARMAN International',
    },
    {
      year: '2023–Present',
      text: 'Freelance & Volunteer Sound Engineer — Copenhagen & Warsaw',
    },
    {
      year: '2023–2024',
      text: 'Co-Founder & Vice President — Research Circle of Cognitive Psychology of Music, Warsaw',
    },
    { year: '2022–Present', text: 'Independent Radio Host — Radio Kapitał' },
  ],
}

export const contact = {
  email: 'zemilpl@gmail.com',
  phone: '+45 71 84 05 18',
  address: ['Copenhagen, Denmark'],
  links: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=qwiXzX0AAAAJ',
      icon: 'google-scholar',
    },
    {
      label: 'ORCID',
      href: 'https://orcid.org/0009-0003-7500-791X',
      icon: 'orcid',
    },
    {
      label: 'ResearchGate',
      href: 'https://researchgate.net/profile/Emil-Zawistowski',
      icon: 'researchgate',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/emilzawistowski',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emil-zawistowski/',
      icon: 'linkedin',
    },
    { label: 'OSF', href: 'https://osf.io/user/bxdz7', icon: 'osf' },
  ] satisfies ContactLink[],
}
