'use client';

import { motion } from 'framer-motion';
import { Bot, Workflow, Sparkles, BarChart } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const aiSystems = [
  {
    title: 'AI Chatbot Intelligence',
    description: 'Custom-trained chatbots that understand context, qualify leads, and provide 24/7 customer support with human-like interactions.',
    image: 'https://cdn.abacus.ai/images/cc986e6a-380a-4320-aae0-65e5941e97dd.png',
    icon: Bot,
    features: ['Natural language processing', 'Lead qualification', 'Multi-language support', 'CRM integration'],
  },
  {
    title: 'Marketing Automation Flows',
    description: 'Intelligent workflow systems that automate repetitive tasks, nurture leads, and optimize campaign performance automatically.',
    image: 'https://cdn.abacus.ai/images/e2f7eba5-dbe0-4910-9007-dec2be6cab09.png',
    icon: Workflow,
    features: ['Smart segmentation', 'Automated email sequences', 'Cross-platform integration', 'Performance tracking'],
  },
  {
    title: 'AI Content Generation',
    description: 'Advanced systems that create on-brand content at scale, from social media posts to blog articles, maintaining consistency and quality.',
    image: 'https://cdn.abacus.ai/images/827075d6-07f7-4923-9d6d-81c8ef6ee982.jpg',
    icon: Sparkles,
    features: ['Brand voice training', 'SEO optimization', 'Multi-format content', 'Quality assurance'],
  },
  {
    title: 'Predictive Analytics',
    description: 'Data-driven systems that analyze customer behavior, predict trends, and provide actionable insights for strategic decision-making.',
    image: 'https://cdn.abacus.ai/images/78e37a1c-3684-4e87-8464-a04819d09cef.png',
    icon: BarChart,
    features: ['Behavior prediction', 'Trend analysis', 'ROI forecasting', 'Custom dashboards'],
  },
];

export default function AISystemsShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="ai-systems" ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI Systems <span className="text-cyan-400">I Built</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond just using AI tools—I design, build, and deploy complete intelligent systems that solve real business problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiSystems?.map?.((system: any, index: number) => {
            const Icon = system?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={system?.image ?? ''}
                    alt={system?.title ?? ''}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    {Icon && (
                      <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {system?.title ?? ''}
                  </h3>
                  <p className="text-gray-300 mb-4">{system?.description ?? ''}</p>
                  <div className="space-y-2">
                    {system?.features?.map?.((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    )) ?? []}
                  </div>
                </div>
              </motion.div>
            );
          }) ?? []}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            These aren't just demos—they're production systems handling real traffic, real customers, and generating real results.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Build Your AI System
          </a>
        </motion.div>
      </div>
    </section>
  );
}