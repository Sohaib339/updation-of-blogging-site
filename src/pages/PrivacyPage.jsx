import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  return (
    <div className="main-content py-8 md:py-10 max-w-5xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-slate-600 mb-8">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-slate-900 font-medium">Privacy Policy</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-serif font-black text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-600 mb-10">Last updated: January 2026</p>
      <div className="space-y-8 text-slate-600 leading-relaxed text-lg font-light">
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Introduction</h2>
          <p>Welcome to LetsBlogItUp | Developer Insights on Tech, Data & Life. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Information We Collect</h2>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Automatically Collected Information</h3>
          <p className="mb-3">When you visit our website, we may automatically collect certain information about your device, including:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website</li>
            <li>Pages visited and time spent</li>
            <li>IP address (anonymized)</li>
          </ul>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Cookies</h3>
          <p>We use essential cookies to ensure the proper functioning of our website. These cookies do not collect personal information and are necessary for the site to work correctly.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">How We Use Your Information</h2>
          <p className="mb-3">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improve and optimize our website</li>
            <li>Understand how visitors use our site</li>
            <li>Provide a better user experience</li>
            <li>Ensure the security of our website</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Data Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data with analytics services to improve our content and user experience.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Third-Party Services</h2>
          <p className="mb-3">Our website is hosted on GitHub Pages and may use third-party services for:</p>
          <ul className="list-disc pl-6 space-y-1 mb-3">
            <li>Web hosting (GitHub)</li>
            <li>Font delivery (Google Fonts)</li>
          </ul>
          <p>Each of these services has their own privacy policies governing the use of your information.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Your Rights</h2>
          <p className="mb-3">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Request correction of your data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Request data portability</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Children's Privacy</h2>
          <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.</p>
        </section>
        <section>
          <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us through <a href="https://amanah-capitals.tech/contact.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Amanah Capitals</a>.</p>
        </section>
      </div>
    </div>
  );
}
