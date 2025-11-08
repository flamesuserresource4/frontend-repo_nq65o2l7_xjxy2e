import { ShieldCheck, Zap, Wallet, Banknote } from 'lucide-react';

export default function CTA() {
  return (
    <section id="beli" className="py-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Mulai Perjalanan YouTube Kamu Hari Ini</h2>
            <p className="mt-3 text-slate-300">Akses e-book, materi video, dan komunitas eksklusif. Update seumur hidup tanpa biaya tambahan.</p>
            <ul className="mt-5 space-y-2 text-slate-200/90">
              <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-emerald-400" /> Garansi 7 hari: uang kembali jika tidak cocok</li>
              <li className="flex items-center gap-2"><Zap size={18} className="text-amber-400" /> Bisa bayar via e-wallet, transfer bank, atau kartu</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 ring-1 ring-white/20">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" required placeholder="nama@email.com" className="w-full rounded-xl px-4 py-2 bg-white text-slate-900 placeholder-slate-400 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-1">Paket</label>
                <select className="w-full rounded-xl px-4 py-2 bg-white text-slate-900 focus:outline-none">
                  <option value="ebook">E-book</option>
                  <option value="kelas">Kelas Online</option>
                  <option value="template">Template Kit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">Metode Pembayaran</label>
                <div className="grid grid-cols-2 gap-3">
                  {/* DANA */}
                  <label className="relative cursor-pointer">
                    <input type="radio" name="payment" value="DANA" defaultChecked className="peer sr-only" />
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 flex items-center justify-between gap-3 peer-checked:border-white peer-checked:bg-white/20">
                      <div className="flex items-center gap-2">
                        <Wallet size={18} className="text-sky-300" />
                        <span className="font-medium">DANA</span>
                      </div>
                      <span className="text-xs text-white/70">E-wallet</span>
                    </div>
                  </label>

                  {/* OVO */}
                  <label className="relative cursor-pointer">
                    <input type="radio" name="payment" value="OVO" className="peer sr-only" />
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 flex items-center justify-between gap-3 peer-checked:border-white peer-checked:bg-white/20">
                      <div className="flex items-center gap-2">
                        <Wallet size={18} className="text-fuchsia-300" />
                        <span className="font-medium">OVO</span>
                      </div>
                      <span className="text-xs text-white/70">E-wallet</span>
                    </div>
                  </label>

                  {/* GOPAY */}
                  <label className="relative cursor-pointer">
                    <input type="radio" name="payment" value="GOPAY" className="peer sr-only" />
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 flex items-center justify-between gap-3 peer-checked:border-white peer-checked:bg-white/20">
                      <div className="flex items-center gap-2">
                        <Wallet size={18} className="text-cyan-300" />
                        <span className="font-medium">GOPAY</span>
                      </div>
                      <span className="text-xs text-white/70">E-wallet</span>
                    </div>
                  </label>

                  {/* BANK BRI */}
                  <label className="relative cursor-pointer">
                    <input type="radio" name="payment" value="BRI" className="peer sr-only" />
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 flex items-center justify-between gap-3 peer-checked:border-white peer-checked:bg-white/20">
                      <div className="flex items-center gap-2">
                        <Banknote size={18} className="text-emerald-300" />
                        <span className="font-medium">BANK BRI</span>
                      </div>
                      <span className="text-xs text-white/70">Transfer</span>
                    </div>
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full rounded-xl bg-white text-slate-900 font-semibold py-3 hover:bg-slate-100">Lanjut ke Pembayaran</button>
              <p className="text-xs text-slate-300 text-center">Simulasi form. Integrasi pembayaran DANA/OVO/GOPAY/BRI dapat ditambahkan kapan saja.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
