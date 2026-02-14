import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, BookmarkCheck, Send, Trash2 } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import { getCategoryBySlug } from '../data/categories';
import { useInteractions } from '../context/InteractionContext';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function generateBody(article) {
  const bodyImageSeed = article.image.replace(/\/seed\/(\d+)\//, (_, s) => '/seed/' + (parseInt(s) + 7) + '/');
  return `
    <p>${article.excerpt}</p>
    <h2>Understanding ${article.title.split(':')[0]}</h2>
    <p>The landscape of ${article.category.replace(/-/g, ' ')} continues to evolve at an unprecedented pace. In this comprehensive analysis, we explore the key developments and their implications for professionals and enthusiasts alike.</p>
    <p>Industry experts have noted significant shifts in how organizations approach these challenges. The convergence of innovation and practical application creates opportunities that were previously unimaginable.</p>
    <blockquote>"The future belongs to those who understand the intersection of technology and human potential." — Industry Expert</blockquote>
    <h2>Key Developments</h2>
    <p>Several breakthrough developments have shaped the current state of affairs:</p>
    <ul>
      <li><strong>Innovation Acceleration</strong> — The pace of advancement has increased dramatically, with new solutions emerging faster than ever before.</li>
      <li><strong>Cross-Domain Integration</strong> — Boundaries between traditional disciplines are dissolving, creating hybrid approaches with remarkable effectiveness.</li>
      <li><strong>Accessibility Improvements</strong> — What was once reserved for large enterprises is now available to smaller organizations and individual practitioners.</li>
      <li><strong>Sustainability Focus</strong> — Environmental and social considerations are becoming integral to development and deployment strategies.</li>
    </ul>
    <h2>Looking Ahead</h2>
    <p>As we look toward the future, the implications of these developments extend far beyond their immediate applications. The convergence of multiple technological advances creates a multiplier effect that amplifies impact across industries.</p>
    <p>Organizations that position themselves at the forefront of these changes will find themselves with significant competitive advantages. The key lies in understanding not just the technology itself, but the broader ecosystem in which it operates.</p>
    <img src="${bodyImageSeed}" alt="Visual context for ${article.title}" />
    <h3>Practical Implications</h3>
    <p>For practitioners in the field, staying current with these developments is essential. Continuous learning and adaptation form the foundation of professional growth in this rapidly evolving landscape.</p>
    <p>The tools and frameworks available today would have seemed like science fiction just a few years ago. Embracing these capabilities while maintaining a critical perspective ensures balanced and effective implementation.</p>
  `;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const { toggleLike, toggleSave, addComment, deleteComment, getLikes, isSaved, getComments } = useInteractions();
  const [commentText, setCommentText] = useState('');

  if (!article) {
    return (
      <div className="main-content py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-8">The article you are looking for does not exist.</p>
        <Link to="/" className="px-6 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-colors inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  const catData = getCategoryBySlug(article.category);
  const catLabel = catData ? catData.name : article.category.replace(/-/g, ' ');
  const related = getRelatedArticles(slug, article.category, 3);
  const body = generateBody(article);
  const likeCount = getLikes(slug);
  const savedState = isSaved(slug);
  const articleComments = getComments(slug);

  function handleSubmitComment(e) {
    e.preventDefault();
    addComment(slug, commentText);
    setCommentText('');
  }

  return (
    <div className="main-content py-8 md:py-12 max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8 flex-wrap">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <Link to={`/categories/${article.category}`} className="hover:text-blue-600 transition-colors">{catLabel}</Link>
        <span>/</span>
        <span className="text-slate-500 truncate max-w-[200px]">{article.title}</span>
      </nav>

      {/* Tag */}
      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wider inline-block mb-5">
        {catLabel}
      </span>

      {/* Title */}
      <h1 className="font-serif font-black text-slate-900 leading-tight mb-6" style={{ fontSize: 'clamp(1.5rem, 1rem + 2vw, 2.5rem)' }}>
        {article.title}
      </h1>



      {/* Hero Image */}
      {article.image && (
        <img src={article.image} alt={article.title} className="w-full rounded-lg mb-10" />
      )}

      {/* Article Body */}
      <div className="article-body" dangerouslySetInnerHTML={{ __html: body }} />

      {/* Bottom Action Bar */}
      <div className="flex items-center justify-between py-4 mt-10 mb-6 border-t border-b border-slate-100">
        <div className="flex items-center gap-2 sm:gap-4">
          <button onClick={() => toggleLike(slug)} className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 ${likeCount > 0 ? 'bg-rose-50 text-rose-500' : 'text-slate-500 hover:bg-rose-50 hover:text-rose-500'}`}>
            <Heart className={`w-5 h-5 ${likeCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span className="text-sm font-semibold hidden sm:inline">{likeCount > 0 ? `${likeCount} likes` : 'Like'}</span>
            {likeCount > 0 && <span className="text-sm font-semibold sm:hidden">{likeCount}</span>}
          </button>
          <a href="#comments" className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 ${articleComments.length > 0 ? 'bg-sky-50 text-sky-500' : 'text-slate-500 hover:bg-sky-50 hover:text-sky-500'}`}>
            <MessageCircle className={`w-5 h-5 ${articleComments.length > 0 ? 'fill-sky-100' : ''}`} />
            <span className="text-sm font-semibold hidden sm:inline">{articleComments.length > 0 ? `${articleComments.length} comments` : 'Comment'}</span>
            {articleComments.length > 0 && <span className="text-sm font-semibold sm:hidden">{articleComments.length}</span>}
          </a>
        </div>
          <button onClick={() => toggleSave(slug)} className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-full transition-all duration-200 ${savedState ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'}`}>
          {savedState ? <BookmarkCheck className="w-5 h-5 fill-blue-600" /> : <Bookmark className="w-5 h-5" />}
          <span className="text-sm font-semibold hidden sm:inline">{savedState ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {/* Comments Section */}
      <section id="comments" className="mt-4 scroll-mt-20">
        <h2 className="font-bold text-lg text-slate-900 mb-3">Comments ({articleComments.length})</h2>

        {/* Comment form */}
        <form onSubmit={handleSubmitComment} className="flex gap-2 sm:gap-3 max-w-md">
          <div className="w-9 h-9 rounded-full bg-slate-400 hidden sm:flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">Y</span>
          </div>
          <div className="flex-1 flex gap-2 min-w-0">
            <input
              type="text"
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
            />
            <button
              type="submit"
              disabled={!commentText.trim()}
              className="p-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Comment list */}
        {articleComments.length > 0 ? (
          <div className="space-y-5">
            {articleComments.map(c => (
              <div key={c.id} className="flex gap-3 group">
                <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{c.author[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-slate-900">{c.author}</span>
                    <span className="text-xs text-slate-600">{new Date(c.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
                </div>
                <button
                  onClick={() => deleteComment(slug, c.id)}
                  className="p-1 rounded text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all self-start mt-1"
                  title="Delete"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <h2 className="font-serif font-bold text-xl text-slate-900 mb-6">Related Articles</h2>
          <div className="space-y-4">
            {related.map(ra => (
              <Link key={ra.slug} to={`/articles/${ra.slug}`} className="group flex gap-4 items-start hover:bg-slate-50 -mx-3 px-3 py-3 rounded-xl transition-colors">
                {ra.image && (
                  <img src={ra.image} alt={ra.title} className="w-20 h-16 object-cover rounded-md shrink-0" />
                )}
                <div className="min-w-0">
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors mb-1 line-clamp-2">{ra.title}</h3>
                  <p className="text-xs text-slate-600">{formatDate(ra.date)} · {ra.readingTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
