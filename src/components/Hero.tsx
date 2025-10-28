import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Panduan Lengkap
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Bisnis Konsultasi IT
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Temukan solusi profit efektif, skill yang dibutuhkan, tipe produk potensial, 
            kemitraan strategis, dan strategi komersial untuk membangun bisnis konsultasi IT yang sukses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Profit Maksimal</h3>
            <p className="text-gray-600">
              Strategi terbukti untuk meningkatkan pendapatan dan margin keuntungan bisnis konsultasi IT Anda
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Target Tepat</h3>
            <p className="text-gray-600">
              Identifikasi peluang pasar, produk potensial, dan kemitraan yang menguntungkan
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Eksekusi Cepat</h3>
            <p className="text-gray-600">
              Implementasi strategi komersial yang efektif untuk pertumbuhan bisnis yang berkelanjutan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
