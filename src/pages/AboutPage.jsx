import { Globe } from 'lucide-react';
import { categories } from '../data/categories';
import articles from '../data/articles';

export default function AboutPage() {
  return (
    <div className="main-content py-8 md:py-12 max-w-5xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200 mb-6">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LB" className="w-10 h-10 rounded-lg" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-4">About LetsBlogItUp</h1>
        <p className="text-xl text-slate-500 font-light max-w-xl mx-auto">High-quality, AI-assisted content that informs, inspires, and empowers.</p>
      </div>

      {/* Story */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Our Story</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed font-light text-lg">
          <p>LetsBlogItUp was born from a simple idea: combine the analytical mindset of a developer with the curiosity of a lifelong learner to create content that bridges technology and everyday life.</p>
          <p>We cover {categories.length} categories with {articles.length}+ articles, spanning from cutting-edge AI and quantum computing to health, lifestyle, and space exploration. Our content is AI-assisted but human-curated, ensuring accuracy and depth.</p>
          <p>Every article is crafted to be accessible to newcomers while providing enough depth for experts. We believe knowledge should flow freely across domains.</p>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        <div className="text-center p-6 bg-violet-50 rounded-2xl">
          <div className="text-3xl font-black text-violet-600 mb-1">{articles.length}</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Articles</div>
        </div>
        <div className="text-center p-6 bg-fuchsia-50 rounded-2xl">
          <div className="text-3xl font-black text-fuchsia-600 mb-1">{categories.length}</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Categories</div>
        </div>
        <div className="text-center p-6 bg-orange-50 rounded-2xl">
          <div className="text-3xl font-black text-orange-600 mb-1">Daily</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Updates</div>
        </div>
      </div>

      {/* Amanah Capitals */}
      <section className="mb-16 bg-slate-900 text-white p-8 md:p-10 rounded-3xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-violet-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-600 rounded-full blur-3xl opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-bold text-violet-300 uppercase tracking-wider">Parent Company</span>
          </div>
          <h3 className="font-serif font-black text-2xl mb-4">Powered by Amanah Capitals</h3>
          <p className="text-slate-300 font-light leading-relaxed mb-8">Our parent company supports this platform and several other tech initiatives focused on ethical finance, open-source development, and building tools that empower creators worldwide.</p>
          <a href="https://amanah-capitals.tech" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-violet-50 font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
            style={{ color: '#7c3aed' }}>
            Visit Amanah Capitals
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="text-center pb-10">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Get in Touch</h2>
        <p className="text-slate-500 font-light text-lg mb-2">Have a question or suggestion?</p>
        <a href="mailto:hello@letsblogitup.dev" className="text-violet-600 font-medium hover:underline">hello@letsblogitup.dev</a>
      </section>
    </div>
  );
}
