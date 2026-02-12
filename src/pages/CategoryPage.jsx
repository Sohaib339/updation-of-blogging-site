import { useParams, Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { getCategoryBySlug } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import { getCategoryIcon } from '../data/categoryIcons';

export default function CategoryPage() {
  const { category } = useParams();
  const cat = getCategoryBySlug(category);
  const catArticles = getArticlesByCategory(category);

  if (!cat) {
    return (
      <div className="main-content py-20 text-center">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Category Not Found</h1>
        <p className="text-slate-600 mb-8">This category does not exist.</p>
        <Link to="/categories" className="px-6 py-3 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-700 transition-colors inline-block">
          Browse Categories
        </Link>
      </div>
    );
  }

  const Icon = getCategoryIcon(cat.slug);

  return (
    <div className="main-content py-8 md:py-12 pb-4 md:pb-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
        <Link to="/" className="hover:text-violet-600 transition-colors">Home</Link>
        <span>/</span>
        <Link to="/categories" className="hover:text-violet-600 transition-colors">Categories</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">{cat.name}</span>
      </nav>

      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center text-violet-500">
          <Icon size={28} />
        </div>
        <div>
          <h1 className="text-3xl font-serif font-black text-slate-900">{cat.name}</h1>
          <p className="text-slate-600 font-light">{cat.description}</p>
        </div>
      </div>

      <p className="text-sm text-slate-600 font-medium mb-6">{catArticles.length} article{catArticles.length !== 1 ? 's' : ''}</p>

      {catArticles.length > 0 ? (
        <div>
          {catArticles.map(a => <ArticleCard key={a.slug} article={a} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl font-bold text-slate-900 mb-2">No Articles Yet</h2>
          <p className="text-slate-600 mb-6">We are working on content for this category.</p>
          <Link to="/categories" className="px-6 py-3 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-700 transition-colors inline-block">
            Browse Categories
          </Link>
        </div>
      )}
    </div>
  );
}
