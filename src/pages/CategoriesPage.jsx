import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import { getCategoryIcon } from '../data/categoryIcons';

const cardColors = [
  ['#8b5cf6', '#ec4899', '#f59e0b'],
  ['#06b6d4', '#8b5cf6', '#ec4899'],
  ['#10b981', '#06b6d4', '#8b5cf6'],
  ['#f59e0b', '#ef4444', '#ec4899'],
  ['#ec4899', '#8b5cf6', '#06b6d4'],
  ['#ef4444', '#f59e0b', '#10b981'],
  ['#8b5cf6', '#06b6d4', '#10b981'],
  ['#f59e0b', '#ec4899', '#8b5cf6'],
];

function CategoryCard({ cat, colorIndex }) {
  const cardRef = useRef(null);
  const colors = cardColors[colorIndex % cardColors.length];

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  }

  return (
    <Link
      ref={cardRef}
      to={`/categories/${cat.slug}`}
      onMouseMove={handleMouseMove}
      className="category-card group relative p-6 rounded-2xl border border-slate-100 transition-all duration-300 overflow-hidden bg-white"
      style={{
        '--c1': colors[0],
        '--c2': colors[1],
        '--c3': colors[2],
      }}
    >
      {/* Radial glow that follows cursor */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), var(--c1) 0%, var(--c2) 35%, var(--c3) 60%, transparent 70%)`,
          opacity: 'var(--card-opacity, 0)',
        }}
      />
      {/* White inner to create border-glow effect */}
      <div className="pointer-events-none absolute inset-[2px] rounded-[14px] bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-[1]" />

      {/* Content */}
      <div className="relative z-[2]">
        <div className="w-10 h-10 rounded-xl bg-violet-50 group-hover:bg-gradient-to-br group-hover:from-violet-100 group-hover:to-fuchsia-100 flex items-center justify-center mb-4 text-violet-500 group-hover:text-violet-600 transition-all duration-300 group-hover:shadow-md group-hover:shadow-violet-200/50 group-hover:scale-110">
          {(() => { const Icon = getCategoryIcon(cat.slug); return <Icon size={20} />; })()}
        </div>
        <h3 className="font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-700 group-hover:to-fuchsia-600 transition-colors duration-300 mb-1">{cat.name}</h3>
        <p className="text-sm text-slate-600 line-clamp-2 mb-3 font-light group-hover:text-slate-700 transition-colors duration-300">{cat.description}</p>
        <span className="text-xs font-bold text-slate-600 group-hover:text-violet-500 transition-colors duration-300">{getArticlesByCategory(cat.slug).length} article{getArticlesByCategory(cat.slug).length !== 1 ? 's' : ''}</span>
      </div>
    </Link>
  );
}

export default function CategoriesPage() {
  return (
    <div className="main-content py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-2">All Categories</h1>
      <p className="text-lg text-slate-600 mb-10 font-light">Explore {categories.length} topics across technology, science, and beyond.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.slug} cat={cat} colorIndex={i} />
        ))}
      </div>
    </div>
  );
}
