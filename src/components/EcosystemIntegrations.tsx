'use client'
import Link from 'next/link'

export function EcosystemIntegrations() {
  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Feature Category Label */}
          <div className="text-[#93C5FD] text-sm font-semibold tracking-wider uppercase mb-4">
            Ecosystem & Integrations
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Connect Your
            <br />
            <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
              Entire Workflow
            </span>
          </h2>
          
          <p className="text-[#CBD5E1] text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Canvix connects seamlessly with your existing tools, creating a unified workflow that enhances 
            rather than replaces your current setup. Build emails that integrate with your entire tech stack.
          </p>
        </div>

        {/* Integration Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Design Tools */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Design Tools</h3>
            <p className="text-[#CBD5E1] leading-relaxed">Figma plugin, Adobe integration, brand asset sync</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="bg-white/10 text-[#CBD5E1] text-xs px-2 py-1 rounded-full">Figma</span>
              <span className="bg-white/10 text-[#CBD5E1] text-xs px-2 py-1 rounded-full">Adobe</span>
            </div>
          </div>
          
          {/* Communication */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#FF6F61] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Communication</h3>
            <p className="text-[#CBD5E1] leading-relaxed">Slack notifications, Teams integration, real-time updates</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="bg-white/10 text-[#CBD5E1] text-xs px-2 py-1 rounded-full">Slack</span>
              <span className="bg-white/10 text-[#CBD5E1] text-xs px-2 py-1 rounded-full">Teams</span>
            </div>
          </div>
          
          {/* Project Management */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Project Management</h3>
            <p className="text-[#CBD5E1] leading-relaxed">Asana sync, Monday.com, Trello workflow triggers</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="bg-white/10 text-[#CBD5E1] text-xs px-2 py-1 rounded-full">Asana</span>
              <span className="bg-white/10 text-[#CBD5E1] text-xs px-2 py-1 rounded-full">Monday.com</span>
            </div>
          </div>
          
          {/* Email Platforms */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#FF6F61] to-[#A259FF] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Email Platforms</h3>
            <p className="text-[#CBD5E1] leading-relaxed">Mailchimp, Klaviyo, SendGrid, Marketo, HubSpot</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="bg-white/10 text-[#CBD5E1] text-xs px-2 py-1 rounded-full">Mailchimp</span>
              <span className="bg-white/10 text-[#CBD5E1] text-xs px-2 py-1 rounded-full">Klaviyo</span>
            </div>
          </div>
        </div>

        {/* Integration Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-[#CBD5E1]">Native Integrations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-[#CBD5E1]">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">&lt; 5min</div>
              <div className="text-[#CBD5E1]">Setup Time</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/integrations"
              className="bg-white text-[#1E3A8A] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors cursor-pointer text-center"
            >
              View All Integrations
            </Link>
            <Link 
              href="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] font-bold px-8 py-4 rounded-lg text-lg transition-colors cursor-pointer text-center"
            >
              Try Integration Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}