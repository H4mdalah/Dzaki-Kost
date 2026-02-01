import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 mb-4">Hubungi Kami</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Berinteraksi langsung dengan kami untuk pemesanan, pertanyaan, atau untuk penjadwalan kunjungan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="mb-6">Kirimkan pesan anda</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Tertarik pada Layanan
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option>Kost</option>
                  <option>Penginapan Syariah</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Kirimkan Pesan
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <MapPin className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="mb-2">Lokasi</h4>
                  {/* <p className="text-gray-600">
                    
                    Jln Rajainal Siregar no 189 <br />
                    Kelurahan Batunaduajulu kecamatan Padangsidimpuan Batunadua Kota Padangsidimpuan
                  </p> */}
                    <iframe
                        src="https://www.google.com/maps?q=1.4180387,99.2875519&z=16&output=embed"
                        className='block mx-auto rounded-lg'
                        width="100%"
                        height="150"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Phone className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="mb-2">Nomor Telepon</h4>
                  <p className="text-gray-600">
                    0852-0608-6826
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="mb-2">Email</h4>
                  <p className="text-gray-600">
                    	karuniajayacv@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Clock className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h4 className="mb-2">Jam Buka</h4>
                  <p className="text-gray-600">
                    Setiap Hari pukul 09.00 - 18.00 WIB
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 p-6 rounded-xl text-white">
              <h4 className="text-white mb-3">Kunjungi Kami</h4>
              <p className="mb-4">
                Jadwalkan kunjungan untuk melihat fasilitas dan kamar yang tersedia. Kami akan senang membawa anda melihat penginapan!
              </p>
              <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Jadwalkan Kunjungan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
