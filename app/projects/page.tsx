'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Github, ExternalLink, Sparkles, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'ai', label: 'AI/ML' },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const filteredProjects =
    filter === 'all'
      ? projects.filter((p) => !p.featured)
      : projects.filter((p) => p.category === filter)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
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
            <Badge variant="secondary" className="mb-4">Portfolio</Badge>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Projects I've{' '}
              <span className="text-gradient">built</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              A selection of my recent work showcasing diverse technologies and creative solutions
              to real-world problems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Slider */}
      {featuredProjects.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">Featured Projects</h2>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <img
                        src={featuredProjects[currentSlide].image}
                        alt={featuredProjects[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <Badge className="mb-3 bg-primary text-primary-foreground">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {featuredProjects[currentSlide].title}
                        </h3>
                        <p className="text-gray-200 mb-4 max-w-2xl">
                          {featuredProjects[currentSlide].description}
                        </p>
                        <div className="flex items-center gap-4">
                          <Button size="sm" variant="secondary" asChild>
                            <a
                              href={featuredProjects[currentSlide].github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a
                              href={featuredProjects[currentSlide].demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation buttons */}
                {featuredProjects.length > 1 && (
                  <div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background"
                      onClick={() =>
                        setCurrentSlide(
                          (prev) =>
                            (prev - 1 + featuredProjects.length) % featuredProjects.length
                        )
                      }
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background"
                      onClick={() =>
                        setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)
                      }
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                )}

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${currentSlide === index
                        ? 'w-8 bg-primary'
                        : 'bg-white/50 hover:bg-white/80'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <motion.button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat.value
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-accent hover:bg-accent/80 text-muted-foreground'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                >
                  <motion.div
                    className="group h-full"
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <Card className="h-full overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                      {/* Image with overlay */}
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          animate={{
                            scale: hoveredProject === project.id ? 1.1 : 1,
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-primary/20"
                          animate={{
                            opacity: hoveredProject === project.id ? 1 : 0,
                          }}
                        />

                        {/* Quick actions overlay */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center gap-3"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-background/90 rounded-full hover:bg-background transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        </motion.div>
                      </div>

                      <CardHeader className="space-y-3">
                        <CardTitle className="text-xl line-clamp-2">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-base line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Project info */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {project.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {project.client}
                          </span>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button size="sm" className="flex-1" asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-muted-foreground text-lg">
                  No projects found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}