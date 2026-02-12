import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Info, Bookmark } from 'lucide-react';
import { categories } from '../data/categories';
import { getCategoryIcon } from '../data/categoryIcons';

function NavItem({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative ${
        active
          ? 'bg-gradient-to-r from-violet-50 to-fuchsia-50 text-violet-700 font-bold shadow-sm'
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      <div className={active ? 'text-violet-600' : 'text-slate-400 group-hover:text-violet-500 transition-colors'}>
        {icon}
      </div>
      <span className="text-base tracking-wide">{label}</span>
    </Link>
  );
}

export default function LeftSidebar() {
  const location = useLocation();
  const path = location.pathname;
  const sidebarRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      ref={sidebarRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); if (sidebarRef.current) sidebarRef.current.scrollTop = 0; }}
      className={`hidden lg:flex flex-col border-r border-slate-100 sticky top-0 self-start bg-white z-40 h-screen ${hovered ? 'overflow-y-auto' : 'overflow-y-hidden'}`}
      style={{ flex: '0 0 clamp(240px, 18vw, 320px)', scrollbarWidth: 'thin', scrollbarColor: '#e2e8f0 transparent' }}
    >
      <div className="px-5 pt-6 pb-2">
        <Link to="/" className="flex items-center gap-3 mb-8 px-1">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LetsBlogItUp" className="w-10 h-10 rounded-xl shadow-lg shadow-violet-200 transform rotate-3 hover:rotate-6 transition-all duration-300 cursor-pointer" />
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              Let's Blog It Up
            </span>
            <span className="text-[10px] uppercase tracking-widest text-violet-500 font-bold">Powered by Amanah Capitals</span>
          </div>
        </Link>
        <nav className="space-y-1">
          <NavItem to="/" icon={<Home size={20} />} label="Home" active={path === '/'} />
          <NavItem to="/categories" icon={<LayoutGrid size={20} />} label="Categories" active={path.startsWith('/categories')} />
          <NavItem to="/saved" icon={<Bookmark size={20} />} label="Saved" active={path === '/saved'} />
          <NavItem to="/about" icon={<Info size={20} />} label="About" active={path === '/about'} />
        </nav>
      </div>

      <div className="mx-5 my-4 border-t border-slate-100"></div>

      <div className="px-5 py-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">What We Cover</h3>
        <div className="space-y-3.5">
          {categories.map((cat) => {
            const Icon = getCategoryIcon(cat.slug);
            return (
              <Link key={cat.slug} to={`/categories/${cat.slug}`} className="flex gap-3 group cursor-pointer">
                <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-violet-50 flex items-center justify-center shrink-0 transition-colors text-slate-400 group-hover:text-violet-500">
                  <Icon size={16} />
                </div>
                <div className="flex-1">
                  <h4 className="text-[15px] font-bold text-slate-700 group-hover:text-violet-700 transition-colors mb-0.5 leading-snug">
                    {cat.name}
                  </h4>
                  <p className="text-[13px] text-slate-400 leading-snug group-hover:text-slate-500 transition-colors line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-auto px-5 py-5 border-t border-slate-100 bg-slate-50/40">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-medium text-slate-600">
          <Link to="/about" className="hover:text-violet-600 transition-colors">About</Link>
          <a href="https://amanah-capitals.tech" target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Amanah Capitals</a>
          <Link to="/privacy" className="hover:text-violet-600 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-violet-600 transition-colors">Terms</Link>
          <Link to="/ai-policy" className="hover:text-violet-600 transition-colors">AI Policy</Link>
        </div>
        <p className="text-[9px] text-slate-500 mt-3">Powered by Amanah Capitals</p>
      </div>
    </aside>
  );
}
