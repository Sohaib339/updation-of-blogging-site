import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="main-content py-8 md:py-12 max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link to="/" className="hover:text-violet-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">Privacy Policy</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-10">Last updated: January 2025</p>
      <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-light">
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">1. Information We Collect</h2>
          <p>We collect minimal data to improve your reading experience. This includes anonymous usage analytics, reading preferences, and technical information such as browser type and device information. We do not collect personally identifiable information unless you voluntarily provide it.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
          <p>The information we collect is used to personalize content recommendations, improve our platform performance, and analyze aggregate reading trends. We never sell your data to third parties.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">3. Cookies</h2>
          <p>We use essential cookies for site functionality and optional analytics cookies to understand how visitors interact with our content. You can disable cookies through your browser settings at any time.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">4. Third-Party Services</h2>
          <p>We use privacy-respecting analytics tools. Images are served through external CDNs. We encourage you to review the privacy policies of these third-party services.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete any data we hold about you. Contact us at <a href="mailto:hello@letsblogitup.dev" className="text-violet-600 hover:underline">hello@letsblogitup.dev</a> for any privacy-related requests.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">6. Changes</h2>
          <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
        </section>
      </div>
    </div>
  );
}
