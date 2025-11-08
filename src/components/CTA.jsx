import { useState } from 'react';
import { ShieldCheck, Zap, Wallet, Banknote, Copy, Check } from 'lucide-react';

export default function CTA() {
  const [paymentMethod, setPaymentMethod] = useState('DANA');
  const [copied, setCopied] = useState(false);

  const danaNumber = '085825223172';

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      setCopied(false);
    }
  };

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
                    <input
                      type="radio"
                      name="payment"
                      value="DANA"
                      checked={paymentMethod === 'DANA'}
                      onChange={() => setPaymentMethod('DANA')}
                      className="peer sr-only"
                    />
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
                    <input
                      type="radio"
                      name="payment"
                      value="OVO"
                      checked={paymentMethod === 'OVO'}
                      onChange={() => setPaymentMethod('OVO')}
                      className="peer sr-only"
                    />
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
                    <input
                      type="radio"
                      name="payment"
                      value="GOPAY"
                      checked={paymentMethod === 'GOPAY'}
                      onChange={() => setPaymentMethod('GOPAY')}
                      className="peer sr-only"
                    />
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
                    <input
                      type="radio"
                      name="payment"
                      value="BRI"
                      checked={paymentMethod === 'BRI'}
                      onChange={() => setPaymentMethod('BRI')}
                      className="peer sr-only"
                    />
                    <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 flex items-center justify-between gap-3 peer-checked:border-white peer-checked:bg-white/20">
                      <div className="flex items-center gap-2">
                        <Banknote size={18} className="text-emerald-300" />
                        <span className="font-medium">BANK BRI</span>
                      </div>
                      <span className="text-xs text-white/70">Transfer</span>
                    </div>
                  </label>
                </div>

                {/* Detail pembayaran */}
                <div className="mt-4 rounded-xl bg-slate-800/60 border border-white/10 p-4">
                  {paymentMethod === 'DANA' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Wallet size={18} className="text-sky-300" />
                        <span className="font-semibold">Nomor Pembayaran DANA</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-900/60 rounded-lg px-3 py-2">
                        <code className="font-mono tracking-wide text-lg">{danaNumber}</code>
                        <button
                          type="button"
                          onClick={() => handleCopy(danaNumber)}
                          className="inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-white/20 px-2 py-1 text-xs"
                          aria-label="Salin nomor DANA"
                        >
                          {copied ? <Check size={14} /> : <Copy size={14} />}
                          {copied ? 'Tersalin' : 'Salin'}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400">Silakan transfer ke nomor DANA di atas. Kirim bukti pembayaran via email setelah selesai.</p>
                    </div>
                  )}
                  {paymentMethod !== 'DANA' && (
                    <div className="space-y-1">
                      <p className="text-sm text-slate-200">Instruksi pembayaran akan ditampilkan untuk metode yang dipilih.</p>
                      <p className="text-xs text-slate-400">Pilih DANA untuk melihat nomor pembayaran.</p>
                    </div>
                  )}
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
