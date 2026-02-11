import { useState, useEffect } from 'react';
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
    <div className="min-h-screen bg-white text-slate-900 font-sans flex">
      <LeftSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
