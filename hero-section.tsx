'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://cdn.abacus.ai/images/b976702a-777c-4aa8-91f9-037fe04f35f9.jpg"
            alt="Modern tech workspace in Toronto"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-cyan-900/90" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-cyan-400 mr-2" size={24} />
            <span className="text-cyan-400 font-semibold">AI Marketing Consultant & Digital Strategist</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            I build <span className="text-cyan-400">marketing systems</span>
            <br />
            powered by AI that help
            <br />
            businesses <span className="text-cyan-400">grow faster</span>
            <br />
            with <span className="text-cyan-400">less effort</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            From Ecuador to Toronto, I built IntelliBrandAI from the ground up—a complete ecosystem combining{' '}
            <span className="text-cyan-400 font-semibold">marketing strategy</span>,{' '}
            <span className="text-cyan-400 font-semibold">web development</span>, and{' '}
            <span className="text-cyan-400 font-semibold">AI automation</span> to deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}