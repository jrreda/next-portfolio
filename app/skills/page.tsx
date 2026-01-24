'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories } from '@/data/skills'
import GetInTouch from '@/components/GetInTouch'

export default function SkillsPage() {
  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-primary/10 text-primary border-primary/20'
      case 'Advanced':
        return 'bg-green-500/10 text-green-600 border-green-500/20'
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, oklch(0.55 0.18 160) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, oklch(0.65 0.18 280) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, oklch(0.55 0.18 160) 0%, transparent 50%)',
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
            <Badge variant="secondary" className="mb-4">Skills & Expertise</Badge>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Technologies I{' '}
              <span className="text-gradient">work with</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A comprehensive toolkit built over years of hands-on experience with modern
              technologies. Always learning and adapting to the latest trends.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              className="flex justify-center gap-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                { value: '6', label: 'Categories' },
                { value: '30+', label: 'Technologies' },
                { value: '6+', label: 'Years Experience' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                >
                  <Card
                    className={`h-full ${category.borderColor} border-2 transition-all duration-300 hover:shadow-lg`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`p-3 rounded-xl ${category.color} text-3xl`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {category.icon}
                        </motion.div>
                        <CardTitle className="text-2xl">
                          {category.category}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            className="group relative p-4 rounded-lg bg-accent/30 hover:bg-accent transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              duration: 0.4,
                            }}
                            whileHover={{ x: 8 }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <motion.span
                                  className="text-2xl"
                                  whileHover={{ scale: 1.2, rotate: 10 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {skill.icon}
                                </motion.span>
                                <span className="font-semibold text-base">
                                  {skill.name}
                                </span>
                              </div>
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                  duration: 0.3,
                                }}
                              >
                                <Badge
                                  variant="outline"
                                  className={getLevelBadgeColor(skill.level)}
                                >
                                  {skill.level}
                                </Badge>
                              </motion.div>
                            </div>

                            {/* Hover glow effect */}
                            <motion.div
                              className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={false}
                              animate={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GetInTouch />
    </div>
  )
}