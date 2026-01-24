export type SkillCategory = {
  category: string
  icon: string
  color: string
  borderColor: string
  skills: Skill[]
}

export type Skill = {
  name: string
  icon: string
  level: string
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend Development',
    icon: '🎨',
    color: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'React / Next.js', icon: '⚛️', level: 'Expert' },
      { name: 'TypeScript', icon: '📘', level: 'Expert' },
      { name: 'Tailwind CSS', icon: '🎯', level: 'Expert' },
      { name: 'Vue.js', icon: '💚', level: 'Advanced' },
      { name: 'Framer Motion', icon: '🎬', level: 'Advanced' },
      { name: 'shadcn/ui', icon: '🧩', level: 'Expert' },
    ],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    color: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    skills: [
      { name: 'Node.js', icon: '🟢', level: 'Advanced' },
      { name: 'Python', icon: '🐍', level: 'Advanced' },
      { name: 'PostgreSQL', icon: '🐘', level: 'Advanced' },
      { name: 'Prisma ORM', icon: '🔮', level: 'Advanced' },
      { name: 'GraphQL', icon: '📊', level: 'Intermediate' },
      { name: 'REST APIs', icon: '🔌', level: 'Expert' },
    ],
  },
  {
    category: 'Mobile Development',
    icon: '📱',
    color: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    skills: [
      { name: 'React Native', icon: '📲', level: 'Advanced' },
      { name: 'Expo', icon: '🚀', level: 'Advanced' },
      { name: 'iOS / Swift', icon: '🍎', level: 'Intermediate' },
      { name: 'Android / Kotlin', icon: '🤖', level: 'Intermediate' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    color: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    skills: [
      { name: 'Docker', icon: '🐳', level: 'Advanced' },
      { name: 'AWS / GCP', icon: '☁️', level: 'Intermediate' },
      { name: 'CI/CD', icon: '🔄', level: 'Advanced' },
      { name: 'Git / GitHub', icon: '📂', level: 'Expert' },
      { name: 'Linux', icon: '🐧', level: 'Advanced' },
    ],
  },
  {
    category: 'Design & UX',
    icon: '✨',
    color: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
    skills: [
      { name: 'Figma', icon: '🎨', level: 'Intermediate' },
      { name: 'UI/UX Design', icon: '🖼️', level: 'Advanced' },
      { name: 'Accessibility', icon: '♿', level: 'Advanced' },
      { name: 'Responsive Design', icon: '📐', level: 'Expert' },
    ],
  },
  {
    category: 'Other Technologies',
    icon: '🔧',
    color: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    skills: [
      { name: 'Web3 / Blockchain', icon: '🔗', level: 'Intermediate' },
      { name: 'Machine Learning', icon: '🤖', level: 'Intermediate' },
      { name: 'Testing (Jest, Cypress)', icon: '✅', level: 'Advanced' },
      { name: 'Performance Optimization', icon: '⚡', level: 'Advanced' },
    ],
  },
]