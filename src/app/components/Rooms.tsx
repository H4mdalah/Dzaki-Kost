import { Users, Bed, Wifi, CreditCard } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Rooms() {
  const rooms = [
    {
      title: 'Kamar Standar',
      image: 'https://images.unsplash.com/photo-1611095459865-47682ae3c41c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzI4MzUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      period: 'Bulanan atau Tahunan',
      capacity: '1 Orang',
      bed: 'Single Bed',
      features: ['Free WiFi', 'Kamar Mandi Dalam', 'Meja Belajar', 'Cocok bagi pelajar', 'Harga terjangkau'],
    },
    {
      title: 'Kamar Premium',
      image: 'https://images.unsplash.com/photo-1669935357836-193c63861977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwaG9tZXN0YXklMjByb29tfGVufDF8fHx8MTc2NzI4MzUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      period: 'Bulanan atau Tahunan',
      capacity: '2 Orang',
      bed: 'Double Bed',
      features: ['Free WiFi', 'Kamar Mandi Dalam', 'AC', 'Meja Belajar', 'Kamar yang lebih luas'],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 mb-4">Kamar yang Tersedia</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Kami menyediakan berbagai pilihan kamar yang nyaman dan terjangkau
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <ImageWithFallback
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-4">{room.title}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-gray-500">{room.period}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users size={20} className="text-emerald-600" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Bed size={20} className="text-emerald-600" />
                    <span>{room.bed}</span>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  Book This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
