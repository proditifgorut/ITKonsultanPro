import React from 'react';
import { ArrowRight, BookOpen, Rocket, Mail } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-6 py-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Siap Memulai Bisnis Konsultasi IT Anda?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Terapkan strategi dan framework yang telah dibahas untuk membangun bisnis konsultasi IT yang profitable dan berkelanjutan
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                <Rocket className="w-5 h-5" />
                <span>Mulai Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Download Panduan</span>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Konsultan IT Sukses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">Rp 2M+</div>
                <div className="text-sm opacity-90">Rata-rata Revenue/Tahun</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
                <div className="text-sm opacity-90">Success Rate Bisnis</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Punya pertanyaan atau butuh konsultasi?</p>
          <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold">
            <Mail className="w-5 h-5" />
            <span>Hubungi Kami</span>
          </button>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Kesimpulan</h3>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Bisnis konsultasi IT menawarkan peluang profit yang sangat menjanjikan dengan margin keuntungan 30-65% 
              tergantung pada spesialisasi dan positioning Anda. Kunci kesuksesan terletak pada kombinasi yang tepat antara:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">1.</span>
                <span><strong>Technical Excellence</strong> - Penguasaan skill teknis dan bisnis yang mendalam</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">2.</span>
                <span><strong>Product Portfolio</strong> - Diversifikasi layanan dengan margin tinggi</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">3.</span>
                <span><strong>Strategic Partnerships</strong> - Kolaborasi dengan vendor dan integrator terkemuka</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">4.</span>
                <span><strong>Commercial Strategy</strong> - Execution strategy yang fokus dan terukur</span>
              </li>
            </ul>
            <p className="text-center font-semibold text-lg text-blue-600 mt-6">
              Mulai dengan fokus pada satu niche, bangun track record, dan scale secara bertahap!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
