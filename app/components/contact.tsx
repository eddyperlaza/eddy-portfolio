'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleContactClick = () => {
    if (typeof window !== 'undefined' && window?.open) {
      window.open('https://linkedin.com/in/eddyperlaza', '_blank');
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to build something great? Let\'s connect and discuss how I can help your business grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://cdn.abacus.ai/images/290aba12-986f-425f-8d2e-83180f4a887f.jpg"
              alt="Professional collaboration"
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
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email</h3>
                  <a
                    href="mailto:hello@intellibrandai.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    hello@intellibrandai.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/eddyperlaza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    linkedin.com/in/eddyperlaza
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleContactClick}
              className="w-full px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              Connect on LinkedIn
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}