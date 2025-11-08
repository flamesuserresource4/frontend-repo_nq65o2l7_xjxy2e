import { BookOpen, Video, FileText, Download } from 'lucide-react';

const products = [
  {
    id: 'ebook-complete',
    title: 'E-book: Blueprint YouTuber Pemula 2026',
    desc: '120+ halaman strategi, riset, dan panduan monetisasi yang langsung bisa dipraktikkan.',
    price: 149000,
    badge: 'Best Seller',
    icon: BookOpen,
  },
  {
    id: 'kelas-online',
    title: 'Kelas Online Intensif (4 Minggu)',
    desc: 'Kurikulum mingguan, tugas praktek, feedback, dan akses komunitas eksklusif.',
    price: 499000,
    badge: 'Paling Lengkap',
    icon: Video,
  },
  {
    id: 'template-kit',
    title: 'Template Thumbnail & Skrip',
    desc: '50+ template Canva + 30 skrip video untuk niche populer. Hemat waktu produksi.',
    price: 99000,
    badge: 'Baru',
    icon: FileText,
  },
];

function formatIDR(n) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
}

export default function ProductGrid() {
  return (
    <section id="produk" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Pilih Paket Sesuai Kebutuhan</h2>
          <p className="mt-3 text-slate-600">Semua produk bisa langsung diunduh setelah pembayaran terkonfirmasi.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ id, title, desc, price, badge, icon: Icon }) => (
            <div key={id} className="relative rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6 flex flex-col">
              {badge && (
                <span className="absolute -top-3 left-4 inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-1 ring-1 ring-emerald-200">
                  {badge}
                </span>
              )}
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Icon size={22} />
                </span>
                <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600 flex-1">{desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-2xl font-bold text-slate-900">{formatIDR(price)}</div>
                <a href="#beli" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">
                  <Download size={16} />
                  Beli
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
