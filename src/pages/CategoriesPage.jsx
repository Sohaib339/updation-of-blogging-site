import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import { getCategoryIcon } from '../data/categoryIcons';

export default function CategoriesPage() {
  return (
    <div className="main-content py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-2">All Categories</h1>
      <p className="text-lg text-slate-500 mb-10 font-light">Explore {categories.length} topics across technology, science, and beyond.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(cat => {
          const Icon = getCategoryIcon(cat.slug);
          const count = getArticlesByCategory(cat.slug).length;
          return (
            <Link key={cat.slug} to={`/categories/${cat.slug}`}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-violet-200 hover:bg-violet-50/30 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center mb-4 text-violet-500 transition-colors">
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-violet-700 transition-colors mb-1">{cat.name}</h3>
              <p className="text-sm text-slate-500 line-clamp-2 mb-3 font-light">{cat.description}</p>
              <span className="text-xs font-bold text-slate-400">{count} article{count !== 1 ? 's' : ''}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
