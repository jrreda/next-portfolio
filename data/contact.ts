export type ContactMethod = {
  iconName: 'Mail' | 'Github' | 'Linkedin' | 'Twitter'
  label: string
  value: string
  href: string
  color: string
  borderColor: string
}

export type ContactInfo = {
  iconName: 'MapPin' | 'Clock' | 'Phone'
  label: string
  value: string
}

export const contactMethods: ContactMethod[] = [
  {
    iconName: 'Mail',
    label: 'Email',
    value: 'jrreda.dev@gmail.com',
    href: 'mailto:jrreda.dev@gmail.com',
    color: 'bg-primary/10 text-primary',
    borderColor: 'border-primary/20',
  },
  {
    iconName: 'Github',
    label: 'GitHub',
    value: '@jrreda_',
    href: 'https://github.com/jrreda_',
    color: 'bg-primary/10 text-primary',
    borderColor: 'border-primary/20',
  },
  {
    iconName: 'Linkedin',
    label: 'LinkedIn',
    value: '/in/jrreda',
    href: 'https://linkedin.com/in/jrreda',
    color: 'bg-primary/10 text-primary',
    borderColor: 'border-primary/20',
  },
]

export const contactInfo: ContactInfo[] = [
  {
    iconName: 'MapPin',
    label: 'Location',
    value: 'San Francisco, CA',
  },
  {
    iconName: 'Clock',
    label: 'Timezone',
    value: 'PST (UTC-8)',
  },
  {
    iconName: 'Phone',
    label: 'Response Time',
    value: 'Within 24 hours',
  },
]