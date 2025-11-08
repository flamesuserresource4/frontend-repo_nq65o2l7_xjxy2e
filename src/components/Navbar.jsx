import { Rocket, ShoppingCart, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-600 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg">Youtuber Pemula 2026</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#produk" className="text-slate-600 hover:text-slate-900 transition">Produk</a>
            <a href="#testimoni" className="text-slate-600 hover:text-slate-900 transition">Testimoni</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#beli" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-slate-800 transition">
              <ShoppingCart size={16} />
              Beli Sekarang
            </a>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#produk" className="block px-2 py-2 rounded-lg hover:bg-slate-100">Produk</a>
            <a href="#testimoni" className="block px-2 py-2 rounded-lg hover:bg-slate-100">Testimoni</a>
            <a href="#faq" className="block px-2 py-2 rounded-lg hover:bg-slate-100">FAQ</a>
            <a href="#beli" className="block px-2 py-2 rounded-lg bg-slate-900 text-white">Beli Sekarang</a>
          </div>
        )}
      </nav>
    </header>
  );
}
