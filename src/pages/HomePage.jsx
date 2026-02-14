import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import articles from '../data/articles';
import { categories } from '../data/categories';
import { getCategoryIcon } from '../data/categoryIcons';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function InfiniteTicker() {
  return (
    <div className="relative w-full overflow-hidden py-3 mb-2 bg-slate-50/40 rounded-2xl border border-slate-100/50">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      <div className="flex animate-marquee w-fit">
        {[...categories, ...categories].map((cat, i) => {
          const Icon = getCategoryIcon(cat.slug);
          return (
            <Link key={i} to={`/categories/${cat.slug}`} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-slate-600 whitespace-nowrap hover:border-blue-200 hover:text-blue-600 transition-all duration-200 cursor-pointer mx-1.5">
              <Icon size={14} className="text-slate-400" />
              <span className="text-[11px] font-semibold uppercase tracking-wider">{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function HomePage() {
  const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featured = sorted[0];
  const feed = sorted.slice(1);
  const mostRead = sorted.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <div className="border-b border-slate-100">
        <div className="main-content py-8 lg:py-10">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center justify-between">
            {/* Left: Text + stats */}
            <div className="flex-1 min-w-0 space-y-4">
              <div className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                Featured Story
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-serif font-black text-slate-900" style={{ lineHeight: 1.12 }}>
                Fresh Ideas,{' '}
                <br className="hidden md:block" />
                Delivered{' '}
                <br className="hidden md:block" />
                Daily by AI
              </h1>
              <p className="text-[15px] lg:text-base xl:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Our mission is simple: deliver high quality, engaging content that informs, inspires, and empowers our readers to stay ahead in an ever changing world.
              </p>

              {/* Stats row - plain text, no design */}
              <div className="flex items-center flex-wrap gap-4 text-sm text-slate-600 pt-1">
                <span><strong className="text-slate-900">63+</strong> Articles</span>
                <span className="text-slate-300">|</span>
                <span><strong className="text-slate-900">23</strong> Categories</span>
                <span className="text-slate-300">|</span>
                <span><strong className="text-slate-900">Daily</strong> Updates</span>
              </div>

              {/* Author + CTA */}
              <div className="flex items-center flex-wrap gap-4 pt-1">
                <div className="flex items-center gap-3">
                  <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LB" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">LetsBlogItUp AI</p>
                    <p className="text-xs text-slate-600">{formatDate(featured.date)} · {featured.readingTime}</p>
                  </div>
                </div>
                <Link to={`/articles/${featured.slug}`} className="ml-auto flex items-center gap-1.5 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-slate-800 transition-all duration-300">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Larger image */}
            <div className="w-full md:w-auto shrink-0" style={{ width: 'clamp(280px, 28vw, 520px)' }}>
              <Link to={`/articles/${featured.slug}`} className="relative group cursor-pointer block">
                <img src={featured.image} alt={featured.title} className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1 border border-slate-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="main-content py-6 lg:py-8">
        <InfiniteTicker />
        <div className="mt-6">
          {feed.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>

      {/* Most Read + Amanah Capitals */}
      <div className="border-t border-slate-100 bg-slate-50/30">
        <div className="main-content py-8 lg:py-10">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-5 bg-slate-800 rounded-full"></div>
              <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">Most Read Today</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mostRead.map((article, idx) => (
                <Link key={article.slug} to={`/articles/${article.slug}`} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                  <div className="text-2xl font-black text-slate-200 group-hover:text-slate-400 transition-colors leading-none w-6 font-serif italic shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded-full bg-slate-300 ring-2 ring-white shadow-sm shrink-0"></div>
                      <span className="text-xs font-medium text-slate-600 truncate">{article.author}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">{article.title}</h4>
                    <span className="text-[11px] text-slate-600 mt-1 inline-block">{article.readingTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Amanah Capitals */}
          <div className="bg-slate-900 p-6 md:p-8 rounded-2xl">
            <div className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Parent Company</div>
            <h3 className="font-serif font-bold text-xl mb-2 text-white">Powered by Amanah Capitals</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed max-w-lg">
              We build cutting-edge technology solutions that help businesses thrive in the digital age.
            </p>
            <a href="https://amanah-capitals.tech" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white rounded-full text-sm font-bold px-6 py-2.5 text-slate-900 hover:bg-slate-100 transition-colors">
              Visit Amanah Capitals
            </a>
          </div>
        </div>
      </div>
    </>
  );
}