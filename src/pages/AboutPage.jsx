import { categories } from '../data/categories';
import articles from '../data/articles';

export default function AboutPage() {
  return (
    <div className="main-content py-8 md:py-10 max-w-5xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center shadow-md mb-6">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="LB" className="w-10 h-10 rounded-lg" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-4">About LetsBlogItUp</h1>
        <p className="text-xl text-slate-600 font-light max-w-xl mx-auto">High-quality, AI-assisted content that informs, inspires, and empowers.</p>
      </div>

      {/* Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Our Story</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed font-light text-lg">
          <p>LetsBlogItUp was born from a simple idea: combine the analytical mindset of a developer with the curiosity of a lifelong learner to create content that bridges technology and everyday life.</p>
          <p>We cover {categories.length} categories with {articles.length}+ articles, spanning from cutting-edge AI and quantum computing to health, lifestyle, and space exploration. Our content is AI-assisted but human-curated, ensuring accuracy and depth.</p>
          <p>Every article is crafted to be accessible to newcomers while providing enough depth for experts. We believe knowledge should flow freely across domains.</p>
        </div>
      </section>

      {/* Stats - plain text */}
      <div className="flex items-center justify-center flex-wrap gap-6 mb-12 text-center">
        <div>
          <div className="text-3xl font-black text-slate-900 mb-1">{articles.length}</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Articles</div>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div>
          <div className="text-3xl font-black text-slate-900 mb-1">{categories.length}</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Categories</div>
        </div>
        <div className="w-px h-10 bg-slate-200"></div>
        <div>
          <div className="text-3xl font-black text-slate-900 mb-1">Daily</div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Updates</div>
        </div>
      </div>

      {/* Amanah Capitals */}
      <section className="mb-12 bg-slate-900 text-white p-6 md:p-8 rounded-2xl">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Parent Company</div>
        <h3 className="font-serif font-bold text-xl mb-3">Powered by Amanah Capitals</h3>
        <p className="text-slate-400 font-light leading-relaxed mb-6">Our parent company supports this platform and several other tech initiatives focused on ethical finance, open-source development, and building tools that empower creators worldwide.</p>
        <a href="https://amanah-capitals.tech" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-white text-slate-900 font-bold px-6 py-2.5 rounded-full hover:bg-slate-100 transition-colors">
          Visit Amanah Capitals
        </a>
      </section>

      {/* Contact */}
      <section className="text-center pb-8">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Get in Touch</h2>
        <p className="text-slate-600 font-light text-lg mb-2">Have a question or suggestion?</p>
        <a href="mailto:hello@letsblogitup.dev" className="text-blue-600 font-medium hover:underline">hello@letsblogitup.dev</a>
      </section>
    </div>
  );
}
