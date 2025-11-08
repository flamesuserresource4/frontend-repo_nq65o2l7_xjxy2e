import React from 'react';
import { ShieldCheck, Users, TrendingUp } from 'lucide-react';

const items = [
  {
    icon: TrendingUp,
    title: 'Teruji Naik Trafik',
    desc: 'Metrik retention & CTR terbukti naik setelah implementasi framework di materi.'
  },
  {
    icon: Users,
    title: 'Komunitas Aktif',
    desc: 'Belajar bareng ratusan kreator pemula, networking, dan kolaborasi.'
  },
  {
    icon: ShieldCheck,
    title: 'Garansi Aman',
    desc: 'Coba 7 hari: tidak cocok, uang kembali. Tanpa syarat rumit.'
  }
];

const Benefits = () => {
  return (
    <section id="manfaat" className="relative mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Kenapa Harus Sekarang?</h2>
        <p className="mt-2 text-white/70">Bangun fondasi channel yang kuat sebelum persaingan makin ketat di 2026.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20">
              <it.icon className="h-6 w-6 text-indigo-300" />
            </div>
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-white/70">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
