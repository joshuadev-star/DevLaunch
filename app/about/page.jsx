'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function About() {
  const milestones = [
    { year: '2020', event: 'DevLaunch Founded' },
    { year: '2021', event: '10,000+ Users' },
    { year: '2022', event: 'AI Integration Launch' },
    { year: '2023', event: 'Global Expansion' },
    { year: '2024', event: 'Enterprise Solutions' },
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
              About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">DevLaunch</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              We&apos;re on a mission to make website development faster, easier, and more powerful for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                At DevLaunch, we believe that building exceptional websites shouldn&apos;t require months of development and technical expertise. Our platform combines cutting-edge AI technology with intuitive design to democratize web development.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                We&apos;re committed to empowering developers, designers, and entrepreneurs to create stunning, high-performance websites that drive real business results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-12 border border-border h-full flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  50k+
                </div>
                <p className="text-foreground/70">Active Developers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-foreground/60 text-lg">
              From humble beginnings to industry leader
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={itemVariants}
                className="flex gap-8 items-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-foreground">{milestone.year}</span>
                </div>
                <div className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
                  <p className="text-2xl font-semibold text-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'We constantly push the boundaries of what&apos;s possible.' },
              { title: 'Reliability', desc: 'Your success is our success. We&apos;re here for the long term.' },
              { title: 'Simplicity', desc: 'We make complex things simple and intuitive.' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-background border border-border text-center"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-foreground/60">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
