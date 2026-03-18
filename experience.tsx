import { Briefcase, Award, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Founder',
    company: 'Intelli Brand AI',
    location: 'Toronto, ON',
    period: 'May 2025 - Present',
    description: 'Built and scaled a complete AI-powered marketing agency from zero. Designed end-to-end systems for digital marketing, web development, and AI automation. Managed multidisciplinary team and delivered solutions to 50+ clients across North America and Latin America.',
    achievements: [
      'Built complete business infrastructure and operational systems',
      'Developed proprietary AI-powered marketing solutions',
      'Established client base across two continents',
      'Created scalable service delivery frameworks',
    ],
  },
  {
    title: 'Podcast & Social Media Coordinator',
    company: 'CHHA1610 AM',
    location: 'Toronto, ON',
    period: 'September 2023 - December 2024',
    description: 'Produced and hosted "Destino Canadá" podcast, guiding Spanish-speaking audiences through Canadian immigration. Managed complete production cycle and social media strategy.',
    achievements: [
      'Produced 50+ podcast episodes from concept to distribution',
      'Built engaged community of listeners',
      'Managed cross-platform content strategy',
      'Conducted interviews with industry experts',
    ],
  },
  {
    title: 'Digital Marketing & Social Media Coordinator',
    company: 'Foto Tortas',
    location: 'Santiago, Chile (Hybrid)',
    period: 'December 2021 - December 2022',
    description: 'Led digital marketing strategy and web development for e-commerce bakery. Implemented data-driven campaigns and optimized online presence.',
    achievements: [
      'Increased online sales by 45% through strategic campaigns',
      'Redesigned and optimized e-commerce platform',
      'Managed social media accounts with 200%+ engagement growth',
      'Coordinated product photography and visual content',
    ],
  },
  {
    title: 'Co-Founder',
    company: 'DreamOn Producciones',
    location: 'Quito, Ecuador',
    period: 'June 2018 - February 2022',
    description: 'Co-founded audiovisual production company specializing in institutional and commercial videos for universities and corporate clients.',
    achievements: [
      'Delivered 100+ video projects for major clients',
      'Built and led creative production team',
      'Managed complete project lifecycles and budgets',
      'Established company reputation in competitive market',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Multimedia Journalism',
    school: 'Universidad San Francisco de Quito (USFQ)',
    period: '2013 - 2017',
    achievements: ['COCOA Award 2015 - Best Radio Report', 'Active in audiovisual and journalism projects'],
  },
  {
    degree: 'Leadership Diploma',
    school: 'Escuela de Liderazgo FIDAL',
    period: '2020',
    achievements: ['Team management focus', 'Strategic communication'],
  },
];

const certifications = [
  'AI Fundamentals & Applications - Santander (2026)',
  'Master AI with Gemini - Google Gemini',
  'Generative AI Fundamentals - Databricks (2025-2027)',
  'Prompt Engineering Certification',
  'Fundamentals of Digital Marketing - Google (2023)',
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A track record of building systems, managing projects, and delivering measurable results
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="text-primary mr-3" size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Experience</h3>
          </div>
          <div className="space-y-8">
            {experiences?.map?.((exp: any, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{exp?.title ?? ''}</h4>
                    <p className="text-lg text-primary font-semibold">{exp?.company ?? ''}</p>
                    <p className="text-gray-600">{exp?.location ?? ''}</p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {exp?.period ?? ''}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{exp?.description ?? ''}</p>
                <ul className="space-y-2">
                  {exp?.achievements?.map?.((achievement: string, achIndex: number) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  )) ?? []}
                </ul>
              </div>
            )) ?? []}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="text-primary mr-3" size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education?.map?.((edu: any, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-md"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-1">{edu?.degree ?? ''}</h4>
                <p className="text-primary font-semibold mb-2">{edu?.school ?? ''}</p>
                <p className="text-gray-600 text-sm mb-3">{edu?.period ?? ''}</p>
                <ul className="space-y-1">
                  {edu?.achievements?.map?.((achievement: string, achIndex: number) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  )) ?? []}
                </ul>
              </div>
            )) ?? []}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="text-primary mr-3" size={28} />
            <h3 className="text-3xl font-bold text-gray-900">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications?.map?.((cert: string, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-gray-800 font-medium">{cert}</p>
              </div>
            )) ?? []}
          </div>
        </div>
      </div>
    </section>
  );
}