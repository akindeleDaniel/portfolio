// All text on the site lives here. Edit this file, not the components.
import { shortTimeSince, type YearMonth } from './experience.ts'

// The month you started coding. Your experience is worked out from this on every visit.
const codingSince: YearMonth = { year: 2025, month: 9 }

export const site = {
  name: 'Daniel Ojo Akindele',
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
  cv: '/cv.pdf',
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
}

export const hero = {
  eyebrow: `${site.role} · ${site.location}`,
  title: 'I build online stores and payment systems that real people use.',
  intro:
    'I built and run StoreHatch, a marketplace where anyone can open a shop, take payments through Paystack and Flutterwave, and get paid straight to their bank. I work across the whole stack: React, Node.js, PostgreSQL and the hosting around them.',
  availability: site.availability,
  hireLabel: 'Hire me on WhatsApp',
  cvLabel: 'Download CV',
  caseStudyLabel: 'See StoreHatch',
  // Your photo. Until it is set, your initials show in its place.
  // Save a square photo as public/images/daniel.webp (about 800x800), then set:
  // photo: { src: '/images/daniel.webp', alt: 'Daniel Ojo Akindele', width: 800, height: 800 },
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
    // Mention the demo and snippets here once they are added.
    'The code is private, so it is not linked here. This page shows what it does and how it fits together. I am happy to walk through the real code on a call.',
  callLabel: 'Book a call on WhatsApp',
  callText: 'Want to see how it really works? I am happy to walk through the code on a call.',

  // Put the file in public/videos and set src, e.g. '/videos/storehatch-demo.mp4'.
  video: null as null | { src: string; poster?: string; caption: string },

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
      'Complaints are upheld or rejected; upheld complaints add strikes automatically: 2 strikes warn the seller, 4 block them',
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
  // Paste 2-3 cleaned-up snippets here. The section stays hidden while this is empty.
  snippets: [] as Snippet[],
}

export const notFound = {
  title: 'Page not found',
  text: 'That page does not exist or has moved.',
  backLabel: 'Back to home',
}
