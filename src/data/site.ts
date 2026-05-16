export const SITE = {
  name: 'Wilson · 邓伟臣',
  nameEn: 'Wilson Deng',
  title: 'Senior Product Manager',
  email: '904****96@qq.com',
  phone: '130****8811',
  location: 'Beijing',
  locationEn: 'Beijing, China',
  copyright: '© 2024 Wilson Deng. Built with purpose.',
} as const

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const

export const IMAGES = {
  heroDashboard:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAdQ3U90QnOwmP3Pj0ehqNPb5Z7HksZqYrWlP_xWkrEGg53rlubY31DFVdf9YWqePBco-v8dU7N9sRb1bxgLhcXs2YMNVPytwLHki7xLoJMdKL4Yab8KQ3sxIUowKIDEtKEBLueGPIc6fIe9zsjQUFR_OEyrgujHAknU3xAxQswVfCupWw6qT5UMoVTsxWtVZudnKoTcvU7_428fgamjoBVFMhnd4FNVszrzU5lP1SeWfPKtZgDp0xiK5aEeLukmBf0g4kW15VmAhw',
  riskRadar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCouNjrlmozrboK85BCMPiWRsgJbIIwNsmBVIQy3EoW421-7bd-Bm5bMU6Az-wHoFXiMJ4FELw5WvlavOZWL5poDyOMg4_dC0UAK3JsZlOfsGI4F7k19EctuV8EshZv0cteHN1vldKCU2RxRxjazb_Yo2XIrX9XXudpNMeoxTuJfzXoHdTUtciFznrSXUJfrwDIpSrXNEc-e3w3z9qqrCVAGnuI969LtmZhOI97QMQUUfJIkQZyuRm03OidqNsJLhN5DxmTazxvfDc',
  nlpViz:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA4zoUTdq7XXWiCSYHSKelddF03XvQJUEN-hDxrFDTnP6TeP7x3fyOUsvKAEmrk1meTrzXYGrGoqknOx3HsJV9_wLUo_a1V75eQnOE4VoNg1ssz-dQwtBATyoePXbnw9VQIOfjBYIqN93E8TDstKQvBYe4wRQ59CY9oADsIMKUnx-EjCqoILX8TciMnzyebY5WaFOLoEUcpsADqvzk8nktlxceY0mgE325O5LO02t6ThINII05ycz1oX9Vcp3yM0jjpOdzXOOnKJ7s',
  knowledgeGraph:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAP1zS5DaI6mR4BbAK9F7LHNtHcpXO_mO1dR0g0yLJN5eSIxCuJ0sMNt8P7JSfGwKp5CNDvbUuzrfkm6XBsfL9wNSd1yRHCVJ2XNOlZtn5ox0AezKduMccNASRN2QH-XL8cD-iJ3Kf287ZGS1IgmujzdSxfR5Duf-CHtwfAN8PPTGrr4X1YyclG0mJVPOYd6GUuXJGrkSHr-aKjsYrd6aP9ZDf3zcjekGNta9jB0WX_f4oRYyL5JVxmwXoUTyqY7_b9tkVej-o6po0',
} as const

export const HERO_ROTATING_TEXTS = [
  'Decision Hub',
  'Intelligent Research',
  'Knowledge Graph',
  'NLP',
] as const

export const HOME_HERO = {
  title: 'AI Finance',
  subtitle: 'AI + Financial Product Manager',
  description:
    'Translating complex financial data into intuitive, intelligent product experiences. Senior Product Manager specializing in AI-driven investment research and knowledge graphs.',
  chips: ['Intelligent Research', 'Knowledge Graph', 'NLP'],
  metrics: [
    { value: '¥8.95M', label: 'Revenue Delivered' },
    { value: '85%', label: 'Efficiency Uplift' },
  ],
} as const

export const TRUSTED_BY = [
  { name: 'Datayes', icon: 'domain', color: 'primary' as const },
  { name: 'Kingdom Securities', icon: 'account_balance', color: 'secondary' as const },
  { name: 'CICC', icon: 'trending_up', color: 'tertiary' as const },
  { name: 'China Merchants Bank', icon: 'savings', color: 'primary' as const },
] as const

export const CAPABILITIES = [
  {
    title: 'Intelligent Research',
    description:
      'Automating data extraction and narrative generation for financial reports, significantly reducing manual analyst workload.',
    icon: 'neurology',
    glow: 'primary' as const,
    iconColor: 'primary' as const,
  },
  {
    title: 'Knowledge Graph',
    description:
      'Mapping complex entity relationships in financial markets to uncover hidden risks and investment opportunities.',
    icon: 'hub',
    glow: 'secondary' as const,
    iconColor: 'secondary' as const,
  },
  {
    title: 'NLP Solutions',
    description:
      'Processing unstructured financial text (news, filings, transcripts) into actionable structured insights.',
    icon: 'language',
    glow: 'tertiary' as const,
    iconColor: 'tertiary' as const,
  },
] as const

export const SELECTED_PROJECTS = [
  {
    title: 'Enterprise Risk Radar',
    image: IMAGES.riskRadar,
    tags: [
      { label: 'Knowledge Graph', variant: 'primary' as const },
      { label: 'Risk Management', variant: 'muted' as const },
    ],
    description:
      'A dynamic entity relationship mapping tool to preemptively identify contagion risks in corporate bond markets.',
    hoverAccent: 'primary' as const,
    imageAlt: 'Enterprise Risk Radar Visualization',
  },
  {
    title: 'Smart Earnings Summarizer',
    image: IMAGES.nlpViz,
    tags: [
      { label: 'NLP', variant: 'secondary' as const },
      { label: 'Automated Reporting', variant: 'muted' as const },
    ],
    description:
      'Real-time NLP extraction of key metrics and sentiment from earnings call transcripts to generate instant analyst briefs.',
    hoverAccent: 'secondary' as const,
    imageAlt: 'NLP Analysis Visualization',
  },
] as const

export const ABOUT = {
  headline: 'Shaping AI-Driven Finance.',
  bio: 'With 9 years of product management experience at leading fintech firms DataYes and Kingdom, I specialize in bridging complex financial data with intuitive user experiences. My focus lies in leveraging NLP and search optimization to build 0-to-1 products that empower users with actionable insights.',
  chips: [
    'NLP Text Extraction',
    'Search Optimization',
    'Sentiment Analysis',
    '0->1 Product Building',
    'Team Leadership',
  ],
  experience: [
    {
      company: 'DataYes',
      role: 'Senior Product Manager',
      description:
        'Spearheaded the development of AI-driven financial analysis tools. Led a 5-person cross-functional team to build a 0->1 market sentiment tracking product utilizing advanced NLP extraction techniques, significantly improving data retrieval efficiency for institutional investors.',
    },
    {
      company: 'Kingdom',
      role: 'Product Manager',
      description:
        'Optimized search functionalities and data processing pipelines for enterprise financial software. Championed user-centric design principles to translate complex backend logic into accessible interfaces.',
    },
  ],
  education: {
    school: 'Sun Yat-sen University',
    college: 'Nanfang College',
    major: 'Radio & Television Journalism',
    quote:
      'The narrative skills honed in journalism proved invaluable in understanding user stories and crafting compelling product visions.',
  },
} as const

export const PROJECTS = [
  {
    title: 'CICC Insight',
    badge: '¥3.0M Value',
    badgeVariant: 'tertiary' as const,
    featured: true,
    image: IMAGES.heroDashboard,
    imageAlt: 'Financial Analytics Dashboard',
    tags: ['Standardization', 'Research Template'],
    bullets: [
      'Delivered standardized research template system.',
      'Improved authoring efficiency across departments.',
    ],
    iconColor: 'primary' as const,
  },
  {
    title: 'CMB Research Platform',
    badge: '¥3.8M Value',
    badgeVariant: 'secondary' as const,
    featured: false,
    image: IMAGES.knowledgeGraph,
    imageAlt: 'Knowledge Graph and AI Neural Network',
    tags: ['Platform Scale', '80k Users'],
    bullets: [
      'Scaled platform to support 80,000 active users.',
      'Streamlined research distribution and discovery.',
    ],
    iconColor: 'secondary' as const,
  },
  {
    title: 'Sunshine Insurance Insight',
    badge: '¥2.8M Value',
    badgeVariant: 'secondary' as const,
    featured: false,
    image: IMAGES.nlpViz,
    imageAlt: 'Natural Language Processing Visualization',
    tags: ['Performance', 'Management'],
    bullets: [
      'Built robust performance management dashboards.',
      'Enabled data-driven decision making for executives.',
    ],
    iconColor: 'secondary' as const,
  },
  {
    title: 'HKEX Project',
    badge: 'Data Scale',
    badgeVariant: 'secondary' as const,
    featured: false,
    image: IMAGES.riskRadar,
    imageAlt: 'Enterprise Risk Monitoring Dashboard',
    tags: ['Risk Monitoring', '2.3M Articles'],
    bullets: [
      'Processed and monitored over 2.3 million articles.',
      'Implemented early-warning risk detection algorithms.',
    ],
    iconColor: 'secondary' as const,
  },
] as const

export const CONTACT = {
  headline: "Let's Connect",
  description:
    "Whether you have a question about my projects, want to discuss a potential collaboration, or just want to say hi, I'm always open to talking about AI, product management, and design.",
} as const
