import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About 
            <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
              {' '}Canvix
            </span>
          </h1>
          <p className="text-xl text-[#AAAAAA] max-w-2xl mx-auto">
            Built by someone who lives email marketing every day and knows exactly what&apos;s broken with current tools.
          </p>
        </div>

        {/* The Problem Section */}
        <div className="mb-16">
          <div className="bg-[#1E1E1E] border border-[#333] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">The Problem We&apos;re Solving</h2>
            <p className="text-[#AAAAAA] text-lg leading-relaxed mb-4">
              After a decade in email marketing, I&apos;ve seen the same frustrations over and over. Even at major enterprise companies with sophisticated marketing automation platforms like Eloqua and Marketo, creating beautiful, on-brand emails is still unnecessarily complex.
            </p>
            <p className="text-[#AAAAAA] text-lg leading-relaxed mb-4">
              Teams either struggle with limited drag-and-drop editors that don&apos;t give them real control, or they need developers to hand-code every template from scratch. Recently, I applied for a role where the job requirement was literally &quot;must know how to code email templates from scratch&quot; – and that convinced me more than ever that we need a better solution.
            </p>
            <p className="text-[#AAAAAA] text-lg leading-relaxed">
              There had to be a middle ground: professional-grade design control without needing to be a developer.
            </p>
          </div>
        </div>

        {/* Founder Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            {/* Photo Placeholder */}
            <div className="bg-[#1E1E1E] border border-[#333] rounded-lg p-8 text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-[#A259FF]/20 to-[#FF6F61]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl text-[#AAAAAA]">👤</span>
              </div>
              <p className="text-[#AAAAAA] text-sm">Founder Photo Coming Soon</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">My Journey to Canvix</h2>
            <div className="space-y-4 text-[#AAAAAA] leading-relaxed">
              <p>
                I started my career in sales, but quickly realized my passion was in marketing and technology. I taught myself HTML and CSS, which opened the door to campaign operations and eventually email marketing leadership.
              </p>
              <p>
                Over the past decade, I&apos;ve built complex email nurture programs, managed deliverability for enterprise companies, and led teams that send millions of emails. I&apos;ve worked with platforms ranging from basic drag-and-drop editors to sophisticated enterprise automation tools.
              </p>
              <p>
                At one company, we were fortunate enough to have developers build us a custom email editor. It was incredible – but I knew that level of control shouldn&apos;t require a development team.
              </p>
              <p>
                As I advanced to Director of Email Marketing, I realized I could either keep complaining about the tools, or I could build the solution I wished existed.
              </p>
            </div>
          </div>
        </div>

        {/* The Vision Section */}
        <div className="mb-16">
          <div className="bg-[#1E1E1E] border border-[#333] rounded-lg p-8 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A259FF] to-[#FF6F61]"></div>
            
            <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">What Makes Canvix Different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#A259FF] mb-3">Built by Practitioners</h3>
                <p className="text-[#AAAAAA] leading-relaxed">
                  Every feature is designed by someone who actually uses email marketing tools daily. I know the pain points because I live them.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#FF6F61] mb-3">Real-World Tested</h3>
                <p className="text-[#AAAAAA] leading-relaxed">
                  Our approach comes from managing enterprise email programs, training teams, and solving actual workflow challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#A259FF] mb-3">Founder Accessibility</h3>
                <p className="text-[#AAAAAA] leading-relaxed">
                  As a lean, founder-led company, every feature request gets direct attention. Your feedback shapes the product.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#FF6F61] mb-3">Industry Insider Perspective</h3>
                <p className="text-[#AAAAAA] leading-relaxed">
                  I&apos;m currently implementing competitors&apos; tools in my day job. I know exactly what&apos;s missing and what needs to be better.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
              To give email marketers the professional-grade design control they need without requiring developer resources. 
              Beautiful, on-brand emails should be accessible to everyone.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#F5F5F5] mb-6">Ready to Transform Your Email Creation?</h2>
          <p className="text-[#AAAAAA] text-lg mb-8 max-w-2xl mx-auto">
            Join me in building the email platform we all wish existed. Your feedback directly shapes what we build next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo"
              className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg text-lg transition-opacity cursor-pointer text-center"
            >
              Try Demo Editor
            </Link>
            <Link 
              href="/contact"
              className="bg-[#0F0F0F] border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors cursor-pointer text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}