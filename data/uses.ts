export const categories = [
  {
    title: '💻 Development',
    icon: '👨‍💻',
    items: [
      { name: 'VS Code', description: 'Primary IDE with themes and extensions', essential: true },
      { name: 'Neovim', description: 'For quick edits and remote work', essential: false },
      { name: 'GitHub Copilot', description: 'AI-powered code completion', essential: true },
      { name: 'ESLint & Prettier', description: 'Code quality and formatting', essential: true },
      { name: 'Git', description: 'Version control', essential: true },
    ],
  },
  {
    title: '🎨 Design',
    icon: '🎨',
    items: [
      { name: 'Figma', description: 'UI/UX design and prototyping', essential: true },
      { name: 'Framer Motion', description: 'React animations', essential: true },
      { name: 'shadcn/ui', description: 'Component library', essential: true },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', essential: true },
    ],
  },
  {
    title: '☁️ Cloud & Hosting',
    icon: '☁️',
    items: [
      { name: 'Vercel', description: 'Next.js deployment and edge functions', essential: true },
      { name: 'AWS', description: 'Lambda, S3, RDS services', essential: true },
      { name: 'Cloudflare', description: 'CDN and DNS management', essential: false },
      { name: 'GitHub', description: 'Code hosting and CI/CD', essential: true },
    ],
  },
  {
    title: '🔧 DevOps',
    icon: '🔧',
    items: [
      { name: 'Docker', description: 'Containerization', essential: true },
      { name: 'GitHub Actions', description: 'CI/CD pipelines', essential: true },
      { name: 'Terraform', description: 'Infrastructure as code', essential: false },
      { name: 'Postman', description: 'API testing and documentation', essential: true },
    ],
  },
  {
    title: '💾 Databases',
    icon: '🗄️',
    items: [
      { name: 'PostgreSQL', description: 'Primary relational database', essential: true },
      { name: 'MongoDB', description: 'NoSQL for flexible schemas', essential: false },
      { name: 'Redis', description: 'Caching and session storage', essential: true },
      { name: 'Prisma', description: 'Type-safe ORM', essential: true },
    ],
  },
  {
    title: '📱 Mobile',
    icon: '📱',
    items: [
      { name: 'React Native', description: 'Cross-platform mobile development', essential: true },
      { name: 'Expo', description: 'React Native tooling and build system', essential: true },
      { name: 'Xcode', description: 'iOS development', essential: true },
      { name: 'Android Studio', description: 'Android development', essential: false },
    ],
  },
]

export const workstation = {
  laptop: {
    name: 'MacBook Pro 14"',
    specs: 'M3 Pro, 36GB RAM, 1TB SSD',
  },
  monitor: {
    name: 'LG UltraFine 5K',
    specs: '27-inch display',
  },
  peripherals: [
    'Keychron K2 keyboard',
    'Logitech MX Master 3 mouse',
    'Sony WH-1000XM5 headphones',
  ],
}