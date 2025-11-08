import { useState } from 'react';
import { ShieldCheck, Zap, Wallet, Banknote, Copy, Check } from 'lucide-react';

export default function CTA() {
  const [paymentMethod, setPaymentMethod] = useState('DANA');
  const [copiedKey, setCopiedKey] = useState('');
  const [proofPreview, setProofPreview] = useState(null);

  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('ebook');
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const danaNumber = '085825223172';
  const gopayNumber = '085825223172';
  const bri = {
    bank: 'BANK BRI',
    name: 'SADRI',
    numberDisplay: '0259 01029131 530',
    numberCopy: '025901029131530',
  };

  const handleCopy = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 1500);
    } catch (e) {
      setCopiedKey('');
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setProofPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => setProofPreview(String(evt.target?.result || ''));
    reader.readAsDataURL(file);
  };

  const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');
    setResult(null);

    try {
      const payload = {
        email,
        plan,
        payment_method: paymentMethod,
        proof_image: proofPreview || null,
      };

      const res = await fetch(`${backendBase}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || `Gagal menyimpan pesanan (status ${res.status})`);
      }

      const data = await res.json();
      setResult({ id: data.id, status: data.status });
    } catch (err) {
      setErrorMsg(err.message || 'Terjadi kesalahan. Coba lagi.');
    } finally {
      setSubmitting(false);
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
            <form onSubmit={onSubmit} className="space-y-5" aria-describedby="form-desc">
              <p id="form-desc" className="sr-only">Form pembelian produk digital dengan opsi metode pembayaran dan unggah bukti transfer.</p>
              <div>
                <label className="block text-sm mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full rounded-xl px-4 py-2 bg-white text-slate-900 placeholder-slate-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="plan">Paket</label>
                <select
                  id="plan"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full rounded-xl px-4 py-2 bg-white text-slate-900 focus:outline-none"
                >
                  <option value="ebook">E-book</option>
                  <option value="kelas">Kelas Online</option>
                  <option value="template">Template Kit</option>
                </select>
              </div>

              <div>
                <span className="block text-sm mb-2">Metode Pembayaran</span>
                <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Metode Pembayaran">
                  {/* DANA */}
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="DANA"
                      checked={paymentMethod === 'DANA'}
                      onChange={() => setPaymentMethod('DANA')}
                      className="peer sr-only"
                      aria-label="DANA"
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
                      aria-label="OVO"
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
                      aria-label="GOPAY"
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
                      aria-label="Bank BRI"
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
                <div className="mt-4 rounded-xl bg-slate-800/60 border border-white/10 p-4 space-y-3">
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
                          onClick={() => handleCopy('dana', danaNumber)}
                          className="inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-white/20 px-2 py-1 text-xs"
                          aria-label="Salin nomor DANA"
                        >
                          {copiedKey === 'dana' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedKey === 'dana' ? 'Tersalin' : 'Salin'}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400">Silakan transfer ke nomor DANA di atas. Kirim bukti pembayaran setelah berhasil.</p>
                    </div>
                  )}

                  {paymentMethod === 'GOPAY' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Wallet size={18} className="text-cyan-300" />
                        <span className="font-semibold">Nomor Pembayaran GOPAY</span>
                      </div>
                      <div className="flex items-center justify-between bg-slate-900/60 rounded-lg px-3 py-2">
                        <code className="font-mono tracking-wide text-lg">{gopayNumber}</code>
                        <button
                          type="button"
                          onClick={() => handleCopy('gopay', gopayNumber)}
                          className="inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-white/20 px-2 py-1 text-xs"
                          aria-label="Salin nomor GOPAY"
                        >
                          {copiedKey === 'gopay' ? <Check size={14} /> : <Copy size={14} />}
                          {copiedKey === 'gopay' ? 'Tersalin' : 'Salin'}
                        </button>
                      </div>
                      <p className="text-xs text-slate-400">Transfer ke nomor GOPAY di atas. Setelah itu unggah bukti pembayaran.</p>
                    </div>
                  )}

                  {paymentMethod === 'OVO' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Wallet size={18} className="text-fuchsia-300" />
                        <span className="font-semibold">Instruksi Pembayaran OVO</span>
                      </div>
                      <p className="text-sm text-slate-300">Mohon kirimkan nomor OVO untuk ditambahkan agar bisa tampil dan disalin otomatis di sini.</p>
                    </div>
                  )}

                  {paymentMethod === 'BRI' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Banknote size={18} className="text-emerald-300" />
                        <span className="font-semibold">Transfer {bri.bank}</span>
                      </div>
                      <div className="bg-slate-900/60 rounded-lg px-3 py-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="space-x-2">
                            <span className="text-xs text-slate-400">No. Rekening</span>
                            <code className="font-mono tracking-wide text-base">{bri.numberDisplay}</code>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy('bri-number', bri.numberCopy)}
                            className="inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-white/20 px-2 py-1 text-xs"
                            aria-label="Salin nomor rekening BRI"
                          >
                            {copiedKey === 'bri-number' ? <Check size={14} /> : <Copy size={14} />}
                            {copiedKey === 'bri-number' ? 'Tersalin' : 'Salin'}
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-x-2">
                            <span className="text-xs text-slate-400">Atas Nama</span>
                            <span className="font-medium">{bri.name}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy('bri-name', bri.name)}
                            className="inline-flex items-center gap-1 rounded-md bg-white/10 hover:bg-white/20 px-2 py-1 text-xs"
                            aria-label="Salin nama pemilik rekening"
                          >
                            {copiedKey === 'bri-name' ? <Check size={14} /> : <Copy size={14} />}
                            {copiedKey === 'bri-name' ? 'Tersalin' : 'Salin'}
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">Setelah transfer, unggah bukti pembayaran untuk verifikasi otomatis.</p>
                    </div>
                  )}

                  {!['DANA', 'OVO', 'GOPAY', 'BRI'].includes(paymentMethod) && (
                    <div className="space-y-1">
                      <p className="text-sm text-slate-200">Instruksi pembayaran akan ditampilkan untuk metode yang dipilih.</p>
                    </div>
                  )}

                  {/* Upload Bukti Pembayaran (opsional) */}
                  <div className="pt-2 border-t border-white/10">
                    <label className="block text-sm mb-2" htmlFor="proof">Upload Bukti Pembayaran</label>
                    <div className="flex items-center gap-3">
                      <input
                        id="proof"
                        type="file"
                        accept="image/*"
                        onChange={onFileChange}
                        className="block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-white file:text-slate-900 file:px-3 file:py-1.5 file:font-medium file:hover:bg-slate-100"
                      />
                    </div>
                    {proofPreview && (
                      <div className="mt-3 flex items-center gap-3">
                        <img src={proofPreview} alt="Bukti pembayaran" className="h-20 w-20 object-cover rounded-md ring-1 ring-white/20" />
                        <button
                          type="button"
                          onClick={() => setProofPreview(null)}
                          className="text-xs px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20"
                        >
                          Hapus Bukti
                        </button>
                      </div>
                    )}
                    <p className="mt-2 text-xs text-slate-400">Anda bisa lanjut tanpa bukti; status menjadi pending sampai verifikasi.</p>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={submitting} className="w-full rounded-xl bg-white text-slate-900 font-semibold py-3 hover:bg-slate-100 disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? 'Menyimpan...' : 'Simpan Pesanan'}
              </button>

              {result && (
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-200">
                  Pesanan tersimpan. ID: <span className="font-mono">{result.id}</span> • Status: <span className="uppercase">{result.status}</span>
                </div>
              )}
              {errorMsg && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200" role="alert">
                  {errorMsg}
                </div>
              )}
              <p className="text-xs text-slate-300 text-center">Data akan disimpan untuk riwayat dan verifikasi otomatis.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
