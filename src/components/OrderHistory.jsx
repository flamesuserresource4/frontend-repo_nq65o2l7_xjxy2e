import { useState } from 'react';
import { Wallet, Check } from 'lucide-react';

export default function OrderHistory() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  // Simple demo admin pin to reveal verify/reject controls
  const [adminPin, setAdminPin] = useState('');
  const isAdmin = adminPin === 'admin2026';

  const backendBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const fetchOrders = async () => {
    if (!email) {
      setError('Isi email untuk melihat pesanan.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${backendBase}/api/orders?email=${encodeURIComponent(email)}`);
      if (!res.ok) throw new Error('Gagal memuat pesanan');
      const data = await res.json();
      setItems(Array.isArray(data.items) ? data.items : []);
    } catch (e) {
      setError(e.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, action) => {
    try {
      const res = await fetch(`${backendBase}/api/orders/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_id: orderId, action }),
      });
      if (!res.ok) throw new Error('Gagal memperbarui status');
      // Refresh list after update
      await fetchOrders();
    } catch (e) {
      setError(e.message || 'Gagal mengubah status');
    }
  };

  const StatusBadge = ({ status }) => {
    const map = {
      pending: 'bg-amber-500/15 text-amber-600 border-amber-500/30',
      submitted: 'bg-cyan-500/15 text-cyan-600 border-cyan-500/30',
      queued: 'bg-sky-500/15 text-sky-600 border-sky-500/30',
      verified: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30',
      rejected: 'bg-rose-500/15 text-rose-600 border-rose-500/30',
    };
    const cls = map[status] || 'bg-slate-500/15 text-slate-600 border-slate-500/30';
    return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${cls}`}>{String(status || 'unknown').toUpperCase()}</span>;
  };

  return (
    <section id="riwayat" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center"><Wallet size={18} /></div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Riwayat Pesanan</h2>
            <p className="text-slate-600 text-sm">Cek status pesanan Anda berdasarkan email.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email yang digunakan saat membeli"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
            />
            <button
              onClick={fetchOrders}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white font-medium px-4 py-2 hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? 'Memuat...' : 'Lihat Pesanan'}
            </button>
          </div>

          {error && (
            <div className="mt-4 text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">{error}</div>
          )}

          <div className="mt-6 divide-y divide-slate-100">
            {items.length === 0 && !loading && (
              <p className="text-sm text-slate-500">Belum ada pesanan untuk email ini.</p>
            )}
            {items.map((it) => (
              <div key={it.id} className="py-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="text-xs text-slate-500 bg-slate-100 rounded px-1.5 py-0.5">{it.id}</code>
                    <StatusBadge status={it.status} />
                  </div>
                  <div className="mt-1 text-sm text-slate-700">
                    Paket: <span className="font-medium">{it.plan}</span> • Metode: {it.payment_method}
                  </div>
                </div>
                {isAdmin && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateStatus(it.id, 'verify')}
                      className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 text-white text-sm px-3 py-1.5 hover:bg-emerald-700"
                    >
                      <Check size={14} /> Verifikasi
                    </button>
                    <button
                      onClick={() => updateStatus(it.id, 'reject')}
                      className="inline-flex items-center gap-1 rounded-lg bg-rose-600 text-white text-sm px-3 py-1.5 hover:bg-rose-700"
                    >
                      Tolak
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-100 pt-4">
            <details className="group">
              <summary className="cursor-pointer select-none text-sm text-slate-600">Admin tools</summary>
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="password"
                  value={adminPin}
                  onChange={(e) => setAdminPin(e.target.value)}
                  placeholder="Masukkan PIN admin"
                  className="rounded-xl border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
                <span className="text-xs text-slate-500">PIN demo: admin2026</span>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
