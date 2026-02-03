import { Home, Moon, Shield, Heart } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Kost',
      description: 'Kost yang nyaman dan terjangkau baik bagi mahasiswi maupun umum. Memiliki fasilitas yang lengkap guna menunjang kebutuhan penghuni.',
      features: ['Sewa bulanan maupun tahunan', 'Kamar dengan fasilitas yang lengkap', 'Dapur Umum'],
    },
    {
      icon: Moon,
      title: 'Penginapan Syariah',
      description: 'Penginapan yang sesuai dengan prinsip-prinsip syariah untuk keluarga Muslim. Cocok bagi keluarga muslim yang mencari akomodasi yang tenang dan sesuai syariah.',
      features: ['Tempat Ibadah', 'Halal environment', 'Family-friendly'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 mb-4">Layanan Kami</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Kami menyediakan pilihan guna memenuhi kebutuhan dan keinginan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-emerald-600" size={32} />
                </div>
                <h3 className="mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Shield className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
