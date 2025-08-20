import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-[#F5F5F5]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
            These terms govern your use of the Canvix email creation platform. Please read them carefully before using our services.
          </p>
          <p className="text-sm text-[#F5F5F5]/60 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Acceptance of Terms</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-4">
                By accessing or using the Canvix platform ("Service"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, you may not use our Service.
              </p>
              <p className="text-lg leading-relaxed">
                These Terms apply to all users of the Service, including but not limited to individual users, businesses, and organizations that access or use our email creation platform.
              </p>
            </div>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Service Description</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                Canvix provides an AI-powered email creation platform that enables users to:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#A259FF]">Platform Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Create and design email campaigns</li>
                    <li>Use AI-powered content assistance</li>
                    <li>Manage email templates and assets</li>
                    <li>Collaborate with team members</li>
                    <li>Preview and test email designs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#A259FF]">Integrations</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Connect with email service providers</li>
                    <li>Export to various email formats</li>
                    <li>Sync with marketing automation tools</li>
                    <li>Access through web-based interface</li>
                    <li>API access for enterprise users</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">User Accounts & Registration</h2>
            <div className="space-y-6">
              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Account Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>You must provide accurate and complete information during registration</li>
                  <li>You are responsible for maintaining the security of your account credentials</li>
                  <li>You must be at least 18 years old or have parental consent to use the Service</li>
                  <li>One person or entity may not maintain multiple free accounts</li>
                  <li>You are responsible for all activities that occur under your account</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Account Suspension & Termination</h3>
                <p className="text-lg leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your account if you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>Violate these Terms or our Acceptable Use Policy</li>
                  <li>Engage in fraudulent or abusive behavior</li>
                  <li>Fail to pay applicable fees when due</li>
                  <li>Use the Service for illegal or unauthorized purposes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Acceptable Use Policy</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                You agree to use Canvix responsibly and in compliance with all applicable laws. You may not:
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">Prohibited Content</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Send spam or unsolicited commercial email</li>
                    <li>Distribute malware, viruses, or harmful code</li>
                    <li>Share illegal, defamatory, or infringing content</li>
                    <li>Violate privacy rights or data protection laws</li>
                    <li>Promote hate speech or discrimination</li>
                    <li>Engage in phishing or fraudulent activities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">Platform Misuse</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Attempt to breach security or access controls</li>
                    <li>Interfere with the Service's operation</li>
                    <li>Reverse engineer or copy our software</li>
                    <li>Use automated tools to access the Service</li>
                    <li>Resell or redistribute the Service</li>
                    <li>Impersonate others or provide false information</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Payment Terms & Billing</h2>
            <div className="space-y-6">
              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Subscription Plans</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Canvix offers various subscription plans with different features and usage limits. By subscribing to a paid plan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>You agree to pay all fees associated with your chosen plan</li>
                  <li>Subscription fees are billed in advance on a recurring basis</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We may change our pricing with 30 days advance notice</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Cancellation & Refunds</h3>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>You may cancel your subscription at any time from your account settings</li>
                  <li>Cancellation takes effect at the end of your current billing period</li>
                  <li>You retain access to paid features until your subscription expires</li>
                  <li>Refunds are not provided for partial months or unused portions</li>
                  <li>We may offer refunds at our discretion for exceptional circumstances</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Intellectual Property Rights</h2>
            <div className="space-y-6">
              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Canvix Property</h3>
                <p className="text-lg leading-relaxed mb-4">
                  The Canvix platform, including its software, design, content, and trademarks, is owned by Canvix and protected by intellectual property laws. You may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>Copy, modify, or create derivative works of our platform</li>
                  <li>Use our trademarks or branding without permission</li>
                  <li>Attempt to extract or reverse engineer our software</li>
                  <li>Remove or alter any proprietary notices</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Your Content</h3>
                <p className="text-lg leading-relaxed mb-4">
                  You retain ownership of the email content, templates, and materials you create using Canvix. By using our Service:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>You grant us a license to host, process, and deliver your content</li>
                  <li>You represent that you have the right to use all content you upload</li>
                  <li>You're responsible for ensuring your content doesn't infringe others' rights</li>
                  <li>We may remove content that violates these Terms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Privacy & Data */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Privacy & Data Protection</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                Your privacy is important to us. Our collection and use of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#FF6F61]">Data Processing</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>We process your data to provide the Service</li>
                    <li>Your email templates and content remain yours</li>
                    <li>We implement security measures to protect your data</li>
                    <li>You can export your data at any time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#FF6F61]">Data Retention</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>We retain your data as long as your account is active</li>
                    <li>You may request data deletion upon account termination</li>
                    <li>Some data may be retained for legal compliance</li>
                    <li>Backups may persist for technical reasons</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Disclaimers & Limitations</h2>
            <div className="space-y-6">
              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Service Availability</h3>
                <p className="text-lg leading-relaxed mb-4">
                  While we strive to provide reliable service, we cannot guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>Uninterrupted access to the Service</li>
                  <li>Error-free operation at all times</li>
                  <li>Compatibility with all devices or browsers</li>
                  <li>Protection against all security threats</li>
                  <li>Backup or recovery of your data in all circumstances</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Limitation of Liability</h3>
                <p className="text-lg leading-relaxed mb-4">
                  To the maximum extent permitted by law, Canvix shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages resulting from your use of third-party services</li>
                  <li>Damages exceeding the amount you paid in the last 12 months</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Termination</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">By You</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>You may terminate your account at any time</li>
                    <li>Cancellation takes effect at the end of billing period</li>
                    <li>You can export your data before termination</li>
                    <li>Some provisions of these Terms survive termination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">By Canvix</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>We may terminate for violation of these Terms</li>
                    <li>We may suspend service for non-payment</li>
                    <li>We provide notice when reasonably possible</li>
                    <li>You may be entitled to a pro-rated refund</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Legal Provisions</h2>
            <div className="space-y-6">
              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Governing Law & Disputes</h3>
                <p className="text-lg leading-relaxed mb-4">
                  These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>Good faith negotiation as the first step</li>
                  <li>Binding arbitration if negotiation fails</li>
                  <li>Courts of [Your Jurisdiction] for injunctive relief</li>
                  <li>Class action waivers where legally permitted</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">General Provisions</h3>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                  <li>These Terms constitute the entire agreement between us</li>
                  <li>If any provision is invalid, the rest remains in effect</li>
                  <li>We may assign these Terms; you may not without our consent</li>
                  <li>No waiver of any term unless in writing</li>
                  <li>These Terms survive termination where applicable</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact & Updates */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Contact & Terms Updates</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-4 text-[#0F0F0F]">Questions About These Terms?</h3>
                <p className="text-[#666666] mb-6">
                  If you have questions about these Terms & Conditions or need clarification on any provisions, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:legal@canvix.com" 
                    className="bg-[#A259FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A259FF]/90 transition-colors text-center"
                  >
                    Contact Legal Team
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
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Terms Updates</h3>
                <p className="text-lg leading-relaxed mb-4">
                  We may update these Terms from time to time to reflect changes in our service or legal requirements:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                  <li>Material changes will be communicated via email or platform notification</li>
                  <li>Minor updates will be posted with a new "last updated" date</li>
                  <li>Continued use after updates constitutes acceptance of new Terms</li>
                  <li>You may terminate your account if you disagree with changes</li>
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