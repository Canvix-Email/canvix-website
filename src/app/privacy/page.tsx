import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-[#F5F5F5]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Canvix.
          </p>
          <p className="text-sm text-[#F5F5F5]/60 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Information We Collect</h2>
            <div className="space-y-6">
              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Account Information</h3>
                <p className="text-lg leading-relaxed mb-4">
                  When you create a Canvix account, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>Name and email address</li>
                  <li>Company information (if provided)</li>
                  <li>Contact preferences</li>
                  <li>Account settings and preferences</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Usage Data</h3>
                <p className="text-lg leading-relaxed mb-4">
                  To improve our service and your experience, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>Email campaign data and templates you create</li>
                  <li>Platform usage analytics and feature interactions</li>
                  <li>Device information and browser type</li>
                  <li>IP address and general location data</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Communication Data</h3>
                <p className="text-lg leading-relaxed mb-4">
                  When you contact us or participate in surveys:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>Support request details and correspondence</li>
                  <li>Feedback and survey responses</li>
                  <li>Marketing communication preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">How We Use Your Information</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">Service Delivery</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Provide and maintain the Canvix platform</li>
                    <li>Process your email campaigns and data</li>
                    <li>Offer customer support and assistance</li>
                    <li>Send service-related communications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">Improvement & Analytics</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Analyze usage patterns and performance</li>
                    <li>Develop new features and improvements</li>
                    <li>Ensure security and prevent fraud</li>
                    <li>Conduct research and development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">Marketing & Communication</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Send product updates and newsletters</li>
                    <li>Provide educational content and tips</li>
                    <li>Inform about new features and services</li>
                    <li>Gather feedback and testimonials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">Legal & Compliance</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Comply with legal obligations</li>
                    <li>Enforce our terms of service</li>
                    <li>Protect against abuse and fraud</li>
                    <li>Respond to legal requests</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Data Sharing & Third Parties</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                We do not sell your personal information. We may share your data only in the following circumstances:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-[#A259FF] pl-6">
                  <h4 className="font-semibold text-[#A259FF] mb-2">Service Providers</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    With trusted third-party services that help us operate our platform (cloud hosting, analytics, customer support tools).
                  </p>
                </div>
                <div className="border-l-4 border-[#A259FF] pl-6">
                  <h4 className="font-semibold text-[#A259FF] mb-2">Email Service Providers</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    With ESP integrations you choose to connect (Mailchimp, Constant Contact, etc.) to send your campaigns.
                  </p>
                </div>
                <div className="border-l-4 border-[#A259FF] pl-6">
                  <h4 className="font-semibold text-[#A259FF] mb-2">Legal Requirements</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    When required by law, court order, or to protect our rights and the safety of our users.
                  </p>
                </div>
                <div className="border-l-4 border-[#A259FF] pl-6">
                  <h4 className="font-semibold text-[#A259FF] mb-2">Business Transfers</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    In the event of a merger, acquisition, or sale of assets (with advance notice to users).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Data Security</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                We implement industry-standard security measures to protect your information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#FF6F61]">Technical Safeguards</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Encrypted data storage</li>
                    <li>Regular security audits and updates</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#FF6F61]">Operational Safeguards</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Employee training on data protection</li>
                    <li>Limited access on need-to-know basis</li>
                    <li>Regular backup and recovery procedures</li>
                    <li>Incident response and monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Your Privacy Rights</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#A259FF] mb-2">Access & Portability</h4>
                    <p className="text-[#F5F5F5]/80 text-sm">
                      Request a copy of your personal data in a portable format.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#A259FF] mb-2">Correction</h4>
                    <p className="text-[#F5F5F5]/80 text-sm">
                      Update or correct inaccurate personal information.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#A259FF] mb-2">Deletion</h4>
                    <p className="text-[#F5F5F5]/80 text-sm">
                      Request deletion of your personal data (subject to legal requirements).
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#A259FF] mb-2">Opt-Out</h4>
                    <p className="text-[#F5F5F5]/80 text-sm">
                      Unsubscribe from marketing communications at any time.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#A259FF] mb-2">Restriction</h4>
                    <p className="text-[#F5F5F5]/80 text-sm">
                      Limit how we process your personal information.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#A259FF] mb-2">Objection</h4>
                    <p className="text-[#F5F5F5]/80 text-sm">
                      Object to processing based on legitimate interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Cookies & Tracking</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                We use cookies and similar technologies to enhance your experience and analyze usage patterns.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-[#FF6F61] mb-2">Essential Cookies</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Required for basic platform functionality and security.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FF6F61] mb-2">Analytics Cookies</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Help us understand how you use our platform to improve it.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FF6F61] mb-2">Preference Cookies</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Remember your settings and preferences for a better experience.
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#F5F5F5]/60 mt-6">
                You can manage cookie preferences through your browser settings or our cookie management tool.
              </p>
            </div>
          </section>

          {/* Contact & Updates */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Contact Us & Policy Updates</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-4 text-[#0F0F0F]">Questions About This Policy?</h3>
                <p className="text-[#666666] mb-6">
                  If you have questions about this privacy policy or how we handle your data, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:privacy@canvix.com" 
                    className="bg-[#A259FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A259FF]/90 transition-colors text-center"
                  >
                    Contact Privacy Team
                  </a>
                  <a 
                    href="mailto:support@canvix.com" 
                    className="bg-white border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    General Support
                  </a>
                </div>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Policy Updates</h3>
                <p className="text-lg leading-relaxed mb-4">
                  We may update this privacy policy from time to time to reflect changes in our practices or for legal reasons.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                  <li>We'll notify you of significant changes via email or platform notification</li>
                  <li>Minor updates will be posted with a new "last updated" date</li>
                  <li>Continued use of Canvix after updates constitutes acceptance</li>
                  <li>Previous versions are available upon request</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}