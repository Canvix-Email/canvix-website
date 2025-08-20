import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-[#F5F5F5]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
              Accessibility
            </span>
          </h1>
          <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
            At Canvix, we&apos;re committed to making our platform accessible to everyone. Learn about our accessibility features and ongoing efforts.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Our Commitment */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Our Commitment</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-4">
                Canvix is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that accessibility is not just about compliance—it&apos;s about creating an inclusive environment where everyone can unlock their email potential with our platform.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#93C5FD]">Keyboard Navigation</h3>
                <p className="text-[#F5F5F5]/80">
                  Full keyboard accessibility with logical tab order and visible focus indicators throughout the email builder.
                </p>
              </div>
              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#93C5FD]">Screen Reader Support</h3>
                <p className="text-[#F5F5F5]/80">
                  Semantic HTML structure and ARIA labels to ensure compatibility with screen readers and assistive technologies.
                </p>
              </div>
              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#93C5FD]">High Contrast Mode</h3>
                <p className="text-[#F5F5F5]/80">
                  Enhanced color contrast ratios and support for high contrast display modes for better visibility.
                </p>
              </div>
              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#93C5FD]">Scalable Text</h3>
                <p className="text-[#F5F5F5]/80">
                  Responsive design that supports browser zoom up to 200% without loss of functionality or content.
                </p>
              </div>
            </div>
          </section>

          {/* Standards Compliance */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Standards & Compliance</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-4">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our development team regularly audits our platform to ensure we meet these accessibility requirements.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80">
                <li>WCAG 2.1 Level AA compliance</li>
                <li>Section 508 standards adherence</li>
                <li>Regular accessibility audits and testing</li>
                <li>Ongoing user feedback integration</li>
              </ul>
            </div>
          </section>

          {/* Email Accessibility */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Creating Accessible Emails</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                Canvix helps you create emails that are accessible to all recipients. Our platform includes features and guidance to ensure your email campaigns reach everyone effectively.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#FF6F61]">Built-in Features</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Alt text suggestions for images</li>
                    <li>Color contrast checking</li>
                    <li>Semantic HTML structure</li>
                    <li>Accessible table layouts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#FF6F61]">Best Practices</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Clear heading hierarchy</li>
                    <li>Descriptive link text</li>
                    <li>Sufficient color contrast</li>
                    <li>Plain text alternatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Feedback */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">We Want Your Feedback</h2>
            <div className="bg-[#0F0F0F] border-2 border-[#A259FF] rounded-lg p-8">
              <p className="text-[#F5F5F5] text-lg leading-relaxed mb-4">
                Your feedback helps us improve accessibility for everyone. If you encounter any accessibility barriers while using Canvix, please let us know.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:accessibility@canvix.com" 
                  className="bg-[#A259FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A259FF]/90 transition-colors text-center"
                >
                  Contact Accessibility Team
                </a>
                <a 
                  href="mailto:support@canvix.com" 
                  className="bg-[#0F0F0F] border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  General Support
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}