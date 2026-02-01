'use client'

import { motion } from 'framer-motion'
import { Code2, Heart } from 'lucide-react'
import Link from 'next/link'
import { footerContactInfo, contactMethods, PersonalInfo } from '@/data/contact'
import { getIcon } from './contact/LeftSide'

const navLinks = [
  { label: 'Now', href: '/now' },
  { label: 'Uses', href: '/uses' },
  { label: 'Resources', href: '/resources' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Career', href: '/career' },
  { label: 'Skills', href: '/skills' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and tagline */}
            <div className="md:col-span-2">
              <motion.div
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Code2 className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold">Portfolio</span>
              </motion.div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Crafting exceptional digital experiences with modern technologies.
                Let&apos;s build something amazing together.
              </p>
              <div className="flex items-center gap-4">
                {contactMethods.map(method => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg hover:bg-accent hover:text-foreground transition-colors text-primary`}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getIcon(method.iconName)}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {footerContactInfo.map(info => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-2 rounded-lg text-primary">{getIcon(info.iconName)}</div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <Link href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                            {info.value}
                          </Link>
                        ) : (
                          <div className="text-sm font-medium">{info.value}</div>
                        )
                      }
                    </div>
                  </motion.div>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} {PersonalInfo.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                Built with{' '}
                <Heart className="w-4 h-4 text-primary animate-pulse" />
                using Next.js & TypeScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}