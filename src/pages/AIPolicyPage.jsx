import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

export default function AIPolicyPage() {
  return (
    <div className="main-content py-8 md:py-12 max-w-5xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link to="/" className="hover:text-violet-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">AI Content Policy</span>
      </nav>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-500">
          <Bot size={20} />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900">AI Content Policy</h1>
      </div>
      <p className="text-sm text-slate-400 mb-10">Last updated: January 2025</p>

      <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-light">
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Our Approach to AI</h2>
          <p>LetsBlogItUp embraces AI as a creative and analytical tool. We use large language models to assist in content generation, research synthesis, and editorial workflows. However, every piece of content undergoes human review before publication.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Transparency</h2>
          <p>We believe in full transparency about our use of AI. Articles that are primarily AI-generated are marked accordingly. Our editorial team verifies facts, adjusts tone, and ensures quality standards are met.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Quality Standards</h2>
          <p>AI-assisted content on our platform goes through a multi-step review process including fact-checking, readability assessment, and editorial review. We do not publish raw AI output without human oversight.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Ethical Use</h2>
          <p>We are committed to the ethical use of AI in content creation. We do not use AI to generate misleading information, impersonate individuals, or create content that could cause harm. Our AI tools are used to augment human creativity, not replace it.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Feedback</h2>
          <p>We welcome feedback on our AI-generated content. If you notice inaccuracies or have concerns, please reach out at <a href="mailto:hello@letsblogitup.dev" className="text-violet-600 hover:underline">hello@letsblogitup.dev</a>.</p>
        </section>
      </div>
    </div>
  );
}
