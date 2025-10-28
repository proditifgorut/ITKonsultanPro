import React from 'react';
import { Brain, Code, Users, Shield, Database, Cloud, LineChart, MessageSquare } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    {
      icon: Code,
      title: 'Programming & Development',
      description: 'Menguasai berbagai bahasa pemrograman (Python, JavaScript, Java, C#)',
      level: 'Expert'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'SQL, NoSQL, data modeling, dan optimisasi database',
      level: 'Advanced'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'AWS, Azure, Google Cloud, arsitektur cloud, dan migrasi sistem',
      level: 'Expert'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Keamanan siber, penetration testing, dan compliance standards',
      level: 'Advanced'
    }
  ];

  const businessSkills = [
    {
      icon: Brain,
      title: 'Strategic Thinking',
      description: 'Analisis bisnis, perencanaan strategis, dan digital transformation',
      level: 'Expert'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Agile, Scrum, Waterfall, dan metodologi manajemen proyek IT',
      level: 'Advanced'
    },
    {
      icon: MessageSquare,
      title: 'Communication Skills',
      description: 'Presentasi, negosiasi, dan komunikasi dengan stakeholder',
      level: 'Expert'
    },
    {
      icon: LineChart,
      title: 'Business Analysis',
      description: 'Analisis ROI, cost-benefit analysis, dan business intelligence',
      level: 'Advanced'
    }
  ];

  const SkillCard = ({ skill }: { skill: typeof technicalSkills[0] }) => {
    const Icon = skill.icon;
    return (
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">{skill.title}</h4>
              <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                {skill.level}
              </span>
            </div>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skill yang Dibutuhkan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kombinasi keahlian teknis dan bisnis yang penting untuk sukses dalam konsultasi IT
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Skills</h3>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {businessSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 md:p-8 border border-blue-100">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Tips Pengembangan Skill</h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Ikuti sertifikasi profesional (AWS, Azure, PMP, CISSP)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Bangun portfolio proyek nyata dan case studies</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Networking dengan profesional IT dan menghadiri konferensi industri</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span>Update pengetahuan dengan tren teknologi terkini</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
