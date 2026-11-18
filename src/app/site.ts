export const SITE = {
  name: 'Dzaki Kost & Homestay Syariah',
  shortName: 'Dzaki Kost',
  city: 'Padangsidimpuan',
  address: 'Jln. Rajainal Siregar No. 189, Batunadua Julu, Padangsidimpuan Batunadua, Kota Padangsidimpuan, Sumatera Utara',
  addressShort: 'Jln. Rajainal Siregar No. 189, Padangsidimpuan',
  phoneDisplay: '0852-0608-6826',
  phoneIntl: '6285206086826',
  email: 'karuniajayacv@gmail.com',
  hours: 'Setiap hari, 09.00–18.00 WIB',
  mapsEmbed: 'https://www.google.com/maps?q=1.4180387,99.2875519&z=16&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=1.4180387,99.2875519',
};

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Kamar', href: '#kamar' },
  { label: 'Fasilitas', href: '#fasilitas' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];
