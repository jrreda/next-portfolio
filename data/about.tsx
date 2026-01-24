import { Target, Award, Zap, Sparkles } from 'lucide-react'

export type Stat = {
  icon: React.ReactNode
  value: string
  label: string
}

export const stats: Stat[] = [
  { icon: <Target />, value: '6+', label: 'Years Experience' },
  { icon: <Award />, value: '50+', label: 'Projects Completed' },
  { icon: <Zap />, value: '30+', label: 'Happy Clients' },
  { icon: <Sparkles />, value: '15+', label: 'Awards Won' },
]

export type Highlight = {
  title: string
  description: string
  icon: string
}

export const highlights: Highlight[] = [
  {
    title: 'Problem Solver',
    description: 'I thrive on complex challenges and finding innovative solutions to difficult problems.',
    icon: '🧩',
  },
  {
    title: 'Team Player',
    description: 'Collaboration is key. I enjoy working with diverse teams to achieve shared goals.',
    icon: '🤝',
  },
  {
    title: 'Continuous Learner',
    description: 'Always learning and adapting to new technologies and methodologies.',
    icon: '📚',
  },
  {
    title: 'Quality Focused',
    description: 'I believe in delivering high-quality, maintainable code and excellent user experiences.',
    icon: '✨',
  },
]