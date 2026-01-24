'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { stats, highlights } from '@/data/about'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-4">About Me</Badge>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Passionate about creating{' '}
              <span className="text-gradient">impactful solutions</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Combining technical excellence with creative problem-solving to build
              products that make a difference.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image and Bio */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Profile Card */}
                <Card className="overflow-hidden">
                  <motion.div
                    className="relative aspect-[4/3] overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face"
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </motion.div>

                  <CardContent className="p-6">
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      Alex Johnson
                    </motion.h3>
                    <p className="text-muted-foreground mb-4">
                      Full Stack Developer based in San Francisco, CA
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind'].map(
                        (tag, index) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                          >
                            <Badge variant="secondary">{tag}</Badge>
                          </motion.span>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Bio */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      I&apos;m a full-stack developer with over 6 years of experience building
                      web and mobile applications. I specialize in React, Next.js, and Node.js,
                      with a strong foundation in modern architecture and scalable systems.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      My approach combines technical excellence with creative problem-solving.
                      I believe in writing clean, maintainable code and creating intuitive user
                      experiences that make a difference.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      When I&apos;m not coding, you can find me exploring new technologies,
                      contributing to open source projects, or enjoying the beautiful California
                      outdoors with my family.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Right Column - Stats and Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Card className="text-center h-full">
                        <CardContent className="p-6">
                          <motion.div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            {stat.icon}
                          </motion.div>
                          <motion.div
                            className="text-3xl font-bold mb-2 text-primary"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.2 + index * 0.1,
                              type: 'spring',
                              bounce: 0.5,
                            }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Highlights */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">What I Bring</h3>
                    <div className="space-y-4">
                      {highlights.map((item, index) => (
                        <motion.div
                          key={item.title}
                          className="flex gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="text-3xl flex-shrink-0">{item.icon}</div>
                          <div>
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Facts */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                    <div className="space-y-3">
                      {[
                        '🎓 B.S. Computer Science, Stanford University',
                        '💼 6+ years in software development',
                        '🌍 Worked with clients across 10+ countries',
                        '🏆 Best Developer Award 2023',
                        '📝 50+ articles published on tech blogs',
                        '🎤 Speaker at 5+ tech conferences',
                      ].map((fact, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                        >
                          {fact}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}