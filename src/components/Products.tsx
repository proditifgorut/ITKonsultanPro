import React from 'react';
import { Layers, Settings, BarChart3, Lock, Workflow, Server } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      icon: Settings,
      title: 'IT Strategy Consulting',
      description: 'Perencanaan strategis IT, roadmap teknologi, dan digital transformation',
      pricing: 'Rp 50-200 juta/proyek',
      duration: '2-6 bulan',
      margin: '40-60%'
    },
    {
      icon: Workflow,
      title: 'Software Development',
      description: 'Custom software development, web/mobile apps, dan sistem enterprise',
      pricing: 'Rp 100-500 juta/proyek',
      duration: '3-12 bulan',
      margin: '35-50%'
    },
    {
      icon: Lock,
      title: 'Cybersecurity Consulting',
      description: 'Security audit, penetration testing, compliance, dan risk management',
      pricing: 'Rp 30-150 juta/proyek',
      duration: '1-3 bulan',
      margin: '45-65%'
    },
    {
      icon: Server,
      title: 'Cloud Migration & Management',
      description: 'Migrasi ke cloud, optimisasi infrastruktur, dan managed services',
      pricing: 'Rp 40-300 juta/proyek',
      duration: '2-8 bulan',
      margin: '30-45%'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & BI',
      description: 'Business intelligence, data warehouse, analytics dashboard, dan AI/ML',
      pricing: 'Rp 60-250 juta/proyek',
      duration: '2-6 bulan',
      margin: '40-55%'
    },
    {
      icon: Layers,
      title: 'IT Infrastructure Design',
      description: 'Network design, server architecture, disaster recovery planning',
      pricing: 'Rp 50-200 juta/proyek',
      duration: '2-5 bulan',
      margin: '35-50%'
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tipe Produk & Layanan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Portfolio layanan konsultasi IT yang menguntungkan dengan potensi profit tinggi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Harga Range:</span>
                      <span className="text-sm font-semibold text-gray-900">{product.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Durasi:</span>
                      <span className="text-sm font-semibold text-gray-900">{product.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Margin:</span>
                      <span className="text-sm font-semibold text-green-600">{product.margin}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Model Pricing yang Efektif</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Project-Based</h5>
              <p className="text-sm text-gray-600">Fixed price untuk proyek dengan scope jelas</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Time & Materials</h5>
              <p className="text-sm text-gray-600">Hourly/daily rate untuk proyek fleksibel</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Retainer</h5>
              <p className="text-sm text-gray-600">Monthly fee untuk dukungan berkelanjutan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
