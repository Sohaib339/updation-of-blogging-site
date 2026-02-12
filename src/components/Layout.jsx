import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import LeftSidebar from './LeftSidebar';
import Header from './Header';

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
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-200 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 animate-bounce" />
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
        <footer className="border-t border-slate-100 bg-slate-50/40 py-6">
          <div className="main-content">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500">
                <Link to="/about" className="hover:text-violet-600 transition-colors">About</Link>
                <a href="https://amanah-capitals.tech" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Amanah Capitals</a>
                <Link to="/privacy" className="hover:text-violet-600 transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-violet-600 transition-colors">Terms</Link>
                <Link to="/ai-policy" className="hover:text-violet-600 transition-colors">AI Policy</Link>
              </div>
              <p className="text-[11px] text-slate-400">© {new Date().getFullYear()} LetsBlogItUp · Powered by Amanah Capitals</p>
            </div>
          </div>
        </footer>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
