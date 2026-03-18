'use client';

import { motion } from 'framer-motion';
import { Cog, Zap, TrendingUp, Target } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const principles = [
  {
    icon: Cog,
    title: 'Systems Over Tasks',
    description: 'I don\'t just complete tasks—I build systems that run themselves. Once implemented, they continue delivering value without constant intervention.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Automation-First',
    description: 'Every repetitive process is an opportunity for automation. I identify bottlenecks and create workflows that save time and reduce errors.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Scalability Focus',
    description: 'Solutions are designed to grow with your business. What works for 10 customers should work for 10,000 with minimal adjustments.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Target,
    title: 'Data-Driven Decisions',
    description: 'Every system includes analytics and reporting. We measure what matters and continuously optimize based on real performance data.',
    color: 'from-orange-500 to-red-500',
  },
];

export default function SystemThinking() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="system-thinking" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="gradient-text">I Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I build systems, not just solutions. This mindset makes me a valuable long-term asset rather than a temporary fix.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://cdn.abacus.ai/images/c48b0166-c226-428e-aab6-0033cd48c2fb.png"
              alt="Business process optimization"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Strategic, Not Reactive</h3>
            <p className="text-lg text-gray-700 mb-6">
              While others focus on individual tasks, I analyze your entire workflow to identify inefficiencies 
              and create comprehensive solutions that address root causes.
            </p>
            <p className="text-lg text-gray-700">
              This systems-thinking approach means the value I provide compounds over time—every improvement 
              continues working for you long after implementation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles?.map?.((principle: any, index: number) => {
            const Icon = principle?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${principle?.color ?? ''} flex items-center justify-center mb-4`}>
                  {Icon && <Icon className="text-white" size={28} />}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">{principle?.title ?? ''}</h4>
                <p className="text-gray-600 text-sm">{principle?.description ?? ''}</p>
              </motion.div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}