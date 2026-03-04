import { Users, Bed, Wifi, CreditCard } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Rooms() {
  const rooms = [
    {
      title: 'Kamar Tempat Tidur Biasa',
      image: '/images/singlebed.jpeg',
      period: 'Bulanan atau Tahunan',
      capacity: '1 Orang',
      bed: 'Single Bed',
      features: ['Free WiFi', 'Kamar Mandi Dalam', 'AC',  'Meja Belajar', 'Lemari' , 'Private Room'],
    },
    {
      title: 'Kamar Tempat Tidur Tingkat',
      image: '/images/doublebed.jpeg',
      period: 'Bulanan atau Tahunan',
      capacity: '2 Orang',
      bed: 'Double Bed',
      features: ['Free WiFi', 'Kamar Mandi Dalam', 'AC', 'Meja Belajar', 'Lemari', 'Sharing Room'],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 mb-4">Kamar yang Tersedia</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Kami menyediakan berbagai pilihan kamar sesuai kebutuhan anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-96">
                <ImageWithFallback
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

                <button className="w-full mt-6 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg active:scale-95">
                  Pesan Kamar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
