import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date()?.getFullYear?.() ?? 2026;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Eddy Perlaza</h3>
            <p className="text-gray-400">
              AI Marketing Consultant & Digital Strategist building systems that help businesses grow faster with less effort.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#proof" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#ai-systems" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  AI Systems
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com/in/eddyperlaza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://intellibrandai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  IntelliBrandAI
                </a>
              </li>
              <li>
                <a href="mailto:hello@intellibrandai.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="text-red-500 mx-2" size={16} fill="currentColor" /> in Toronto, Canada
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            © {currentYear} Eddy Perlaza. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}