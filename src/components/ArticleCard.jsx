import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, BookmarkCheck } from 'lucide-react';
import { useInteractions } from '../context/InteractionContext';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function ArticleCard({ article }) {
  const { slug, title, excerpt, date, readingTime, image, author, category } = article;
  const catLabel = category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const { toggleLike, toggleSave, getLikes, isSaved, getComments } = useInteractions();

  const likeCount = getLikes(slug);
  const savedState = isSaved(slug);
  const commentCount = getComments(slug).length;

  return (
    <article className="py-6 border-b border-slate-100 last:border-0">
      <div className="flex gap-5 md:gap-8">
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-2.5">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LB" className="w-6 h-6 rounded-full shrink-0" />
            <span className="text-[13px] font-medium text-slate-600">{author}</span>
          </div>

          <Link to={`/articles/${slug}`} className="group block">
            <h2 className="text-base md:text-lg font-bold text-slate-900 leading-snug mb-1 group-hover:text-blue-700 transition-colors line-clamp-2">
              {title}
            </h2>
            <p className="article-excerpt hidden md:block">
              {excerpt}
            </p>
          </Link>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <span className="font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full text-[11px]">{catLabel}</span>
              <span>{formatDate(date)}</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">{readingTime}</span>
            </div>
            <div className="flex items-center gap-0.5">
              <button
                onClick={(e) => { e.preventDefault(); toggleLike(slug); }}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-all duration-200 ${likeCount > 0 ? 'bg-rose-50 text-rose-500' : 'text-slate-400 hover:bg-rose-50 hover:text-rose-500'}`}
                title="Like"
              >
                <Heart className={`w-4 h-4 ${likeCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
                {likeCount > 0 && <span className="text-xs font-semibold">{likeCount}</span>}
              </button>
              <Link
                to={`/articles/${slug}#comments`}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full transition-all duration-200 ${commentCount > 0 ? 'bg-sky-50 text-sky-500' : 'text-slate-400 hover:bg-sky-50 hover:text-sky-500'}`}
                title="Comments"
              >
                <MessageCircle className={`w-4 h-4 ${commentCount > 0 ? 'fill-sky-100' : ''}`} />
                {commentCount > 0 && <span className="text-xs font-semibold">{commentCount}</span>}
              </Link>
              <button
                onClick={(e) => { e.preventDefault(); toggleSave(slug); }}
                className={`px-2.5 py-1.5 rounded-full transition-all duration-200 ${savedState ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-blue-50 hover:text-blue-600'}`}
                title={savedState ? 'Saved' : 'Save'}
              >
                {savedState ? <BookmarkCheck className="w-4 h-4 fill-blue-600" /> : <Bookmark className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail */}
        <Link to={`/articles/${slug}`} className="shrink-0 hidden sm:block">
          {image ? (
            <img src={image} alt={title} loading="lazy" className="w-28 h-28 md:w-32 md:h-28 object-cover rounded-xl" />
          ) : (
            <div className="w-28 h-28 md:w-32 md:h-28 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LB" className="w-12 h-12 rounded-full" />
            </div>
          )}
        </Link>
      </div>
    </article>
  );
}
