import { Star } from 'lucide-react';

const items = [
  {
    name: 'Raka Pratama',
    role: 'Content Creator Gaming',
    text: 'Sebelumnya bingung mulai dari mana. Setelah ikut program ini, channel tembus 10k subscribers dalam 2 bulan! Materinya jelas dan actionable.',
  },
  {
    name: 'Alya Nabila',
    role: 'Lifestyle Vlogger',
    text: 'Template thumbnail dan skripnya sangat membantu. View naik 3x lipat dan akhirnya keterima monetisasi. Highly recommended!',
  },
  {
    name: 'Dimas Putra',
    role: 'Tech Reviewer',
    text: 'Bagian riset konten dan SEO paling nendang. Sekarang upload lebih konsisten dan hasilnya terasa.',
  },
];

function Stars() {
  return (
    <div className="flex text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Apa Kata Alumni</h2>
          <p className="mt-3 text-slate-600">Cerita nyata dari mereka yang memulai dari nol.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6">
              <Stars />
              <p className="mt-3 text-slate-700">“{t.text}”</p>
              <div className="mt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
