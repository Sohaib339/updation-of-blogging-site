import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import articles from '../data/articles';
import { useInteractions } from '../context/InteractionContext';

export default function SavedPage() {
  const { getSavedArticles } = useInteractions();
  const savedSlugs = getSavedArticles();
  const savedArticles = articles.filter(a => savedSlugs.includes(a.slug));

  return (
    <div className="main-content py-8 md:py-12">
      <div className="flex items-center gap-3 mb-2">
        <Bookmark className="w-6 h-6 text-violet-600" />
        <h1 className="text-2xl md:text-3xl font-serif font-black text-slate-900">Saved Articles</h1>
      </div>
      <p className="text-slate-600 font-light mb-8">Your bookmarked articles for later reading.</p>

      {savedArticles.length > 0 ? (
        <div>
          {savedArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Bookmark className="w-7 h-7 text-slate-400" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 mb-2">No saved articles yet</h2>
          <p className="text-slate-600 text-sm mb-6">Click the bookmark icon on any article to save it here.</p>
          <Link to="/" className="px-6 py-2.5 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition-colors inline-block text-sm">
            Browse Articles
          </Link>
        </div>
      )}
    </div>
  );
}
