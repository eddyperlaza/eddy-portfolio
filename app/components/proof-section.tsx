'use client';

import { motion } from 'framer-motion';
import { Building2, Users, Zap, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const achievements = [
  { icon: Building2, label: 'Built from Zero', value: 'IntelliBrandAI.com', color: 'text-blue-500' },
  { icon: Users, label: 'Clients Served', value: '50+', color: 'text-cyan-500' },
  { icon: Zap, label: 'AI Systems Deployed', value: '30+', color: 'text-purple-500' },
  { icon: TrendingUp, label: 'Avg. ROI Increase', value: '250%', color: 'text-green-500' },
];

export default function ProofSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="proof" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From <span className="gradient-text">zero</span> to a full AI-powered agency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a founder and immigrant in Canada, I built IntelliBrandAI from scratch—designing the entire system, 
            from workflows and automation to content management, branding, UX, and operations. This isn't about emotion; 
            it's about <span className="text-primary font-semibold">strategic execution</span>.
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
              src="https://cdn.abacus.ai/images/75550713-f086-47c7-ad01-c361fb91451d.jpg"
              alt="Digital agency workspace"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Complete System Design</h3>
            <ul className="space-y-4">
              {[
                'End-to-end workflow automation',
                'AI-powered content generation systems',
                'CRM integration and lead management',
                'Brand identity and visual design',
                'UX/UI optimization and web development',
                'Data-driven marketing strategies',
              ].map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <Zap className="text-cyan-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements?.map?.((item: any, index: number) => {
            const Icon = item?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {Icon && <Icon className={`${item?.color ?? ''} mb-3`} size={32} />}
                <p className="text-gray-600 text-sm mb-1">{item?.label ?? ''}</p>
                <p className="text-2xl font-bold text-gray-900">{item?.value ?? ''}</p>
              </motion.div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}