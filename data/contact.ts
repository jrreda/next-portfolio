export type ContactMethod = {
  iconName: 'Mail' | 'Github' | 'Linkedin' | 'Twitter'
  label: string
  value: string
  href: string
  color: string
  borderColor: string
}

export type ContactInfo = {
  iconName: 'MapPin' | 'Clock' | 'Phone' | 'Mail'
  label: string
  value: string
  href?: string
  color?: string
  borderColor?: string
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

export const footerContactInfo: ContactInfo[] = [
  {
    iconName: 'MapPin',
    label: 'Location',
    value: 'Cairo, Egypt',
  },
  {
    iconName: 'Clock',
    label: 'Timezone',
    value: 'CET (UTC+2)',
  },
  {
    iconName: 'Mail',
    label: 'Email',
    value: 'jrreda.dev@gmail.com',
    href: 'mailto:jrreda.dev@gmail.com',
    color: 'bg-primary/10 text-primary',
    borderColor: 'border-primary/20',
  }
]

export type PersonalInfo = {
  name: string
  email: string
  phone: string
  location: string
  timezone: string
}

export const PersonalInfo: PersonalInfo = {
  name: 'Mahmoud Reda',
  email: 'jrreda.dev@gmail.com',
  phone: '+20 100 000 0000',
  location: 'Cairo, Egypt',
  timezone: 'CET (UTC+2)',
}