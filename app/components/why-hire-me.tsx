import { CheckCircle, Zap, Globe, Target } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Adaptation',
    description: 'I learn quickly and adapt to any environment. New tools, new industries, new challenges—I figure it out and execute.',
  },
  {
    icon: Target,
    title: 'Execution-Focused',
    description: 'I don\'t just plan—I execute. While others are still discussing, I\'m already building and testing solutions.',
  },
  {
    icon: CheckCircle,
    title: 'Problem Solver',
    description: 'I thrive on solving complex problems. Give me a challenge, constraints, and a goal—I\'ll find the path forward.',
  },
  {
    icon: Globe,
    title: 'No Perfect Conditions Needed',
    description: 'As an immigrant who built a business from scratch in a new country, I don\'t wait for perfect conditions—I create success with what I have.',
  },
];

export default function WhyHireMe() {
  return (
    <section id="why-hire" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-cyan-400">Hire Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond skills and experience—what makes me a valuable addition to any team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons?.map?.((reason: any, index: number) => {
            const Icon = reason?.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center mr-4 flex-shrink-0">
                    {Icon && <Icon size={24} className="text-white" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{reason?.title ?? ''}</h3>
                    <p className="text-gray-300">{reason?.description ?? ''}</p>
                  </div>
                </div>
              </div>
            );
          }) ?? []}
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-4 text-center">The Bottom Line</h3>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
            You\'re not just hiring someone to complete tasks—you\'re gaining a strategic partner who builds systems, 
            solves problems, and delivers measurable results. I bring a unique combination of technical expertise, 
            creative thinking, and the resilience that comes from building something from nothing in a new country.
          </p>
        </div>
      </div>
    </section>
  );
}