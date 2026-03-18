'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Code, Cpu, Target, Globe, Workflow } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const capabilities = [
  {
    title: 'Digital Marketing Systems',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'Social media strategy & management',
      'Content marketing systems',
      'Sales funnel creation & optimization',
      'PPC & social media advertising',
      'SEO & organic growth strategies',
      'Email marketing automation',
    ],
  },
  {
    title: 'Web Development',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'WordPress & Elementor development',
      'Shopify & e-commerce solutions',
      'Landing page design & optimization',
      'UX/UI design & user experience',
      'Website performance optimization',
      'Responsive & mobile-first design',
    ],
  },
  {
    title: 'AI & Automation',
    icon: Cpu,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'AI chatbot development & deployment',
      'CRM automation & integration',
      'Workflow automation systems',
      'Lead capture & nurturing automation',
      'AI-powered content generation',
      'Process optimization with AI',
    ],
  },
];

export default function CoreCapabilities() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="capabilities" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning marketing strategy, technical development, and cutting-edge AI implementation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities?.map?.((capability: any, index: number) => {
            const Icon = capability?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${capability?.color ?? ''} flex items-center justify-center mb-6 shadow-lg`}>
                  {Icon && <Icon className="text-white" size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{capability?.title ?? ''}</h3>
                <ul className="space-y-3">
                  {capability?.skills?.map?.((skill: string, skillIndex: number) => (
                    <li key={skillIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  )) ?? []}
                </ul>
              </motion.div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}