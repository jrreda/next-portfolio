'use client'

import { motion } from 'framer-motion'
import { Code2, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Now', href: '/now' },
    { label: 'Uses', href: '/uses' },
    { label: 'Resources', href: '/resources' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

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
                Let's build something amazing together.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
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
                <li>hello@example.com</li>
                <li>San Francisco, CA</li>
                <li>Available for freelance</li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Alex Johnson. All rights reserved.
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