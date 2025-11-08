import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'E-book Saja',
    price: 'Rp199.000',
    features: ['E-book Mastery 2026 (200+ halaman)', 'Checklist & Template dasar', 'Update konten e-book'],
    highlighted: false,
  },
  {
    name: 'Paket Lengkap',
    price: 'Rp699.000',
    features: ['Semua E-book', 'Akses Kelas Online 150+ video', 'Template premium & worksheet', 'Komunitas & Live Q&A'],
    highlighted: true,
  },
  {
    name: 'Mentoring Pro',
    price: 'Rp1.499.000',
    features: ['Semua Paket Lengkap', 'Review channel 1x', 'Sesi mentoring 60 menit'],
    highlighted: false,
  },
];

const CTASection = () => {
  return (
    <section id="beli" className="relative mx-auto max-w-6xl px-6 py-14">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Pilih Paket Belajar</h2>
        <p className="mt-2 text-white/70">Mulai hari ini, rasakan perubahan channel dalam hitungan minggu.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t, i) => (
          <div
            key={i}
            className={`relative rounded-2xl border p-6 ${
              t.highlighted
                ? 'border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 shadow-lg'
                : 'border-white/10 bg-white/5'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="mt-1 text-3xl font-bold">{t.price}</p>
              </div>
              {t.highlighted && (
                <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-medium text-fuchsia-200">Terpopuler</span>
              )}
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              {t.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2 text-white/80">
                  <Check className="mt-0.5 h-4 w-4 text-emerald-400" /> {f}
                </li>
              ))}
            </ul>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Fitur checkout demo. Integrasikan payment gateway sesuai kebutuhan.');
              }}
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition ${
                t.highlighted
                  ? 'bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white hover:brightness-110'
                  : 'border border-white/10 text-white/90 hover:border-white/20'
              }`}
            >
              Dapatkan Sekarang <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-white/50">
        Semua harga termasuk PPN. Akses langsung setelah pembayaran terverifikasi.
      </p>
    </section>
  );
};

export default CTASection;
