export type Experience = {
  company: string
  position: string
  location: string
  duration: string
  icon: string
  color: string
  description: string
  achievements: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: 'NTG Clarity - Markatty.com',
    position: 'Full Stack Developer',
    location: 'El Haram, Giza, Egypt',
    duration: '2023 - Present',
    icon: '💼',
    color: 'bg-purple-500/10 border-purple-500/20',
    description: 'Developed and maintained the Markatty.com and multiple client-facing web applications using modern technologies.',
    achievements: [
      'Built 10+ responsive web applications for diverse clients',
      'Implemented CI/CD pipelines reducing deployment time by 80%',
      'Reduced bug count by 40% through comprehensive testing',
      'Client satisfaction rate of 95%',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Laravel', 'MySQL', 'Redis', 'Docker', 'Vue.js', 'Tailwind CSS'],
  },
  {
    company: 'Dealtio - Dealio.com',
    position: 'Frontend Developer',
    location: 'Nasr City, Cairo, Egypt',
    duration: '2019 - 2022',
    icon: '🌟',
    color: 'bg-green-500/10 border-green-500/20',
    description: 'Created engaging user interfaces and interactive experiences for early-stage startups.',
    achievements: [
      'Developed the Dealio.com and multiple client-facing web applications using modern technologies.',
      'Implemented CI/CD pipelines reducing deployment time by 80%',
      'Reduced bug count by 40% through comprehensive testing',
      'Client satisfaction rate of 95%',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Laravel', 'MySQL', 'Python'],
  },
]

export type Education = {
  degree: string
  institution: string
  location: string
  duration: string
  icon: string
  details: string[]
}
export const education: Education[] = [
  {
    degree: 'B.S. Computer Science',
    institution: 'Higher Technological Institute - HTI',
    location: '10th of Ramadan City, Egypt',
    duration: '2015 - 2019',
    icon: '🎓',
    details: ['GPA: 3.05/4.0'],
  },
]