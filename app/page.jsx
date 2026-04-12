'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Zap, Sparkles, Rocket, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Setup',
      description: 'Get your website up and running in minutes with our intuitive setup process.',
    },
    {
      icon: Sparkles,
      title: 'AI Powered',
      description: 'Leverage cutting-edge AI technology to optimize your site automatically.',
    },
    {
      icon: Rocket,
      title: 'Instant Deployment',
      description: 'Deploy to production instantly with zero downtime and maximum reliability.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            {/* Gradient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="relative text-4xl sm:text-5xl lg:text-7xl font-bold text-balance mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
                Launch Your Website Faster
              </span>
              <span className="block text-foreground mt-2">with DevLaunch</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="relative text-xl text-foreground/70 mb-8 max-w-2xl mx-auto"
            >
              Everything you need to build, deploy, and scale modern websites. Fast setup, AI-powered optimization, and instant deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="relative flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="#"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-foreground font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-full border-2 border-border hover:border-primary text-foreground font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
              Why Choose DevLaunch?
            </h2>
            <p className="text-foreground/60 text-lg">
              Everything you need to succeed in one powerful platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center mb-6"
                  >
                    <Icon size={28} className="text-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-border p-12 text-center"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to Launch?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building amazing websites with DevLaunch.
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-foreground font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Start Building Now
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
