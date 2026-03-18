"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageSquareQuote } from "lucide-react";

const reviews = [
  {
    name: "Johanna Amado",
    role: "Marketing & Branding Specialist",
    quote:
      "Working with Eddy to develop my digital marketing portfolio was a game changer. His guidance, experience and dedication were invaluable. I now have a portfolio that truly reflects my skills and achievements. Highly recommended!",
  },
  {
    name: "Laura Spencer",
    role: "Business Consultant, Mississauga",
    quote:
      "IntelliBrandAI exceeded our expectations. Eddy and his team guided us through our social media strategy redesign, and the results have been outstanding. They are professional, responsive and always ready to adapt strategies based on our feedback.",
  },
  {
    name: "Miguel White",
    role: "Marketing Manager, Non‑profit Organization, Toronto",
    quote:
      "Our organization has worked with several agencies, but IntelliBrandAI stands out for its commitment and professionalism. Thanks to them, we optimized our campaigns and connected more meaningfully with our community.",
  },
  {
    name: "Olivia Thompson",
    role: "Entrepreneur, Toronto",
    quote:
      "Partnering with IntelliBrandAI has been a game changer for my business. Eddy and his team truly understand our needs and created a marketing strategy that makes my brand stand out in the competitive Toronto market.",
  },
  {
    name: "James MacDonald",
    role: "Tech Startup Founder, Toronto",
    quote:
      "Since working with IntelliBrandAI, our digital presence has grown markedly. The team helped us define our brand and authentically connect with our audience. Integrating AI into our strategies has been revolutionary.",
  },
];

export default function Reviews() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="reviews" ref={ref} className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real testimonials from partners and clients highlight the impact of our work.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <MessageSquareQuote
                className="text-primary mb-4"
                size={32}
              />
              <p className="text-gray-700 mb-4 italic">{`"${review.quote}"`}</p>
              <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
              <span className="text-sm text-primary">{review.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}