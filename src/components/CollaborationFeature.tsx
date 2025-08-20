'use client'
import Link from 'next/link'
import { useState } from 'react'

// Integrated Email Journey Component adapted for white background
function EmailJourneyIntegrated() {
  const [activeStep, setActiveStep] = useState(0)

  const journeySteps = [
    {
      id: 'inspire',
      title: 'Inspire',
      subtitle: 'Find Your Starting Point',
      description: 'Get inspired with our template library or start with a blank canvas. Browse industry-specific designs and best practices to kickstart your creativity.',
      icon: '💡',
      color: 'from-[#A259FF] to-[#8B47E8]',
      features: ['Template inspiration gallery', 'Blank canvas option', 'Industry best practices']
    },
    {
      id: 'build',
      title: 'Build',
      subtitle: 'Bring Ideas to Life',
      description: 'Use our intuitive drag-and-drop editor to customize every element. No coding required – just drag, drop, and design with professional-grade tools.',
      icon: '🎨',
      color: 'from-[#8B47E8] to-[#FF6F61]',
      features: ['Drag-and-drop editor', 'Real-time preview', 'Brand asset library']
    },
    {
      id: 'optimize',
      title: 'Optimize',
      subtitle: 'AI-Powered Enhancement',
      description: 'Let AI help perfect your email with smart suggestions for copy, layout, and engagement. Get recommendations based on industry best practices.',
      icon: '🤖',
      color: 'from-[#FF6F61] to-[#FF8A50]',
      features: ['AI copy optimization', 'Layout suggestions', 'Engagement predictions']
    },
    {
      id: 'collaborate',
      title: 'Collaborate',
      subtitle: 'Review & Approve',
      description: 'Enable customizable collaboration workflows. From simple feedback to complex approval chains with QA – scale to your team\'s needs.',
      icon: '👥',
      color: 'from-[#FF8A50] to-[#A259FF]',
      features: ['Flexible approval workflows', 'Comment & feedback system', 'QA validation steps']
    },
    {
      id: 'export',
      title: 'Export',
      subtitle: 'Deploy Anywhere',
      description: 'Export clean, compatible HTML that works with any email platform. One-click integration with your favorite ESP.',
      icon: '🚀',
      color: 'from-[#A259FF] to-[#FF6F61]',
      features: ['Universal HTML export', 'ESP integrations', 'Mobile-optimized code']
    },
    {
      id: 'analyze',
      title: 'Analyze',
      subtitle: 'Learn & Improve',
      description: 'Track performance metrics and get insights to improve future campaigns. Data-driven email marketing made simple.',
      icon: '📈',
      color: 'from-[#FF6F61] to-[#A259FF]',
      features: ['Performance tracking', 'Engagement analytics', 'Improvement recommendations']
    }
  ]

  return (
    <div>
      {/* Section Header */}
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-bold text-[#0F0F0F] mb-8">
          From Idea to 
          <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent"> Inbox</span>
        </h3>
        <p className="text-[#666666] text-xl leading-relaxed max-w-2xl mx-auto">
          Follow the complete email journey with Canvix. Every step is designed to help you create, 
          collaborate, and deliver emails that drive results.
        </p>
      </div>

      {/* Journey Steps Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {journeySteps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(index)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
              activeStep === index
                ? 'bg-gradient-to-r from-[#A259FF] to-[#FF6F61] text-white'
                : 'bg-[#F8F9FA] text-[#666666] hover:text-[#0F0F0F] border border-[#E5E7EB]'
            }`}
          >
            <span className="text-lg">{step.icon}</span>
            <span className="font-semibold">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Active Step Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Step Details */}
        <div>
          <div className="flex items-center space-x-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-r ${journeySteps[activeStep].color} rounded-full flex items-center justify-center text-2xl`}>
              {journeySteps[activeStep].icon}
            </div>
            <div>
              <h4 className="text-3xl font-bold text-[#0F0F0F]">
                {journeySteps[activeStep].title}
              </h4>
              <p className="text-[#A259FF] font-semibold">
                {journeySteps[activeStep].subtitle}
              </p>
            </div>
          </div>

          <p className="text-[#666666] text-lg leading-relaxed mb-8">
            {journeySteps[activeStep].description}
          </p>

          {/* Features List */}
          <div className="space-y-3">
            {journeySteps[activeStep].features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#A259FF] rounded-full"></div>
                <span className="text-[#0F0F0F] font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Visual Representation */}
        <div className="relative">
          <div className="bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg p-8">
            {/* Step-specific visual mockup */}
            {activeStep === 0 && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h5 className="text-[#0F0F0F] font-semibold mb-2">Get Inspired</h5>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 text-center">
                    <div className="w-full h-16 bg-gradient-to-br from-[#A259FF]/20 to-[#FF6F61]/20 rounded mb-2 flex items-center justify-center">
                      <span className="text-lg">📧</span>
                    </div>
                    <span className="text-[#0F0F0F] text-xs">Newsletter</span>
                  </div>
                  <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 text-center">
                    <div className="w-full h-16 bg-gradient-to-br from-[#FF6F61]/20 to-[#A259FF]/20 rounded mb-2 flex items-center justify-center">
                      <span className="text-lg">🛍️</span>
                    </div>
                    <span className="text-[#0F0F0F] text-xs">Promo</span>
                  </div>
                  <div className="bg-white border border-[#A259FF] rounded-lg p-3 text-center">
                    <div className="w-full h-16 bg-gradient-to-br from-[#A259FF]/20 to-[#FF6F61]/20 rounded mb-2 flex items-center justify-center">
                      <span className="text-lg">📄</span>
                    </div>
                    <span className="text-[#0F0F0F] text-xs">Blank</span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <span className="text-[#666666] text-xs">Browse 50+ templates by industry</span>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h5 className="text-[#0F0F0F] font-semibold">Drag & Drop Interface</h5>
                </div>
                <div className="grid grid-cols-3 gap-3 h-32">
                  <div className="space-y-2">
                    <div className="h-6 bg-[#A259FF] rounded opacity-60"></div>
                    <div className="h-6 bg-[#FF6F61] rounded opacity-60"></div>
                    <div className="h-6 bg-[#E5E7EB] rounded"></div>
                  </div>
                  <div className="bg-white rounded p-2 border border-[#E5E7EB]">
                    <div className="h-3 bg-[#A259FF] rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-[#E5E7EB] rounded"></div>
                    <div className="h-4 bg-[#E5E7EB] rounded"></div>
                    <div className="h-4 bg-[#E5E7EB] rounded"></div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h5 className="text-[#0F0F0F] font-semibold">AI Optimization</h5>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border-l-4 border-[#A259FF]">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">🤖</span>
                      <span className="text-[#A259FF] text-sm font-semibold">AI Suggestion</span>
                    </div>
                    <span className="text-[#0F0F0F] text-sm">"Try 'Unlock 50% savings' instead of 'Save money' for better engagement"</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-[#FF6F61]">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">📊</span>
                      <span className="text-[#FF6F61] text-sm font-semibold">Layout Tip</span>
                    </div>
                    <span className="text-[#0F0F0F] text-sm">"Move CTA button above the fold for 23% higher click rates"</span>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h5 className="text-[#0F0F0F] font-semibold">Collaboration Workflow</h5>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-[#22C55E]/20 rounded">
                    <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-[#0F0F0F] text-sm">Content Review</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-[#A259FF]/20 rounded">
                    <div className="w-6 h-6 bg-[#A259FF] rounded-full flex items-center justify-center text-white text-xs">2</div>
                    <span className="text-[#0F0F0F] text-sm">Legal Approval</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-[#E5E7EB] rounded">
                    <div className="w-6 h-6 bg-[#999] rounded-full flex items-center justify-center text-white text-xs">3</div>
                    <span className="text-[#666666] text-sm">QA Validation</span>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-[#666666] text-xs">Customizable approval workflow</span>
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h5 className="text-[#0F0F0F] font-semibold">Export & Deploy</h5>
                </div>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center justify-between border border-[#E5E7EB]">
                    <span className="text-[#0F0F0F] text-sm">Clean HTML Export</span>
                    <span className="text-[#22C55E] text-xs">✓ Ready</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#A259FF]/20 rounded p-2 text-center">
                      <span className="text-[#0F0F0F] text-xs">Mailchimp</span>
                    </div>
                    <div className="bg-[#FF6F61]/20 rounded p-2 text-center">
                      <span className="text-[#0F0F0F] text-xs">Klaviyo</span>
                    </div>
                    <div className="bg-[#A259FF]/20 rounded p-2 text-center">
                      <span className="text-[#0F0F0F] text-xs">SendGrid</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 5 && (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <h5 className="text-[#0F0F0F] font-semibold">Performance Analytics</h5>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded p-3 text-center border border-[#E5E7EB]">
                      <div className="text-[#22C55E] text-lg font-bold">24%</div>
                      <div className="text-[#666666] text-xs">Open Rate</div>
                    </div>
                    <div className="bg-white rounded p-3 text-center border border-[#E5E7EB]">
                      <div className="text-[#A259FF] text-lg font-bold">8.2%</div>
                      <div className="text-[#666666] text-xs">Click Rate</div>
                    </div>
                  </div>
                  <div className="h-16 bg-white rounded flex items-end justify-center space-x-1 p-2 border border-[#E5E7EB]">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-[#A259FF] to-[#FF6F61] rounded-sm w-3"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Journey Navigation */}
      <div className="flex justify-center mt-16">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="bg-[#F8F9FA] border border-[#E5E7EB] text-[#0F0F0F] px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:bg-[#E5E7EB] transition-colors"
          >
            ← Previous
          </button>
          <span className="text-[#666666] text-sm">
            {activeStep + 1} of {journeySteps.length}
          </span>
          <button
            onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
            disabled={activeStep === journeySteps.length - 1}
            className="bg-[#F8F9FA] border border-[#E5E7EB] text-[#0F0F0F] px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:bg-[#E5E7EB] transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export function CollaborationFeature() {
  return (
    <section className="py-20 px-0">
      <div className="bg-white rounded-3xl py-32 px-4 sm:px-6 lg:px-8 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div>
            {/* Feature Category Label */}
            <div className="text-[#A259FF] text-sm font-semibold tracking-wider uppercase mb-4">
              Collaborate + Streamline
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F0F0F] mb-8">
              End the Email
              <br />
              <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
                Assembly Line
              </span>
            </h2>
            
            <p className="text-[#666666] text-xl leading-relaxed mb-12">
              Stop juggling Slack messages, scattered Google Docs, and endless email threads. 
              Centralize your entire email creation process with intelligent workflows that give your team more time for strategy.
            </p>

            {/* Key Feature Groups */}
            <div className="space-y-8 mb-12">
              {/* Centralized Collaboration */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#0F0F0F] text-lg font-semibold mb-2">Centralized Communication</h3>
                  <p className="text-[#666666] leading-relaxed">Real-time feedback, comments, and approvals happen directly on your emails. No more hunting through Slack threads or lost Google Docs.</p>
                </div>
              </div>
              
              {/* Custom Workflows */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6F61] to-[#A259FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#0F0F0F] text-lg font-semibold mb-2">Custom Approval Workflows</h3>
                  <p className="text-[#666666] leading-relaxed">Design flexible approval chains that match your team's needs. From simple reviews to complex compliance processes with legal and brand sign-offs.</p>
                </div>
              </div>
              
              {/* User Roles & Permissions */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#0F0F0F] text-lg font-semibold mb-2">Flexible User Roles & Permissions</h3>
                  <p className="text-[#666666] leading-relaxed">Invite unlimited collaborators for feedback and comments. Builder licenses for email creation. Designer licenses for Figma plugin access and asset management.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link 
              href="/demo"
              className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg text-lg transition-opacity cursor-pointer inline-block"
            >
              See Workflows in Action
            </Link>
          </div>

          {/* Right Side - Workflow Visual */}
          <div className="relative h-[700px]">
            {/* Main workflow diagram */}
            <div className="absolute top-0 left-0 w-3/4 h-2/5 bg-[#F8F9FA] border-2 border-[#E5E7EB] rounded-lg p-4 shadow-sm">
              <div className="text-[#A259FF] text-sm font-semibold mb-3">WORKFLOW PIPELINE</div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-xs">✓</div>
                  <span className="text-[#0F0F0F] text-sm">Content Review</span>
                  <span className="text-[#22C55E] text-xs">Complete</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-[#A259FF] rounded-full flex items-center justify-center text-white text-xs">2</div>
                  <span className="text-[#0F0F0F] text-sm">Legal Approval</span>
                  <span className="text-[#A259FF] text-xs">In Progress</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-[#E5E7EB] rounded-full flex items-center justify-center text-[#666666] text-xs">3</div>
                  <span className="text-[#666666] text-sm">Brand Sign-off</span>
                  <span className="text-[#666666] text-xs">Pending</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-[#E5E7EB] rounded-full flex items-center justify-center text-[#666666] text-xs">4</div>
                  <span className="text-[#666666] text-sm">Final Export</span>
                  <span className="text-[#666666] text-xs">Queued</span>
                </div>
              </div>
            </div>
            
            {/* Comments/feedback panel */}
            <div className="absolute top-8 right-0 w-2/5 h-1/2 bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-md">
              <div className="text-[#FF6F61] text-sm font-semibold mb-3">TEAM FEEDBACK</div>
              <div className="space-y-3">
                <div className="bg-[#F8F9FA] rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-[#A259FF] rounded-full"></div>
                    <span className="text-[#0F0F0F] text-xs font-semibold">Sarah (Legal)</span>
                  </div>
                  <p className="text-[#666666] text-xs">"Update disclaimer text in footer to match new policy"</p>
                </div>
                <div className="bg-[#F8F9FA] rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-[#FF6F61] rounded-full"></div>
                    <span className="text-[#0F0F0F] text-xs font-semibold">Mike (Design)</span>
                  </div>
                  <p className="text-[#666666] text-xs">"CTA button looks great! ✅"</p>
                </div>
                <div className="bg-[#A259FF]/10 rounded-lg p-3 border border-[#A259FF]/20">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-4 h-4 bg-[#22C55E] rounded-full"></div>
                    <span className="text-[#0F0F0F] text-xs font-semibold">You</span>
                  </div>
                  <p className="text-[#0F0F0F] text-xs font-medium">"Updated! Ready for final review 🚀"</p>
                </div>
              </div>
            </div>
            
            {/* Integration connectors */}
            <div className="absolute bottom-1/4 left-0 w-2/5 h-1/4 bg-[#F8F9FA] border border-[#E5E7EB] rounded-lg p-4">
              <div className="text-[#A259FF] text-sm font-semibold mb-3">INTEGRATIONS</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 bg-white rounded p-2">
                  <div className="w-4 h-4 bg-[#4A154B] rounded"></div>
                  <span className="text-[#0F0F0F] text-xs">Slack</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded p-2">
                  <div className="w-4 h-4 bg-[#F24E1E] rounded"></div>
                  <span className="text-[#0F0F0F] text-xs">Figma</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded p-2">
                  <div className="w-4 h-4 bg-[#273347] rounded"></div>
                  <span className="text-[#0F0F0F] text-xs">Asana</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded p-2">
                  <div className="w-4 h-4 bg-[#FFE01B] rounded"></div>
                  <span className="text-[#0F0F0F] text-xs">Marketo</span>
                </div>
              </div>
            </div>
            
            {/* Before vs After comparison */}
            <div className="absolute bottom-0 right-8 w-1/2 h-1/3 bg-white border border-[#E5E7EB] rounded-lg p-4 shadow-sm">
              <div className="text-[#FF6F61] text-sm font-semibold mb-3">PRODUCTIVITY BOOST</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#666666] text-xs">Email Creation Time</span>
                    <span className="text-[#22C55E] text-xs font-semibold">-75%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div className="bg-[#22C55E] h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#666666] text-xs">Approval Cycles</span>
                    <span className="text-[#A259FF] text-xs font-semibold">-60%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div className="bg-[#A259FF] h-2 rounded-full w-2/5"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[#666666] text-xs">Tool Switching</span>
                    <span className="text-[#FF6F61] text-xs font-semibold">-90%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2">
                    <div className="bg-[#FF6F61] h-2 rounded-full w-1/10"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team avatars showing collaboration */}
            <div className="absolute top-1/3 left-1/3 w-16 h-12 bg-white border border-[#E5E7EB] rounded-lg p-2 shadow-sm">
              <div className="text-[#666666] text-xs mb-1">Active</div>
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-[#A259FF] rounded-full border border-white"></div>
                <div className="w-4 h-4 bg-[#FF6F61] rounded-full border border-white"></div>
                <div className="w-4 h-4 bg-[#22C55E] rounded-full border border-white"></div>
                <div className="w-4 h-4 bg-[#666666] rounded-full border border-white flex items-center justify-center">
                  <span className="text-white text-xs">+</span>
                </div>
              </div>
            </div>
            
            {/* Notification indicator */}
            <div className="absolute top-16 right-1/4 w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-sm">✓</span>
            </div>
          </div>
        </div>
        
        {/* From Idea to Inbox Journey - Complete Interactive Version */}
        <div className="mt-48 mb-16">
          <EmailJourneyIntegrated />
        </div>
      </div>
    </div>
    </section>
  )
}