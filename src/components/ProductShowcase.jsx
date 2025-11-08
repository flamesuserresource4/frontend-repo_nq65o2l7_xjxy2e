import React from 'react';
import { BookOpen, Video, Download, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'E-book Mastery YouTube 2026',
    desc: 'Blueprint membangun channel dari 0 hingga monetisasi. Disertai checklist & contoh judul viral.'
  },
  {
    icon: Video,
    title: 'Kelas Online Terstruktur',
    desc: '150+ video micro-learning: riset, scriptwriting, thumbnail, SEO, editing, dan analitik.'
  },
  {
    icon: Download,
    title: 'Template Siap Pakai',
    desc: 'Template thumbnail, skrip video, kalender konten, dan sheet tracking performa.'
  }
];

const modules = [
  'Mindset & Niche Finding',
  'Riset Konten ala 2026',
  'Scriptwriting yang Nempel',
  'Shooting dengan HP',
  'Editing Cepat & Menarik',
  'Thumbnail & CTR',
  'Algoritma & Retensi',
  'Monetisasi & Brand Deal'
];

const ProductShowcase = () => {
  return (
    <section id="produk" className="relative mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Apa yang Kamu Dapatkan</h2>
        <p className="mt-2 text-white/70">Paket lengkap untuk mulai dan bertumbuh cepat sebagai kreator YouTube pemula.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f, idx) => (
          <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30">
              <f.icon className="h-5 w-5 text-fuchsia-300" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
          <h4 className="text-lg font-semibold">Silabus Inti</h4>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {modules.map((m, i) => (
              <li key={i} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {m}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-6">
          <h4 className="text-lg font-semibold">Bonus Spesial</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>• Grup Komunitas & Live Q&A bulanan</li>
            <li>• Review channel 1x oleh mentor</li>
            <li>• Update materi gratis sepanjang 2026</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
