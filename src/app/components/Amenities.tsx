import { Wifi, Utensils, Car, Shield, Tv, Coffee, Droplets, Wind } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Amenities() {
  const amenities = [
    { icon: Wifi, label: 'Akses Wifi' },
    { icon: Utensils, label: 'Dapur Bersama' },
    { icon: Car, label: 'Lapangan Parkir' },
    { icon: Shield, label: '24/7 CCTV' },
    { icon: Tv, label: 'Ruangan Bersantai' },
    { icon: Coffee, label: 'Dekat dengan Cafe' },
    { icon: Droplets, label: 'Ruangan Laundry' },
    { icon: Wind, label: 'Kamar AC' },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 mb-4">Fasilitas</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nikmati berbagai fasilitas yang dirancang untuk kenyamanan dan kemudahan Anda
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-emerald-600" size={28} />
                </div>
                <p className="text-gray-700">{amenity.label}</p>
              </div>
            );
          })}
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1563493465960-597147b0a2fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGluaW5nfGVufDF8fHx8MTc2NzI0OTg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Shared Kitchen"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <h3 className="mb-3">Dapur Umum</h3>
            <p className="text-gray-600">
              Dapur umum yang dapat digunakan bersama untuk menyiapkan makanan dan bersosialisasi dengan penghuni lainnya.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763410723546-db98ef034af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY3MjgzNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Prayer Room"
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <h3 className="mb-3">Musholla</h3>
            <p className="text-gray-600">
              Tempat ibadah khusus bagi penghuni kami, dilengkapi dengan sajadah dan fasilitas wudhu untuk kenyamanan beribadah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
