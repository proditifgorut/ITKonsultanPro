import React from 'react';
import { Target, DollarSign, Users, TrendingUp, Megaphone, CheckCircle } from 'lucide-react';

const Strategies: React.FC = () => {
  const strategies = [
    {
      icon: Target,
      title: 'Positioning & Niche Market',
      tactics: [
        'Fokus pada industri spesifik (fintech, healthcare, retail)',
        'Spesialisasi teknologi tertentu (cloud, AI/ML, blockchain)',
        'Target segmen klien (enterprise, SME, startup)',
        'Diferensiasi melalui expertise unik'
      ],
      impact: 'Margin +30-50%'
    },
    {
      icon: Megaphone,
      title: 'Marketing & Lead Generation',
      tactics: [
        'Content marketing (blog, whitepaper, case studies)',
        'SEO dan digital marketing campaigns',
        'Speaking engagements dan webinar',
        'Strategic partnerships dan referrals'
      ],
      impact: 'Lead +100-200%'
    },
    {
      icon: DollarSign,
      title: 'Pricing & Revenue Model',
      tactics: [
        'Value-based pricing vs hourly rates',
        'Tiered service packages (Basic, Pro, Enterprise)',
        'Recurring revenue (retainer, managed services)',
        'Performance-based incentives'
      ],
      impact: 'Revenue +40-80%'
    },
    {
      icon: Users,
      title: 'Team & Talent Strategy',
      tactics: [
        'Hire senior consultants dengan track record',
        'Build internal training program',
        'Freelancer network untuk scalability',
        'Competitive compensation dan equity'
      ],
      impact: 'Productivity +50%'
    },
    {
      icon: TrendingUp,
      title: 'Sales & Client Acquisition',
      tactics: [
        'Account-based marketing untuk enterprise',
        'Outbound sales dengan personalisasi',
        'Client success program untuk retention',
        'Upselling dan cross-selling strategy'
      ],
      impact: 'Conversion +60%'
    },
    {
      icon: CheckCircle,
      title: 'Operational Excellence',
      tactics: [
        'Standardisasi delivery methodology',
        'Project management tools & automation',
        'Quality assurance processes',
        'Client feedback dan continuous improvement'
      ],
      impact: 'Efficiency +40%'
    }
  ];

  return (
    <section id="strategies" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Strategi Komersial yang Tepat
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Framework strategi bisnis untuk mencapai profit maksimal dan pertumbuhan berkelanjutan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{strategy.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-4">
                    {strategy.tactics.map((tactic, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        <span className="text-gray-700">{tactic}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Expected Impact:</span>
                      <span className="text-sm font-bold text-green-600">{strategy.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Metrics Kunci (KPIs)</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Monthly Recurring Revenue (MRR)</span>
                <span className="font-semibold text-blue-600">Target: +20%/bulan</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Client Acquisition Cost (CAC)</span>
                <span className="font-semibold text-blue-600">{'<'} 3x LTV</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Gross Margin</span>
                <span className="font-semibold text-blue-600">{'>'} 50%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-gray-700">Client Retention Rate</span>
                <span className="font-semibold text-blue-600">{'>'} 85%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Net Promoter Score (NPS)</span>
                <span className="font-semibold text-blue-600">{'>'} 50</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-white shadow-md">
            <h4 className="text-xl font-bold mb-4">Timeline Implementasi</h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Bulan 1-3: Foundation</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Q1</span>
                </div>
                <p className="text-sm opacity-90">Setup business, build team, define positioning</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Bulan 4-6: Market Entry</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Q2</span>
                </div>
                <p className="text-sm opacity-90">Launch marketing, acquire first clients, build portfolio</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Bulan 7-12: Scale</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Q3-Q4</span>
                </div>
                <p className="text-sm opacity-90">Expand team, establish partnerships, optimize operations</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Tahun 2+: Growth</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">Y2</span>
                </div>
                <p className="text-sm opacity-90">Product diversification, market expansion, strategic M&A</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
