'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const caseStudies = [
  {
    title: 'IntelliBrand AI Platform',
    category: 'AI Marketing Platform',
    image: 'https://cdn.abacus.ai/images/dbb1f645-f95e-4ccc-bf5f-5af9d823a382.png',
    problem: 'Businesses needed a comprehensive AI-powered marketing solution that could integrate strategy, automation, and analytics in one platform.',
    solution: 'Designed and built IntelliBrandAI from the ground up—a full-service digital marketing ecosystem combining AI automation, content creation, and strategic consulting.',
    execution: [
      'Built complete brand identity and visual system',
      'Developed WordPress-based platform with custom integrations',
      'Implemented AI chatbot for lead qualification',
      'Created automated content generation workflows',
      'Integrated CRM and marketing automation tools',
    ],
    results: [
      '50+ clients served across North America and Latin America',
      'Complete end-to-end marketing solutions',
      'Automated 70% of repetitive marketing tasks',
    ],
    tools: ['WordPress', 'AI Tools', 'Zapier', 'HubSpot'],
  },
  {
    title: 'PriceGroup E-commerce Redesign',
    category: 'E-commerce & Growth Strategy',
    image: 'https://cdn.abacus.ai/images/3889ee7f-a14c-4d74-8018-800ce2cde2f1.png',
    problem: 'Toronto-based client had an outdated e-commerce platform with poor user experience and low conversion rates.',
    solution: 'Complete e-commerce platform redesign with growth-focused strategy and performance optimization.',
    execution: [
      'Redesigned entire user experience and checkout flow',
      'Implemented responsive design for mobile optimization',
      'Integrated advanced analytics and tracking',
      'Optimized product pages for SEO',
      'Created data-driven marketing strategy',
    ],
    results: [
      '45% increase in conversion rate',
      '60% improvement in mobile engagement',
      '35% reduction in cart abandonment',
    ],
    tools: ['Shopify', 'Google Analytics', 'SEO Tools'],
  },
  {
    title: 'LFM Roofing Digital Transformation',
    category: 'Web Design & Digital Advertising',
    image: 'https://cdn.abacus.ai/images/089544f8-a0c7-429c-9f5d-2a1f9afa59fe.png',
    problem: 'New York roofing company needed modern web presence and effective digital advertising to compete in local market.',
    solution: 'Complete website redesign with integrated Google Business optimization and targeted digital advertising campaign.',
    execution: [
      'Built modern, mobile-responsive website',
      'Optimized Google Business Profile',
      'Launched targeted PPC campaigns',
      'Implemented local SEO strategy',
      'Created content marketing system',
    ],
    results: [
      '200% increase in qualified leads',
      '#1 ranking for key local search terms',
      '150% ROI on advertising spend',
    ],
    tools: ['WordPress', 'Google Ads', 'Google Business'],
  },
  {
    title: 'AI Chatbot System',
    category: 'AI & Automation',
    image: 'https://cdn.abacus.ai/images/991850bb-66fb-4fc4-b4b4-7c71f8f958af.png',
    problem: 'Multiple clients needed 24/7 customer support and lead qualification without increasing staff costs.',
    solution: 'Developed custom AI chatbot system that handles customer inquiries, qualifies leads, and integrates with CRM.',
    execution: [
      'Trained AI models on client-specific data',
      'Designed conversational flows and logic',
      'Integrated with existing CRM systems',
      'Implemented multi-language support',
      'Created analytics dashboard for performance tracking',
    ],
    results: [
      '80% of inquiries handled automatically',
      '50% faster lead response time',
      '30% increase in qualified leads',
    ],
    tools: ['Custom AI', 'API Integration', 'CRM Systems'],
  },
  {
    title: 'Marketing Automation Workflows',
    category: 'Automation & Systems',
    image: 'https://cdn.abacus.ai/images/3889ee7f-a14c-4d74-8018-800ce2cde2f1.png',
    problem: 'Clients spent too much time on repetitive marketing tasks, limiting their ability to scale.',
    solution: 'Created comprehensive automation systems that handle lead capture, nurturing, and conversion automatically.',
    execution: [
      'Mapped out complete customer journey',
      'Built automated email sequences',
      'Integrated multiple marketing tools',
      'Created smart segmentation logic',
      'Implemented automated reporting',
    ],
    results: [
      '70% time saved on manual tasks',
      '3x increase in lead nurturing efficiency',
      '40% improvement in customer engagement',
    ],
    tools: ['Zapier', 'Make', 'HubSpot', 'Email Platforms'],
  },
];

export default function CaseStudies() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real projects. Each case study showcases strategic problem-solving and measurable impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies?.map?.((study: any, index: number) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={study?.image ?? ''}
                      alt={study?.title ?? ''}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                      {study?.category ?? ''}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">{study?.title ?? ''}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Problem</h4>
                        <p className="text-gray-600">{study?.problem ?? ''}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study?.solution ?? ''}</p>
                      </div>
                      
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Execution</h4>
                            <ul className="space-y-2">
                              {study?.execution?.map?.((item: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <ArrowRight className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
                                  <span className="text-gray-600 text-sm">{item}</span>
                                </li>
                              )) ?? []}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                            <ul className="space-y-2">
                              {study?.results?.map?.((result: string, i: number) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 mt-1.5 flex-shrink-0" />
                                  <span className="text-gray-600 text-sm font-semibold">{result}</span>
                                </li>
                              )) ?? []}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Tools Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {study?.tools?.map?.((tool: string, i: number) => (
                                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                  {tool}
                                </span>
                              )) ?? []}
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className="mt-4 text-primary font-semibold hover:text-primary/80 transition-colors flex items-center"
                      >
                        {isExpanded ? 'Show Less' : 'View Full Case Study'}
                        <ExternalLink className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          }) ?? []}
        </div>
      </div>
    </section>
  );
}