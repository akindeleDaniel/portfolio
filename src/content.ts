// All text on the site lives here. Edit this file, not the components.
import { shortTimeSince, type YearMonth } from './experience.ts'
// Code snippets live as plain text files so backticks in the code need no escaping.
import splitPaymentCode from './snippets/split-payment.ts.txt?raw'
import settlementCode from './snippets/settlement.ts.txt?raw'
import strikeRuleCode from './snippets/strike-rule.ts.txt?raw'
import strikeTestCode from './snippets/strike-test.ts.txt?raw'

// The month you started coding. Your experience is worked out from this on every visit.
const codingSince: YearMonth = { year: 2025, month: 9 }

export const site = {
  name: 'Daniel Akindele Ojo',
  shortName: 'Daniel',
  role: 'Full-stack developer',
  location: 'Niger State, Nigeria',
  timezone: 'West Africa Time (WAT, UTC+1)',
  availability: 'Open to remote work and freelance projects',
}

const whatsappMessage = "Hi Daniel, I saw your portfolio and I'd like to talk about a project."

export const links = {
  email: 'ojodanielakindele@gmail.com',
  whatsapp: `https://wa.me/2347046735408?text=${encodeURIComponent(whatsappMessage)}`,
  github: 'https://github.com/akindeleDaniel',
  linkedin: 'https://www.linkedin.com/in/danielojoakindele',
  // Set to '/cv.pdf' once the file is in public/; the button stays hidden while empty.
  cv: '',
  storehatch: 'https://storehatch.app',
  // Paste your Calendly link here; the "Book a call" buttons stay hidden while it is empty.
  calendly: '',
}

export const nav = [
  { label: 'Work', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export const header = {
  hireLabel: 'Hire me',
  openMenuLabel: 'Open menu',
  closeMenuLabel: 'Close menu',
}

export const hero = {
  eyebrow: `${site.role} · ${site.location}`,
  title: 'I build online stores and payment systems that real people use.',
  intro:
    'I built and run StoreHatch, a marketplace where anyone can open a shop, take payments through Paystack and Flutterwave, and get paid straight to their bank. I work across the whole stack: React, Node.js, PostgreSQL and the hosting around them.',
  availability: 'Open to remote and freelance work', // short enough for one line on a phone
  subtitle: 'Websites, online stores and booking systems for small businesses.',
  hireLabel: 'Hire me on WhatsApp',
  cvLabel: 'Download CV',
  caseStudyLabel: 'See StoreHatch',
  // Your photo. Until it is set, your initials show in its place.
  // Save a square photo as public/images/daniel.webp (about 800x800), then set:
  // photo: { src: '/images/daniel.webp', alt: 'Daniel Akindele Ojo', width: 800, height: 800 },
  photo: null as Image | null,
  initials: 'DA',
  callLabel: 'Book a call',
  stats: [
    { value: shortTimeSince(codingSince), label: 'of hands-on coding experience' },
    { value: 'Live', label: 'StoreHatch, since November 2026' },
    { value: '257', label: 'automated tests on real PostgreSQL' },
    { value: '2', label: 'payment providers: Paystack and Flutterwave' },
  ],
}

export type Project = {
  slug: string
  name: string
  label?: string
  summary: string
  highlights?: string[]
  tags: string[]
  href: string // internal route or external URL
  liveUrl?: string
  image?: Image
}

// webp in public/images; width and height stop the page jumping while it loads
export type Image = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export const projectsSection = {
  label: 'Work',
  title: 'Selected work',
  intro: 'Live products and demos I have built.',
}

// Add the two public demos here when they are ready:
// a business landing page with booking, and a small dashboard with login and charts.
export const projects: Project[] = [
  {
    slug: 'storehatch',
    name: 'StoreHatch',
    label: 'Live product · Built and run by me',
    summary:
      'A multi-shop marketplace: each seller gets a shop at shopname.storehatch.app, buyers fill one cart across many shops, and payments split straight to sellers’ banks.',
    highlights: [
      'Paystack and Flutterwave split payments',
      'One cart across many shops',
      'Complaints with automatic strikes',
      '257 automated tests',
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Paystack', 'Flutterwave'],
    href: '/work/storehatch',
    liveUrl: 'https://storehatch.app',
    image: {
      src: '/images/storehatch.webp',
      alt: 'StoreHatch home page with a product search and a shopping list prompt',
      width: 1890,
      height: 643,
    },
  },
]

export const services = {
  label: 'Services',
  title: 'What I can build for you',
  items: [
    {
      name: 'Online stores and marketplaces',
      text: 'Product pages, carts, checkout, orders and seller dashboards.',
    },
    {
      name: 'Payments',
      text: 'Paystack and Flutterwave checkout, split payments and webhooks.',
    },
    {
      name: 'Business websites',
      text: 'Fast, mobile-first sites with booking or enquiry forms, on your own domain.',
    },
    {
      name: 'Dashboards and admin tools',
      text: 'Logins, tables and charts so you can run your business from one place.',
    },
  ],
}

export const workProcess = {
  label: 'How I work',
  title: 'From first message to launch',
  steps: [
    {
      name: 'We talk',
      text: 'You tell me what you need on WhatsApp or a call. I ask questions, then send a clear plan, price and timeline.',
    },
    {
      name: 'I build',
      text: 'I build in small steps and share a live preview link, so you see progress and give feedback as we go.',
    },
    {
      name: 'Launch and support',
      text: 'I put it live on your domain, show you how to use it, and stay available for fixes and changes.',
    },
  ],
}

export const skillsSection = {
  title: 'Tools I use',
  groups: [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Responsive, mobile-first UI'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'REST APIs'] },
    { name: 'Payments', items: ['Paystack', 'Flutterwave', 'Split payments to sellers', 'Webhooks'] },
    { name: 'Hosting and ops', items: ['Cloudflare Pages, DNS and Workers', 'Render', 'ZeptoMail'] },
    { name: 'Testing', items: ['Automated tests against a real PostgreSQL database'] },
  ],
}

export const about = {
  label: 'About',
  title: 'A developer who ships and runs real products',
  paragraphs: [
    `I'm ${site.name}, a full-stack developer based in ${site.location}.`,
    'I like building the parts of a product that have to be right: payments, money owed to sellers, rules that decide who gets blocked. StoreHatch taught me to ship a real product end to end, from the database and payment providers to DNS and email, and to back it with tests.',
    'I am open to remote roles and freelance work. If you need an online store, a booking site, a dashboard or a payment flow, I can build it and keep it running.',
  ],
}

export const contact = {
  label: 'Contact',
  title: 'Have a project or a role in mind?',
  intro: 'The fastest way to reach me is WhatsApp. Email works too.',
  whatsappLabel: 'Message me on WhatsApp',
  emailLabel: 'Send an email',
  callLabel: 'Book a call',
  timezoneText: `I work remotely from Nigeria, on ${site.timezone}.`,
  items: [
    { label: 'WhatsApp', value: '+234 704 673 5408', href: links.whatsapp },
    { label: 'Email', value: links.email, href: `mailto:${links.email}` },
    { label: 'GitHub', value: 'github.com/akindeleDaniel', href: links.github },
    { label: 'LinkedIn', value: 'linkedin.com/in/danielojoakindele', href: links.linkedin },
  ],
}

export const footer = {
  text: `© ${new Date().getFullYear()} ${site.name}`,
}

export type Snippet = { title: string; note: string; language: string; code: string }

export const storehatch = {
  pageTitle: 'StoreHatch case study',
  name: 'StoreHatch',
  tagline: 'A multi-shop marketplace with split payments, live since November 2026.',
  liveUrl: links.storehatch,
  liveLabel: 'Visit storehatch.app',
  sellUrl: 'https://storehatch.app/sell',
  sellLabel: 'Open a shop (for sellers)',
  privateNote:
    'The code is private, so it is not linked here. Below is a demo, how the system fits together, and a few cleaned-up snippets. I am happy to walk through the real code on a call.',
  callLabel: 'Book a call on WhatsApp',
  callText: 'Want to see how it really works? I am happy to walk through the code on a call.',

  // Add a poster (a still shown before it plays) as public/videos/storehatch-demo-poster.webp and set poster.
  video: {
    src: '/videos/storehatch-demo.mp4',
    caption: 'A quick tour: shops, one cart across shops, paying one shop at a time, the shopping list, seller and admin tools.',
  } as null | { src: string; poster?: string; caption: string },

  overview: {
    title: 'What it is',
    paragraphs: [
      'StoreHatch lets anyone open an online shop at their own address, shopname.storehatch.app. Buyers can browse many shops and keep one cart across all of them, then check out one shop at a time.',
      'Payments go through Paystack or Flutterwave and are split so each seller is paid straight to their own bank account.',
    ],
  },

  screenshots: [
    {
      src: '/images/storehatch.webp',
      alt: 'StoreHatch home page with a product search and a shopping list prompt',
      width: 1890,
      height: 643,
      caption: 'Home page: search across every shop, or make a shopping list and compare shops.',
    },
    {
      src: '/images/storehatch-cart.webp',
      alt: 'StoreHatch cart on a phone with items from two shops, each with its own Pay for this order button',
      width: 718,
      height: 1408,
      caption: 'One cart, two shops. Each shop is paid for on its own.',
    },
  ] as Image[],

  features: {
    title: 'What it does',
    items: [
      'Shop for every seller at shopname.storehatch.app',
      'One cart across many shops; checkout one shop at a time',
      'Paystack and Flutterwave split payments to sellers’ banks',
      'Complaints are upheld or rejected; upheld complaints add strikes automatically: 2 strikes warn the seller, 4 block them, and strikes stop counting after 90 days',
      'Seller tools to run their shop',
      'Admin tools to run the marketplace',
      'Shopping list: enter what you need and compare shops',
    ],
  },

  // Check these boxes match the real setup.
  diagram: {
    title: 'How it fits together',
    nodes: [
      { name: 'Buyers and sellers', detail: 'Browser, on shopname.storehatch.app' },
      { name: 'Cloudflare', detail: 'Pages hosts the React app; DNS and Workers handle the domain and shop addresses' },
      { name: 'API on Render', detail: 'Node.js, Express and Prisma' },
      { name: 'PostgreSQL', detail: 'Shops, products, orders, complaints and strikes' },
    ],
    sides: [
      { name: 'Paystack and Flutterwave', detail: 'Checkout and split payments to sellers’ banks' },
      { name: 'ZeptoMail', detail: 'Transactional email' },
    ],
  },

  testing: {
    title: 'Testing',
    text: '257 automated tests run against a real PostgreSQL database, not mocks, so payments, strikes and checkout rules are checked the way they run in production.',
  },

  stack: {
    title: 'Tech',
    items: [
      'React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL',
      'Paystack', 'Flutterwave', 'Cloudflare Pages, DNS and Workers', 'Render', 'ZeptoMail',
    ],
  },

  snippetsTitle: 'A few snippets',
  snippetsIntro:
    'I use Claude Code, an AI coding assistant, to help keep my comments clear and consistent, so each part of the code explains why it works the way it does.',
  // Trimmed from the real code; the files are in src/snippets.
  snippets: [
    {
      title: 'Split payments: each seller paid straight to their bank',
      note: 'Money is handled in kobo, whole numbers, so there are no rounding errors. The shares must add up to exactly what the buyer pays before any charge is made.',
      language: 'ts',
      code: splitPaymentCode,
    },
    {
      title: 'Completing a paid order exactly once',
      note: 'The webhook and the status check can arrive at the same time. A serializable transaction and a conditional update make sure only one of them completes the order, and payments that cannot be completed are flagged for review.',
      language: 'ts',
      code: settlementCode,
    },
    {
      title: 'The strike rule: warn at 2, block at 4',
      note: 'The update only matches a seller who is not blocked yet, so a seller is blocked and emailed exactly once, even if two complaints are upheld at the same moment.',
      language: 'ts',
      code: strikeRuleCode,
    },
    {
      title: 'Testing the strike rule against a real database',
      note: 'One of the 257 tests. It runs against real PostgreSQL and checks the edge cases: old strikes, rejected complaints, and the warning email being sent only once.',
      language: 'ts',
      code: strikeTestCode,
    },
  ] as Snippet[],
}

export const notFound = {
  title: 'Page not found',
  text: 'That page does not exist or has moved.',
  backLabel: 'Back to home',
}
