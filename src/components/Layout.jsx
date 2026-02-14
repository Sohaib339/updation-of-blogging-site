import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import LeftSidebar from './LeftSidebar';
import Header from './Header';
import { categories } from '../data/categories';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-20 right-6 z-50 w-10 h-10 rounded-full bg-slate-800 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-slate-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans w-full flex">
      <LeftSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-10">
          <div className="main-content">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_1fr] gap-8">
              {/* Left: Brand */}
              <div>
                <Link to="/" className="flex items-center gap-2 mb-3">
                  <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LetsBlogItUp" className="w-8 h-8 rounded-lg" />
                  <span className="font-serif font-bold text-white text-sm">LetsBlogItUp | Developer Insights on Tech, Data & Life</span>
                </Link>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  A developer's data-driven exploration of technology, science, business, and lifestyle.
                  Code, analysis, and insights from an engineering perspective.
                </p>
                <a href="https://amanah-capitals.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
                  Powered by <span className="font-semibold">Amanah Capitals</span>
                </a>
              </div>

              {/* Middle: Categories */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Categories</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-1.5">
                  {categories.map(cat => (
                    <Link key={cat.slug} to={`/categories/${cat.slug}`} className="text-xs text-slate-400 hover:text-white transition-colors">
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Pages */}
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Pages</h4>
                <div className="flex flex-col gap-1.5">
                  <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">Home</Link>
                  <Link to="/categories" className="text-xs text-slate-400 hover:text-white transition-colors">All Categories</Link>
                  <Link to="/about" className="text-xs text-slate-400 hover:text-white transition-colors">About Us</Link>
                  <a href="https://amanah-capitals.tech/contact.html" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-white transition-colors">Contact</a>
                  <Link to="/privacy" className="text-xs text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                  <Link to="/terms" className="text-xs text-slate-400 hover:text-white transition-colors">Terms of Use</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
