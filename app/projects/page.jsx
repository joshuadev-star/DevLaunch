'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ExternalLink, GitBranch } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'TechFlow Dashboard',
      description: 'A modern analytics dashboard built with React and real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'D3.js'],
      demo: '#',
      github: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4198c868f?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      demo: '#',
      github: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered tool for generating high-quality marketing content in seconds.',
      image: 'https://images.unsplash.com/photo-1677442d019e157395c30e3a4c3d8767?w=500&h=300&fit=crop',
      tags: ['AI', 'OpenAI API', 'Vue.js'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Collaboration Hub',
      description: 'Real-time collaboration platform for teams to work together seamlessly.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['WebSocket', 'MongoDB', 'Express'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans and nutrition guidance.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Expo'],
      demo: '#',
      github: '#',
    },
    {
      title: 'Weather Intelligence',
      description: 'Accurate weather forecasting app with AI-powered predictions.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      tags: ['Weather API', 'ML', 'Next.js'],
      demo: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Explore the innovative projects we&apos;ve built and deployed with DevLaunch
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-500/20 to-blue-600/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-border text-foreground/70 group-hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Link
                      href={project.demo}
                      className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-foreground text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </Link>
                    <Link
                      href={project.github}
                      className="px-4 py-2 rounded-lg border border-border hover:bg-border/50 text-foreground text-sm font-semibold transition-all flex items-center justify-center"
                    >
                      <GitBranch size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-border p-12 text-center"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Build Your Project?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Start building amazing projects with DevLaunch today.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-foreground font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
