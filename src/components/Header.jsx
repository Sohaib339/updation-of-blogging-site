import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Home, LayoutGrid, Info, Bookmark } from 'lucide-react';
import articles from '../data/articles';
import { categories } from '../data/categories';
import { getCategoryIcon } from '../data/categoryIcons';

export default function Header() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    const q = e.target.value;
    setQuery(q);
    if (q.trim().length < 2) { setResults([]); setShowResults(false); return; }
    const matches = articles.filter(a => a.title.toLowerCase().includes(q.toLowerCase())).slice(0, 6);
    setResults(matches);
    setShowResults(true);
  }

  function selectResult(slug) {
    setQuery('');
    setShowResults(false);
    navigate(`/articles/${slug}`);
  }

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="main-content h-16 flex items-center justify-between lg:justify-end">
        {/* Mobile Logo & Menu */}
        <div className="flex lg:hidden items-center gap-4">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
            {mobileMenuOpen ? <X className="w-6 h-6 text-slate-600" /> : <Menu className="w-6 h-6 text-slate-600" />}
          </button>
          <Link to="/" className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LetsBlogItUp" className="w-8 h-8 rounded-lg shadow-lg" />
            <span className="font-serif font-bold text-lg tracking-tight text-slate-900">LetsBlogItUp</span>
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center bg-slate-50 hover:bg-slate-100 rounded-full px-5 py-2.5 w-72 focus-within:ring-2 focus-within:ring-blue-100 focus-within:bg-white transition-all group relative">
            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 mr-3 transition-colors" />
            <input
              type="text"
              placeholder="Search AI, Tech, Science..."
              value={query}
              onChange={handleSearch}
              onFocus={() => query.length >= 2 && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              className="bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-400 w-full"
            />
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-80 overflow-y-auto">
                {results.length > 0 ? results.map(a => (
                  <button key={a.slug} onClick={() => selectResult(a.slug)}
                    className="w-full text-left px-5 py-3 hover:bg-blue-50 text-sm text-slate-700 border-b border-slate-50 last:border-0 transition-colors">
                    {a.title}
                  </button>
                )) : (
                  <div className="px-5 py-3 text-sm text-slate-600">No results found</div>
                )}
              </div>
            )}
          </div>


        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <Home size={20} /> <span className="font-medium">Home</span>
          </Link>
          <Link to="/categories" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <LayoutGrid size={20} /> <span className="font-medium">Categories</span>
          </Link>
          <Link to="/saved" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <Bookmark size={20} /> <span className="font-medium">Saved</span>
          </Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
            <Info size={20} /> <span className="font-medium">About</span>
          </Link>

          {/* What We Cover */}
          <div className="pt-3 mt-3 border-t border-slate-100">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-4">What We Cover</h3>
            <div className="space-y-1">
              {categories.map((cat) => {
                const Icon = getCategoryIcon(cat.slug);
                return (
                  <Link key={cat.slug} to={`/categories/${cat.slug}`} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                    <Icon size={16} className="text-slate-400" />
                    <span className="text-sm font-medium">{cat.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
