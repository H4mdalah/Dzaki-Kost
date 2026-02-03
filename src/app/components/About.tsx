import { Award, Users, Clock, Heart } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, value: '50+', label: 'Penghuni Bahagia' },
    { icon: Clock, value: '1+', label: 'Tahun Pengalaman' },
    { icon: Award, value: '98%', label: 'Tingkat Kepuasan' },
    { icon: Heart, value: '100%', label: 'Komitmen' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-emerald-600 mb-6">Tentang Dzaki Kost & Homestay Syariah</h2>
            <p className="text-gray-600 mb-6">
              Didirikan pada tahun 2025, Dzaki Kost & Homestay Syariah telah menjadi pilihan utama bagi mereka yang mencari akomodasi yang nyaman, terjangkau, dan sesuai dengan prinsip-prinsip syariah. Kami memahami kebutuhan para pelajar, profesional, dan keluarga yang menginginkan lingkungan yang aman dan ramah.
            </p>
            <p className="text-gray-600 mb-6">
              Dzaki Kost & Homestay Syariah menyediakan fasilitas lengkap untuk mendukung kebutuhan penghuni sekaligus dijalankan sesuai nilai-nilai Islam sehingga cocok untuk penghuni baik dari kalangan pelajar, profesional muda, maupun keluarga Muslim.
            </p>
            <p className="text-gray-600 mb-8">
              Kami berkomitmen untuk menciptakan lingkungan di mana penghuni merasa Dzaki Kost & Homestay Syariah seperti rumah mereka sendiri.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Lokasi yang Strategis</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Harga yang Terjangkau</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Dukungan 24/7</span>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl text-center"
                  >
                    <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-emerald-600 mb-2">{stat.value}</div>
                    <p className="text-gray-700">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
