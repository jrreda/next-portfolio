'use client'

import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Clock } from 'lucide-react'
import { type ContactMethod, type ContactInfo } from '@/data/contact'
import { Info } from './Info'
import Social from './Social'

const iconMap = {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Clock,
}

export function getIcon(iconName: ContactMethod['iconName'] | ContactInfo['iconName']) {
  const IconComponent = iconMap[iconName]
  return IconComponent ? <IconComponent className={iconName === 'Mail' || iconName === 'Github' || iconName === 'Linkedin' || iconName === 'Twitter' ? 'w-6 h-6' : 'w-5 h-5'} /> : null
}

export function ContactSidebar() {
  return (
    <div className="lg:col-span-2 space-y-6">
      {/* Quick Info */}
      <Info />

      {/* Contact Methods */}
      <Social />
    </div>
  )
}
