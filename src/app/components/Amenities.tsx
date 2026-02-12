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
              src="/images/park.jpeg"
              alt="Parking Area"
              className="w-full h-72 object-cover rounded-xl mb-6"
            />
            <h3 className="mb-3">Tempat Parkir Luas</h3>
            <p className="text-gray-600">
              Tempat parkir yang aman dan luas untuk kendaraan Anda. Anda dapat membawa sepeda motor ataupun mobil.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ImageWithFallback
              src="/images/strategis.jpeg"
              alt="Strategic Location"
              className="w-full h-72 object-cover rounded-xl mb-6"
            />
            <h3 className="mb-3">Lokasi Strategis</h3>
            <p className="text-gray-600">
              Lokasi strategis yang dekat dengan Indomaret dan fasilitas umum lainnya guna untuk memenuhi kebutuhan sehari-hari Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
