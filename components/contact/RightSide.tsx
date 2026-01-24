'use client'

import { motion } from 'framer-motion'
import { ContactForm } from './Form'
import { CTA } from './CTA'

export function ContactFormWrapper() {
  return (
    <motion.div
      className="lg:col-span-3 space-y-6"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <ContactForm />

      <CTA />
    </motion.div>
  )
}
