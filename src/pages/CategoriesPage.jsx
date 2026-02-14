import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import { getCategoryIcon } from '../data/categoryIcons';

function CategoryCard({ cat }) {
  return (
    <Link
      to={`/categories/${cat.slug}`}
      className="group p-5 rounded-xl border border-slate-100 transition-all duration-300 bg-white hover:shadow-md hover:border-slate-200"
    >
      <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center mb-3 text-slate-500 group-hover:text-blue-600 transition-all duration-300">
        {(() => { const Icon = getCategoryIcon(cat.slug); return <Icon size={20} />; })()}
      </div>
      <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300 mb-1">{cat.name}</h3>
      <p className="text-sm text-slate-600 line-clamp-2 mb-2 font-light">{cat.description}</p>
      <span className="text-xs font-bold text-slate-500 group-hover:text-blue-500 transition-colors duration-300">{getArticlesByCategory(cat.slug).length} article{getArticlesByCategory(cat.slug).length !== 1 ? 's' : ''}</span>
    </Link>
  );
}

export default function CategoriesPage() {
  return (
    <div className="main-content py-8 md:py-10">
      <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-2">All Categories</h1>
      <p className="text-lg text-slate-600 mb-8 font-light">Explore {categories.length} topics across technology, science, and beyond.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} cat={cat} />
        ))}
      </div>
    </div>
  );
}
