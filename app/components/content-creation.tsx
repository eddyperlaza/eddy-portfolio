'use client';

import { motion } from 'framer-motion';
import { Video, Share2, Image as ImageIcon, Megaphone } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const contentProjects = [
  {
    title: 'Destino Canadá Podcast',
    type: 'Podcast Production',
    description: 'Produced and hosted a bilingual podcast guiding Spanish-speaking audiences through immigration and opportunities in Canada.',
    image: 'https://cdn.abacus.ai/images/23612eb6-aa5c-4a0b-9b22-fdad2322d203.jpg',
    icon: Video,
    idea: 'Create valuable content for Hispanic immigrants',
    execution: 'Full production cycle from research to editing',
    result: 'Built engaged community and established authority',
  },
  {
    title: 'Social Media Campaigns',
    type: 'Multi-Platform Content',
    description: 'Created cohesive content strategies across Instagram, Facebook, LinkedIn, and Twitter for multiple clients.',
    image: 'https://cdn.abacus.ai/images/bc85550b-f81a-43ac-897c-9cf0fa57d9d0.jpg',
    icon: Share2,
    idea: 'Consistent brand presence across all platforms',
    execution: 'Content calendars, visual design, copywriting',
    result: '200%+ increase in engagement for clients',
  },
  {
    title: 'Brand Visual Identity',
    type: 'Design & Branding',
    description: 'Developed complete visual identities for multiple brands, from logo design to comprehensive brand guidelines.',
    image: 'https://cdn.abacus.ai/images/75550713-f086-47c7-ad01-c361fb91451d.jpg',
    icon: ImageIcon,
    idea: 'Create memorable and cohesive brand identities',
    execution: 'Logo design, color palettes, typography, guidelines',
    result: 'Professional brands that stand out in market',
  },
  {
    title: 'Digital Advertising Creative',
    type: 'Ad Design & Copy',
    description: 'Crafted high-converting ad creatives and copy for PPC, social media, and display advertising campaigns.',
    image: 'https://cdn.abacus.ai/images/089544f8-a0c7-429c-9f5d-2a1f9afa59fe.png',
    icon: Megaphone,
    idea: 'Attention-grabbing ads that convert',
    execution: 'A/B tested designs, persuasive copy, targeting',
    result: '3x average CTR improvement',
  },
];

export default function ContentCreation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="content" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Content <span className="gradient-text">Creation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution—creating compelling content that tells stories and drives engagement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contentProjects?.map?.((project: any, index: number) => {
            const Icon = project?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project?.image ?? ''}
                    alt={project?.title ?? ''}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    {Icon && (
                      <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={20} className="text-primary" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                    {project?.type ?? ''}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project?.title ?? ''}</h3>
                  <p className="text-gray-600 mb-4">{project?.description ?? ''}</p>
                  <div className="space-y-2 border-t border-gray-200 pt-4">
                    <div className="flex">
                      <span className="font-semibold text-primary mr-2 min-w-[80px]">Idea:</span>
                      <span className="text-gray-700 text-sm">{project?.idea ?? ''}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-primary mr-2 min-w-[80px]">Execution:</span>
                      <span className="text-gray-700 text-sm">{project?.execution ?? ''}</span>
                    </div>
                    <div className="flex">
                      <span className="font-semibold text-green-600 mr-2 min-w-[80px]">Result:</span>
                      <span className="text-gray-700 text-sm font-medium">{project?.result ?? ''}</span>
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