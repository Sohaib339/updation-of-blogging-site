import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div className="main-content py-8 md:py-12 max-w-5xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">Terms of Service</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-slate-600 mb-10">Last updated: January 2025</p>
      <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-light">
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing LetsBlogItUp, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">2. Content Usage</h2>
          <p>All content on LetsBlogItUp is provided for informational and educational purposes. You may share our articles with proper attribution. Reproduction of our content for commercial purposes without written permission is prohibited.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">3. AI-Generated Content</h2>
          <p>Some content on this platform is AI-assisted. While we strive for accuracy, AI-generated content may contain errors. We encourage readers to verify critical information through additional sources.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">4. User Conduct</h2>
          <p>Users must not engage in any activity that disrupts or interferes with our services. Automated scraping, unauthorized access attempts, and distribution of harmful content are strictly prohibited.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">5. Limitation of Liability</h2>
          <p>LetsBlogItUp and Amanah Capitals shall not be liable for any damages arising from the use of our platform or reliance on our content. Use the information at your own discretion.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">6. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:hello@letsblogitup.dev" className="text-blue-600 hover:underline">hello@letsblogitup.dev</a>.</p>
        </section>
      </div>
    </div>
  );
}
