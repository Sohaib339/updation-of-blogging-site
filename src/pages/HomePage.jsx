import { Link } from 'react-router-dom';
import { Star, Globe, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import articles from '../data/articles';
import { categories } from '../data/categories';
import { getCategoryIcon } from '../data/categoryIcons';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function InfiniteTicker() {
  return (
    <div className="relative w-full overflow-hidden py-4 mb-2 bg-slate-50/40 rounded-2xl border border-slate-100/50">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      <div className="flex animate-marquee w-fit">
        {[...categories, ...categories].map((cat, i) => {
          const Icon = getCategoryIcon(cat.slug);
          return (
            <Link key={i} to={`/categories/${cat.slug}`} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 text-slate-500 whitespace-nowrap hover:border-violet-200 hover:text-violet-600 transition-all duration-200 cursor-pointer mx-1.5">
              <Icon size={14} className="text-violet-400" />
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
        <div className="main-content py-10 lg:py-14">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
            {/* Left: Text + stats */}
            <div className="flex-1 min-w-0 space-y-5">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-fuchsia-600 uppercase bg-fuchsia-50 px-3 py-1.5 rounded-full w-fit border border-fuchsia-100/60">
                <Star className="w-3 h-3 fill-current" />
                Featured Story
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-black text-slate-900" style={{ lineHeight: 1.12 }}>
                Fresh Ideas,{' '}
                <br className="hidden md:block" />
                Delivered{' '}
                <br className="hidden md:block" />
                Daily by AI
              </h1>
              <p className="text-[15px] text-slate-500 leading-relaxed max-w-lg">
                Our mission is simple: deliver high quality, engaging content that informs, inspires, and empowers our readers to stay ahead in an ever changing world.
              </p>

              {/* Stats row */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-xl px-3.5 py-2">
                  <TrendingUp className="w-4 h-4 text-violet-500" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">63+</p>
                    <p className="text-[10px] text-slate-500">Articles</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-fuchsia-50 border border-fuchsia-100 rounded-xl px-3.5 py-2">
                  <Users className="w-4 h-4 text-fuchsia-500" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">23</p>
                    <p className="text-[10px] text-slate-500">Categories</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-xl px-3.5 py-2">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">Daily</p>
                    <p className="text-[10px] text-slate-500">Updates</p>
                  </div>
                </div>
              </div>

              {/* Author + CTA */}
              <div className="flex items-center gap-4 pt-1">
                <div className="flex items-center gap-3">
                  <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LB" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">LetsBlogItUp AI</p>
                    <p className="text-xs text-slate-400">{formatDate(featured.date)} · {featured.readingTime}</p>
                  </div>
                </div>
                <Link to={`/articles/${featured.slug}`} className="ml-auto flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold px-4 py-2.5 rounded-full hover:shadow-lg hover:shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Larger image */}
            <div className="w-full md:w-[340px] shrink-0" style={{ maxWidth: 'clamp(380px, 34vw, 560px)' }}>
              <Link to={`/articles/${featured.slug}`} className="relative group cursor-pointer block">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 rounded-2xl transform rotate-2 translate-x-2 translate-y-2 opacity-15 group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-500"></div>
                <img src={featured.image} alt={featured.title} className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:-translate-y-1 border border-slate-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="main-content py-8 lg:py-10">
        <InfiniteTicker />
        <div className="mt-8">
          {feed.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>

      {/* Most Read + Explore Topics + Amanah Capitals */}
      <div className="border-t border-slate-100 bg-slate-50/30">
        <div className="main-content py-12 lg:py-16">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-5 bg-gradient-to-b from-violet-600 to-fuchsia-600 rounded-full"></div>
              <h3 className="font-bold text-slate-900 uppercase tracking-wide text-sm">Most Read Today</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {mostRead.map((article, idx) => (
                <Link key={article.slug} to={`/articles/${article.slug}`} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                  <div className="text-2xl font-black text-slate-200 group-hover:text-fuchsia-300 transition-colors leading-none w-6 font-serif italic shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 ring-2 ring-white shadow-sm shrink-0"></div>
                      <span className="text-xs font-medium text-slate-500 truncate">{article.author}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-violet-700 transition-colors line-clamp-2">{article.title}</h4>
                    <span className="text-[11px] text-slate-400 mt-1 inline-block">{article.readingTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Amanah Capitals */}
          <div className="bg-slate-900 p-8 md:p-10 rounded-3xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-violet-600 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-bold text-violet-300 tracking-wider uppercase">Parent Company</span>
              </div>
              <h3 className="font-serif font-black text-2xl mb-3 leading-tight text-white">Powered by Amanah Capitals</h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed max-w-lg">
                We build cutting-edge technology solutions that help businesses thrive in the digital age.
              </p>
              <a href="https://amanah-capitals.tech" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white rounded-full shadow-lg hover:shadow-xl text-sm font-bold px-8 py-3 transition-all hover:bg-violet-50"
                style={{ color: '#7c3aed' }}>                Visit Amanah Capitals
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}