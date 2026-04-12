'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/components/footer';
import { Code2, Palette, Sparkles, Zap } from 'lucide-react';
import { Navbar } from '@/components/navbar';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Build modern, responsive websites with our intuitive development tools and cutting-edge technologies.',
      features: ['React & Next.js', 'Server-Side Rendering', 'API Integration'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create beautiful, user-centric designs that convert. Our AI-powered design system makes it effortless.',
      features: ['Design System', 'Responsive Design', 'Accessibility First'],
    },
    {
      icon: Sparkles,
      title: 'AI Integration',
      description: 'Supercharge your website with AI capabilities including chatbots, content generation, and personalization.',
      features: ['AI Chatbots', 'Content Generation', 'Personalization'],
    },
    {
      icon: Zap,
      title: 'Deployment Services',
      description: 'Deploy globally with one click. We handle scaling, security, and performance optimization automatically.',
      features: ['Global CDN', 'Auto Scaling', 'Security'],
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
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Everything you need to build, design, and deploy world-class websites
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-6"
                  >
                    <Icon size={32} className="text-foreground" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground/80">Key Features:</p>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-foreground/60 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-foreground/60">How we deliver exceptional results</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {['Discover', 'Design', 'Develop', 'Deploy'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-2xl font-bold text-foreground">{index + 1}</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">{step}</h3>
                {index < 3 && (
                  <div className="absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-600 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
