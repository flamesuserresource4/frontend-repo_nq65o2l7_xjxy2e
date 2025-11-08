import React from 'react';
import { Rocket, PlayCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
            <Rocket className="h-5 w-5 text-fuchsia-400" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Youtuber Pemula 2026</span>
        </div>
        <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#produk" className="hover:text-white">Produk</a>
          <a href="#manfaat" className="hover:text-white">Manfaat</a>
          <a href="#beli" className="hover:text-white">Beli</a>
          <a
            href="#beli"
            className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            Mulai Sekarang
          </a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-2 md:gap-12 md:pt-14">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Star className="h-3.5 w-3.5 text-amber-400" />
            Program Terbaru 2026
          </div>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Jadi Youtuber Sukses dari Nol dengan E-book & Kelas Online
          </h1>
          <p className="mt-4 text-pretty text-white/70">
            Panduan lengkap membangun channel, riset konten, algoritma, editing, hingga monetisasi. Materi step-by-step, studi kasus Indonesia, dan template siap pakai.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#beli"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-600/30 transition hover:brightness-110"
            >
              <PlayCircle className="h-5 w-5" />
              Lihat Paket
            </a>
            <a href="#produk" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-white/80 hover:border-white/20 hover:text-white">
              Lihat Isi Materi
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">Garansi puas 7 hari atau uang kembali.</p>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-4 shadow-2xl">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
                alt="Studio YouTube pemula"
                className="h-full w-full object-cover opacity-90"
                loading="eager"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-lg font-semibold text-white">150+</p>
                Modul Video
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-lg font-semibold text-white">20+</p>
                Template & Worksheet
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-lg font-semibold text-white">24/7</p>
                Komunitas & Mentor
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
