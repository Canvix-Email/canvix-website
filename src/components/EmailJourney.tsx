'use client'
import { useState } from 'react'

export function EmailJourney() {
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
      description: 'Enable customizable collaboration workflows. From simple feedback to complex approval chains with QA – scale to your team&apos;s needs.',
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
    <section className="bg-[#1E1E1E] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            From Idea to Inbox
          </h2>
          <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto">
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
                  : 'bg-[#0F0F0F] text-[#AAAAAA] hover:text-[#F5F5F5] border border-[#333]'
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
                <h3 className="text-3xl font-bold text-[#F5F5F5]">
                  {journeySteps[activeStep].title}
                </h3>
                <p className="text-[#A259FF] font-semibold">
                  {journeySteps[activeStep].subtitle}
                </p>
              </div>
            </div>

            <p className="text-[#AAAAAA] text-lg leading-relaxed mb-8">
              {journeySteps[activeStep].description}
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {journeySteps[activeStep].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#A259FF] rounded-full"></div>
                  <span className="text-[#F5F5F5] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Representation */}
          <div className="relative">
            <div className="bg-[#0F0F0F] border border-[#333] rounded-lg p-8">
              {/* Step-specific visual mockup */}
              {activeStep === 0 && (
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <h4 className="text-[#F5F5F5] font-semibold mb-2">Get Inspired</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-center">
                      <div className="w-full h-16 bg-gradient-to-br from-[#A259FF]/20 to-[#FF6F61]/20 rounded mb-2 flex items-center justify-center">
                        <span className="text-lg">📧</span>
                      </div>
                      <span className="text-[#F5F5F5] text-xs">Newsletter</span>
                    </div>
                    <div className="bg-[#1E1E1E] border border-[#333] rounded-lg p-3 text-center">
                      <div className="w-full h-16 bg-gradient-to-br from-[#FF6F61]/20 to-[#A259FF]/20 rounded mb-2 flex items-center justify-center">
                        <span className="text-lg">🛍️</span>
                      </div>
                      <span className="text-[#F5F5F5] text-xs">Promo</span>
                    </div>
                    <div className="bg-[#1E1E1E] border border-[#A259FF] rounded-lg p-3 text-center">
                      <div className="w-full h-16 bg-gradient-to-br from-[#A259FF]/20 to-[#FF6F61]/20 rounded mb-2 flex items-center justify-center">
                        <span className="text-lg">📄</span>
                      </div>
                      <span className="text-[#F5F5F5] text-xs">Blank</span>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-[#AAAAAA] text-xs">Browse 50+ templates by industry</span>
                  </div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h4 className="text-[#F5F5F5] font-semibold">Drag & Drop Interface</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3 h-32">
                    <div className="space-y-2">
                      <div className="h-6 bg-[#A259FF] rounded opacity-60"></div>
                      <div className="h-6 bg-[#FF6F61] rounded opacity-60"></div>
                      <div className="h-6 bg-[#333] rounded"></div>
                    </div>
                    <div className="bg-white rounded p-2 border">
                      <div className="h-3 bg-[#A259FF] rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-[#333] rounded"></div>
                      <div className="h-4 bg-[#333] rounded"></div>
                      <div className="h-4 bg-[#333] rounded"></div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h4 className="text-[#F5F5F5] font-semibold">AI Optimization</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#1E1E1E] rounded-lg p-3 border-l-4 border-[#A259FF]">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg">🤖</span>
                        <span className="text-[#A259FF] text-sm font-semibold">AI Suggestion</span>
                      </div>
                      <span className="text-[#F5F5F5] text-sm">&quot;Try &apos;Unlock 50% savings&apos; instead of &apos;Save money&apos; for better engagement&quot;</span>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-lg p-3 border-l-4 border-[#FF6F61]">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg">📊</span>
                        <span className="text-[#FF6F61] text-sm font-semibold">Layout Tip</span>
                      </div>
                      <span className="text-[#F5F5F5] text-sm">&quot;Move CTA button above the fold for 23% higher click rates&quot;</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h4 className="text-[#F5F5F5] font-semibold">Collaboration Workflow</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-2 bg-[#22C55E]/20 rounded">
                      <div className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-xs">✓</div>
                      <span className="text-[#F5F5F5] text-sm">Content Review</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-[#A259FF]/20 rounded">
                      <div className="w-6 h-6 bg-[#A259FF] rounded-full flex items-center justify-center text-white text-xs">2</div>
                      <span className="text-[#F5F5F5] text-sm">Legal Approval</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 bg-[#333] rounded">
                      <div className="w-6 h-6 bg-[#666] rounded-full flex items-center justify-center text-white text-xs">3</div>
                      <span className="text-[#AAAAAA] text-sm">QA Validation</span>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <span className="text-[#AAAAAA] text-xs">Customizable approval workflow</span>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h4 className="text-[#F5F5F5] font-semibold">Export & Deploy</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-[#1E1E1E] rounded-lg p-3 flex items-center justify-between">
                      <span className="text-[#F5F5F5] text-sm">Clean HTML Export</span>
                      <span className="text-[#22C55E] text-xs">✓ Ready</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-[#A259FF]/20 rounded p-2 text-center">
                        <span className="text-[#F5F5F5] text-xs">Mailchimp</span>
                      </div>
                      <div className="bg-[#FF6F61]/20 rounded p-2 text-center">
                        <span className="text-[#F5F5F5] text-xs">Klaviyo</span>
                      </div>
                      <div className="bg-[#A259FF]/20 rounded p-2 text-center">
                        <span className="text-[#F5F5F5] text-xs">SendGrid</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 5 && (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <h4 className="text-[#F5F5F5] font-semibold">Performance Analytics</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#1E1E1E] rounded p-3 text-center">
                        <div className="text-[#22C55E] text-lg font-bold">24%</div>
                        <div className="text-[#AAAAAA] text-xs">Open Rate</div>
                      </div>
                      <div className="bg-[#1E1E1E] rounded p-3 text-center">
                        <div className="text-[#A259FF] text-lg font-bold">8.2%</div>
                        <div className="text-[#AAAAAA] text-xs">Click Rate</div>
                      </div>
                    </div>
                    <div className="h-16 bg-[#1E1E1E] rounded flex items-end justify-center space-x-1 p-2">
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
              className="bg-[#0F0F0F] border border-[#333] text-[#F5F5F5] px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              ← Previous
            </button>
            <span className="text-[#AAAAAA] text-sm">
              {activeStep + 1} of {journeySteps.length}
            </span>
            <button
              onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
              disabled={activeStep === journeySteps.length - 1}
              className="bg-[#0F0F0F] border border-[#333] text-[#F5F5F5] px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}