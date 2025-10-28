import React from 'react';
import { Handshake, Building2, Globe, Rocket, Users2, Award } from 'lucide-react';

const Partnerships: React.FC = () => {
  const partnershipTypes = [
    {
      icon: Building2,
      title: 'Technology Vendors',
      partners: ['Microsoft', 'AWS', 'Google Cloud', 'Oracle', 'SAP'],
      benefits: 'Akses teknologi terkini, diskon produk, co-marketing, lead generation',
      potential: 'Revenue share 10-30%'
    },
    {
      icon: Users2,
      title: 'System Integrators',
      partners: ['Accenture', 'Deloitte', 'PwC', 'CGI', 'TCS'],
      benefits: 'Proyek skala besar, kredibilitas brand, network expansion',
      potential: 'Margin 15-25%'
    },
    {
      icon: Rocket,
      title: 'Startup Tech Companies',
      partners: ['SaaS Startups', 'AI/ML Companies', 'Fintech', 'E-commerce'],
      benefits: 'Inovasi produk, early adopter advantage, equity opportunities',
      potential: 'Equity 2-10%'
    },
    {
      icon: Globe,
      title: 'Industry Associations',
      partners: ['APJII', 'APTIKNAS', 'PANDI', 'MASTEL'],
      benefits: 'Networking, credibility, industry insights, business referrals',
      potential: 'Referral fee 5-15%'
    },
    {
      icon: Award,
      title: 'Training & Certification',
      partners: ['Coursera', 'Udemy Business', 'LinkedIn Learning', 'AWS Training'],
      benefits: 'Skill development, certification programs, talent pipeline',
      potential: 'Commission 10-20%'
    },
    {
      icon: Handshake,
      title: 'Local IT Communities',
      partners: ['Developer Groups', 'Tech Meetups', 'Hackathon Organizers'],
      benefits: 'Talent acquisition, brand awareness, community engagement',
      potential: 'Sponsorship ROI 200-400%'
    }
  ];

  return (
    <section id="partnerships" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kemitraan Potensial
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bangun ekosistem partnership yang kuat untuk pertumbuhan bisnis berkelanjutan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partnershipTypes.map((partnership, index) => {
            const Icon = partnership.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{partnership.title}</h3>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Contoh Partner:</p>
                  <div className="flex flex-wrap gap-1">
                    {partnership.partners.map((partner, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">{partnership.benefits}</p>
                
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Potensi Value:</p>
                  <p className="text-sm font-semibold text-green-600">{partnership.potential}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-white">
          <h4 className="text-2xl font-bold mb-4">Strategi Partnership Sukses</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-3">Tahap Inisiasi</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Research dan identifikasi partner potensial</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Buat value proposition yang kuat</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Network melalui event dan konferensi industri</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Tahap Eksekusi</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Negosiasi agreement yang win-win</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Set KPI dan tracking mechanism yang jelas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Regular review dan optimisasi partnership</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
