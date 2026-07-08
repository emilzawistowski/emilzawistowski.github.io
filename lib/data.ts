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
  name: 'Mira Haldén',
  title: 'Dr. Mira Haldén',
  role: 'Computational Systems / Information Theory',
  affiliation: 'Institute for Data & Perception',
  location: 'Berlin, DE',
  email: 'halden@idp-research.org',
}

export const works: Work[] = [
  {
    slug: 'data-topology',
    title: 'Topologies of Distributed Information',
    category: 'Research Project',
    year: '2025',
    image: '/works/data-topology.png',
    venue: 'Institute for Data & Perception',
    description:
      'A multi-year investigation into how information density reorganizes itself across distributed networks. The project models emergent topological structures using large-scale graph sampling and develops a formal vocabulary for describing informational curvature.',
    collaborators: ['L. Nakamura', 'S. Ferreira'],
    links: [
      { label: 'Project page', href: '#' },
      { label: 'Dataset', href: '#' },
    ],
  },
  {
    slug: 'spectral-analysis',
    title: 'Spectral Signatures of Complex Systems',
    category: 'Research Project',
    year: '2024',
    image: '/works/spectral.png',
    venue: 'Journal of Computational Systems',
    description:
      'Introduces a spectral decomposition method for identifying latent regularities in high-dimensional time-varying systems. Applied to climate, finance, and neural datasets to reveal shared frequency structures.',
    collaborators: ['R. Vogel'],
    links: [{ label: 'Preprint', href: '#' }],
  },
  {
    slug: 'matrix-encoding',
    title: 'Matrix Encoding for Perceptual Data',
    category: 'Method',
    year: '2024',
    image: '/works/matrix-grid.png',
    venue: 'ACM Transactions on Information Systems',
    description:
      'A compact encoding scheme that maps perceptual features into dense matrix representations, enabling lossless reconstruction at a fraction of conventional storage cost.',
    links: [{ label: 'Code', href: '#' }],
  },
  {
    slug: 'signal-fields',
    title: 'Signal Fields & Continuous Measurement',
    category: 'Research Project',
    year: '2023',
    image: '/works/waveform.png',
    venue: 'European Symposium on Signal Theory',
    description:
      'Reframes discrete sampling as a continuous field problem, proposing a measurement framework that preserves phase relationships across arbitrary sampling densities.',
    collaborators: ['A. Costa', 'T. Bauer'],
  },
  {
    slug: 'point-clouds',
    title: 'Volumetric Point Cloud Semantics',
    category: 'Method',
    year: '2023',
    image: '/works/pointcloud.png',
    venue: 'International Conference on Data Visualization',
    description:
      'A semantic labeling approach for unstructured 3D point clouds that operates without prior meshing, using density gradients to infer object boundaries.',
    links: [{ label: 'Demo', href: '#' }],
  },
  {
    slug: 'time-series',
    title: 'Non-Stationary Time Series Modeling',
    category: 'Research Project',
    year: '2022',
    image: '/works/timeseries.png',
    venue: 'Institute for Data & Perception',
    description:
      'Develops estimators robust to regime shifts in non-stationary processes, with applications to environmental monitoring and long-horizon forecasting.',
    collaborators: ['S. Ferreira'],
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
    authors: 'M. Haldén, L. Nakamura, S. Ferreira',
    title: 'Informational Curvature in Distributed Networks',
    venue: 'Nature Computational Science',
    year: '2025',
    type: 'Journal',
    doi: '10.1038/s43588-025-00812-3',
    abstract:
      'We introduce a formal notion of informational curvature to describe how information density reorganizes across distributed networks. Using large-scale graph sampling, we show that emergent topological structures follow predictable curvature laws, and we derive bounds relating network geometry to information throughput.',
    href: '#',
  },
  {
    authors: 'M. Haldén, R. Vogel',
    title: 'Spectral Signatures of Complex Systems',
    venue: 'Journal of Computational Systems, 42(3)',
    year: '2024',
    type: 'Journal',
    doi: '10.1016/j.jcs.2024.04.011',
    abstract:
      'A spectral decomposition method is proposed for identifying latent regularities in high-dimensional, time-varying systems. Applied to climate, finance, and neural datasets, the method reveals shared frequency structures that are invisible to conventional correlation analysis.',
    href: '#',
  },
  {
    authors: 'M. Haldén',
    title: 'Matrix Encoding for Perceptual Data',
    venue: 'ACM Transactions on Information Systems, 41(2)',
    year: '2024',
    type: 'Journal',
    doi: '10.1145/3612100',
    abstract:
      'This paper presents a compact encoding scheme mapping perceptual features into dense matrix representations, enabling lossless reconstruction at a fraction of conventional storage cost while preserving downstream task performance.',
    href: '#',
  },
  {
    authors: 'M. Haldén, A. Costa, T. Bauer',
    title: 'A Continuous Field Framework for Discrete Measurement',
    venue: 'Proc. European Symposium on Signal Theory',
    year: '2023',
    type: 'Conference',
    doi: '10.1109/ESST.2023.00147',
    abstract:
      'We reframe discrete sampling as a continuous field problem, proposing a measurement framework that preserves phase relationships across arbitrary sampling densities and enables reconstruction beyond the classical Nyquist limit under mild assumptions.',
    href: '#',
  },
  {
    authors: 'M. Haldén',
    title: 'Density-Gradient Semantics for 3D Point Clouds',
    venue: 'Proc. Intl. Conf. on Data Visualization',
    year: '2023',
    type: 'Conference',
    doi: '10.1109/ICDV.2023.00091',
    abstract:
      'A semantic labeling approach for unstructured 3D point clouds is introduced that operates without prior meshing, using density gradients to infer object boundaries with accuracy comparable to mesh-based pipelines at lower computational cost.',
    href: '#',
  },
  {
    authors: 'M. Haldén, S. Ferreira',
    title: 'Robust Estimation under Regime Shifts',
    venue: 'Statistics & Computing, 32(4)',
    year: '2022',
    type: 'Journal',
    doi: '10.1007/s11222-022-10118-x',
    abstract:
      'We develop estimators robust to regime shifts in non-stationary processes, with theoretical guarantees under bounded shift frequency and empirical validation on environmental monitoring and long-horizon forecasting tasks.',
    href: '#',
  },
  {
    authors: 'M. Haldén',
    title: 'On the Limits of Compression in Perceptual Systems',
    venue: 'PhD Thesis, Technical University of Munich',
    year: '2020',
    type: 'Thesis',
    doi: '10.14459/2020md1547821',
    abstract:
      'This thesis examines the fundamental limits of compression in perceptual systems, establishing information-theoretic bounds that connect perceptual salience to achievable compression ratios across visual and auditory modalities.',
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
    date: '2026.06.12',
    title: 'Keynote at the Symposium on Information & Perception',
    body: 'Presenting new results on informational curvature and its implications for distributed sensing networks.',
  },
  {
    date: '2026.04.03',
    title: 'New paper accepted to Nature Computational Science',
    body: '“Informational Curvature in Distributed Networks” has been accepted for publication.',
  },
  {
    date: '2026.02.20',
    title: 'Open dataset released',
    body: 'The distributed-topology sampling dataset (2.4 TB) is now publicly available under CC-BY.',
  },
  {
    date: '2025.11.08',
    title: 'Visiting researcher, ETH Zürich',
    body: 'Joining the Computational Systems Group for a three-month collaboration on spectral methods.',
  },
  {
    date: '2025.09.15',
    title: 'Grant awarded',
    body: 'Received a four-year grant to continue the Topologies of Distributed Information project.',
  },
]

export const biography = {
  short:
    'Dr. Mira Haldén is a researcher working at the intersection of computational systems, information theory, and data visualization. Her work formalizes how information organizes itself across scale, and translates those structures into precise visual and sonic representations.',
  paragraphs: [
    'Mira Haldén leads the Information & Perception group at the Institute for Data & Perception in Berlin. Her research develops mathematical frameworks for describing the structure of large, non-stationary datasets, with a particular focus on the topology of distributed information.',
    'She received her PhD from the Technical University of Munich in 2020, where her thesis examined the fundamental limits of compression in perceptual systems. Prior to her current position she held research posts at ETH Zürich and the Max Planck Institute.',
    'Her work has been published in Nature Computational Science, the Journal of Computational Systems, and ACM Transactions on Information Systems, and has been presented at symposia across Europe and Asia. She collaborates frequently with artists and composers on projects that render scientific data as perceptual experience.',
  ],
  education: [
    { year: '2020', text: 'PhD, Computer Science — Technical University of Munich' },
    { year: '2016', text: 'MSc, Applied Mathematics — ETH Zürich' },
    { year: '2014', text: 'BSc, Physics — University of Copenhagen' },
    { year: '2013', text: 'Visiting Student, Kyoto University' },
    { year: '2011', text: 'Foundation Diploma, Mathematics — Aarhus University' },
  ],
  appointments: [
    { year: '2022–', text: 'Group Lead, Institute for Data & Perception, Berlin' },
    { year: '2020–2022', text: 'Postdoctoral Researcher, ETH Zürich' },
    { year: '2018–2020', text: 'Research Assistant, Max Planck Institute' },
    { year: '2016–2018', text: 'Visiting Scholar, University of Tokyo' },
    { year: '2015–2016', text: 'Teaching Fellow, ETH Zürich' },
  ],
}

export const contact = {
  email: 'halden@idp-research.org',
  phone: '+49 30 0000 0000',
  address: [
    'Institute for Data & Perception',
    'Chausseestraße 128',
    '10115 Berlin, Germany',
  ],
  links: [
    { label: 'Google Scholar', href: '#' },
    { label: 'ORCID', href: '#' },
    { label: 'arXiv', href: '#' },
    { label: 'GitHub', href: '#' },
  ],
}
