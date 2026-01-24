'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Sparkles } from 'lucide-react'

// interface PageHeroProps {
//   title: string
//   description: string
//   badge: string
// }

export function PageHero() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, oklch(0.55 0.18 160) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, oklch(0.65 0.18 280) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, oklch(0.55 0.18 160) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Get In Touch
          </Badge>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let&apos;s{' '}
            <span className="text-gradient">work together</span>
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Have a project in mind? I&apos;d love to hear about it. Send me a message
            and let&apos;s create something amazing together.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
