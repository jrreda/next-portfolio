'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  Target,
  Award,
  Zap,
  CheckCircle2,
  Calendar,
  MapPin,
  Briefcase,
  Send,
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'
import GetInTouch from '@/components/GetInTouch'
import { ActivityGraph } from '@/components/activity/ActivityGraph'

export default function HomePage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const stats = [
    { icon: <Target />, value: '6+', label: 'Years Experience' },
    { icon: <Award />, value: '50+', label: 'Projects Completed' },
    { icon: <Zap />, value: '30+', label: 'Happy Clients' },
    { icon: <Sparkles />, value: '15+', label: 'Awards Won' },
  ]

  const skills = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      color: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      skills: [
        { name: 'React / Next.js', icon: '⚛️', level: 'Expert' },
        { name: 'TypeScript', icon: '📘', level: 'Expert' },
        { name: 'Tailwind CSS', icon: '🎯', level: 'Expert' },
        { name: 'Vue.js', icon: '💚', level: 'Advanced' },
        { name: 'Framer Motion', icon: '🎬', level: 'Advanced' },
        { name: 'shadcn/ui', icon: '🧩', level: 'Expert' },
      ],
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      color: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 'Advanced' },
        { name: 'Python', icon: '🐍', level: 'Advanced' },
        { name: 'PostgreSQL', icon: '🐘', level: 'Advanced' },
        { name: 'Prisma ORM', icon: '🔮', level: 'Advanced' },
        { name: 'GraphQL', icon: '📊', level: 'Intermediate' },
        { name: 'REST APIs', icon: '🔌', level: 'Expert' },
      ],
    },
  ]

  const projects = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, AI-powered product recommendations, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&h=600&fit=crop',
      tags: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, Kanban boards, and team analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      id: '3',
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot powered by machine learning with natural language processing and context-aware responses.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      github: '#',
      demo: '#',
    },
  ]

  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      icon: '🚀',
      color: 'bg-blue-500/10 border-blue-500/20',
      description: 'Leading development of enterprise applications, mentoring junior developers, and implementing best practices.',
      achievements: [
        'Architected and built a microservices platform serving 1M+ users',
        'Reduced application load time by 60% through optimization',
        'Led a team of 5 developers on major product releases',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      company: 'Digital Solutions Co.',
      position: 'Full Stack Developer',
      location: 'New York, NY',
      duration: '2020 - 2022',
      icon: '💼',
      color: 'bg-purple-500/10 border-purple-500/20',
      description: 'Developed and maintained multiple client-facing web applications using modern technologies.',
      achievements: [
        'Built 10+ responsive web applications for diverse clients',
        'Implemented CI/CD pipelines reducing deployment time by 80%',
        'Received "Developer of the Year" award in 2021',
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'MongoDB', 'Tailwind'],
    },
  ]

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center relative overflow-hidden py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
            >
              <Sparkles className="w-4 h-4" />
              Available for new opportunities
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Alex Johnson</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Full Stack Developer crafting exceptional digital experiences with modern
              technologies and creative solutions.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="#projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-accent hover:bg-accent/80 text-foreground transition-colors border border-border"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12 border-t"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a href="#about" className="block w-6 h-10 border-2 border-border rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4">About Me</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Get to know{' '}
                <span className="text-gradient">who I am</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A passionate developer crafting digital experiences with purpose and creativity.
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-1"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face"
                      alt="Profile"
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <CardContent className="p-6">
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      Alex Johnson
                    </motion.h3>
                    <p className="text-muted-foreground mb-4">
                      Senior Full Stack Developer
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Node.js'].map(
                        (tag, index) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                          >
                            <Badge variant="secondary">{tag}</Badge>
                          </motion.div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Middle Column - Quick Facts & Interests */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quick Facts Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Quick Facts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { label: '🎓 Education', value: 'B.S. Computer Science, Stanford University' },
                          { label: '💼 Experience', value: '6+ years in software development' },
                          { label: '📍 Location', value: 'San Francisco, CA' },
                          { label: '🌍 Languages', value: 'English (Native), Spanish (Conversational)' },
                          { label: '🎂 Availability', value: 'Open to opportunities' },
                          { label: '🚀 Focus', value: 'Full Stack Development & Architecture' },
                        ].map((fact, index) => (
                          <motion.div
                            key={fact.label}
                            className="border-b last:border-0 pb-3 last:pb-0"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                          >
                            <div className="text-sm mb-1 text-primary font-medium">
                              {fact.label}
                            </div>
                            <div className="text-base">{fact.value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Interests Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        Beyond Code
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { icon: '📚', label: 'Reading tech blogs and books' },
                          { icon: '🎮', label: 'Gaming and building side projects' },
                          { icon: '🏃', label: 'Running and hiking in nature' },
                          { icon: '🎵', label: 'Music production and sound design' },
                          { icon: '📸', label: 'Photography and visual arts' },
                          { icon: '✈️', label: 'Traveling and exploring cultures' },
                          { icon: '🎨', label: 'UI/UX design and prototyping' },
                        ].map((interest, index) => (
                          <motion.div
                            key={interest.label}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.02, x: 5 }}
                          >
                            <span className="text-xl">{interest.icon}</span>
                            <span className="text-sm font-medium">{interest.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Right Column - Philosophy & What I Do */}
              <div className="lg:col-span-1 space-y-6">
                {/* Philosophy Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Card className="border-2 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        My Philosophy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          I believe in building software that not only works well but also
                          provides exceptional experiences for users.
                        </p>
                        <div className="space-y-3">
                          {[
                            { title: '🎯 User-First', desc: 'Every decision considers user needs and experience' },
                            { title: '⚡ Performance', desc: 'Fast, efficient code without sacrificing quality' },
                            { title: '🔧 Maintainability', desc: 'Clean code that others can understand and extend' },
                            { title: '🌟 Innovation', desc: 'Constant learning and embracing new technologies' },
                            { title: '🤝 Collaboration', desc: 'Great products come from great teamwork' },
                            { title: '✨ Quality', desc: 'Never compromising on excellence and best practices' },
                          ].map((phil, index) => (
                            <motion.div
                              key={phil.title}
                              className="border-b last:border-0 pb-3 last:pb-2"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                            >
                              <div className="text-lg mb-1 text-primary font-semibold">
                                {phil.title}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {phil.desc}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* What I Do Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        What I Do
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            icon: '🎨',
                            title: 'Design & Build',
                            desc: 'Full-cycle development from concept to deployment',
                            color: 'bg-blue-500/10',
                          },
                          {
                            icon: '💻',
                            title: 'Frontend Excellence',
                            desc: 'Beautiful, performant UIs with React & Next.js',
                            color: 'bg-green-500/10',
                          },
                          {
                            icon: '⚙️',
                            title: 'Backend Architecture',
                            desc: 'Scalable systems with Node.js, Python & PostgreSQL',
                            color: 'bg-purple-500/10',
                          },
                          {
                            icon: '🚀',
                            title: 'Optimization',
                            desc: 'Performance tuning and technical best practices',
                            color: 'bg-orange-500/10',
                          },
                          {
                            icon: '👥',
                            title: 'DevOps & CI/CD',
                            desc: 'Automated testing, deployment and infrastructure',
                            color: 'bg-pink-500/10',
                          },
                          {
                            icon: '📱',
                            title: 'Mobile Development',
                            desc: 'Cross-platform apps with React Native & Expo',
                            color: 'bg-cyan-500/10',
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={item.title}
                            className="p-4 rounded-lg hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className={`flex items-start gap-4 p-3 rounded-xl ${item.color} mb-2`}>
                              <span className="text-2xl">{item.icon}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {item.desc}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Bottom Section - Fun Facts */}
            <motion.div
              className="mt-16 pt-8 border-t"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { fact: '50+ Projects', icon: '🚀', color: 'text-blue-500' },
                  { fact: '6+ Years', icon: '⏱️', color: 'text-green-500' },
                  { fact: '30+ Clients', icon: '👥', color: 'text-purple-500' },
                  { fact: '15+ Awards', icon: '🏆', color: 'text-orange-500' },
                  { fact: '100% Committed', icon: '❤️', color: 'text-red-500' },
                  { fact: 'Always Learning', icon: '📚', color: 'text-pink-500' },
                  { fact: 'Open Source', icon: '💻', color: 'text-cyan-500' },
                  { fact: 'Team Player', icon: '🤝', color: 'text-yellow-500' },
                ].map((item, index) => (
                  <motion.div
                    key={item.fact}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors border"
                  >
                    <div className={`text-4xl mb-2 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="text-lg font-semibold">{item.fact}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-muted-foreground mb-6">
                Interested in collaborating or have a project in mind?
              </p>
              <Link href="#contact">
                <Button size="lg" className="group">
                  Let's Connect
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section id="activity" className="py-20 bg-accent/10 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">
                Open Source
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-3">
                Activity{' '}
                <span className="text-gradient">heatmap</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A visual overview of my GitHub and GitLab contributions over the past year.
              </p>
            </div>
            <ActivityGraph />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Skills & Expertise</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Technologies I{' '}
                <span className="text-gradient">work with</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((category, categoryIndex) => (
                <Card key={category.category} className={`${category.borderColor} border-2`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl ${category.color} text-3xl`}>
                        {category.icon}
                      </div>
                      <CardTitle className="text-2xl">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-semibold">{skill.name}</span>
                          </div>
                          <Badge variant="outline" className={getLevelBadgeColor(skill.level)}>
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Featured Work</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Projects I've{' '}
                <span className="text-gradient">built</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={project.id} className="h-full overflow-hidden border-2 hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-3">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          View Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/projects">
                <Button size="lg">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Career Journey</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Work{' '}
                <span className="text-gradient">Experience</span>
              </h2>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={exp.company} className={`border-2 ${exp.color}`}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${exp.color} text-3xl flex-shrink-0`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">
                          {exp.position}
                        </CardTitle>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                            <Briefcase className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/experience">
                <Button size="lg" variant="outline">
                  View Full Experience
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <GetInTouch />
    </div>
  )
}