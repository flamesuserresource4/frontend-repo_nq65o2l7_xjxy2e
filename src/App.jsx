import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import OrderHistory from './components/OrderHistory';

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Youtuber Pemula 2026. All rights reserved.</p>
        <div className="text-sm text-slate-500">Dibuat dengan cinta untuk kreator Indonesia.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Testimonials />
        <CTA />
        <OrderHistory />
      </main>
      <Footer />
    </div>
  );
}
