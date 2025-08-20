'use client'
import { useState } from 'react'
import Image from 'next/image'

export function Features() {
  const [activeTab, setActiveTab] = useState('design')

  const featureCategories = [
    {
      id: 'design',
      label: 'Design & Create',
      headline: 'Design emails your way',
      cards: [
        {
          title: 'Visual Drag & Drop Builder',
          description: 'Build and customize every element of your email message intuitively. Professional-grade design tools without the learning curve. Smart content blocks and layouts to accelerate your workflow.'
        },
        {
          title: 'Template Library & Customization',
          description: 'Start with professionally designed templates or create from scratch. Brand-consistent designs that adapt to your style. Mix templates with custom elements seamlessly.'
        }
      ],
      image: '/features-design.png' // We'll need to add this image
    },
    {
      id: 'intelligence',
      label: 'Intelligence & AI',
      headline: 'AI-powered email creation',
      cards: [
        {
          title: 'Smart Content Generation',
          description: 'AI-driven copy suggestions and content optimization. Generate compelling subject lines and email copy. Personalization recommendations based on your audience.'
        },
        {
          title: 'Design Intelligence',
          description: 'Automatic layout optimization and design suggestions. Smart color palette and typography recommendations. Real-time accessibility and deliverability insights.'
        }
      ],
      image: '/features-ai.png'
    },
    {
      id: 'connect',
      label: 'Connect & Deploy',
      headline: 'Seamless integrations and exports',
      cards: [
        {
          title: 'Universal Export Options',
          description: 'Export to any email platform with one click. Clean HTML code optimized for all major email clients. Multiple format options including PNG and PDF.'
        },
        {
          title: 'Platform Integrations',
          description: 'Direct connections to popular ESPs like Mailchimp, Klaviyo, and SendGrid. Real-time synchronization with your marketing tools. API access for custom workflows.'
        }
      ],
      image: '/features-integrations.png'
    },
    {
      id: 'optimize',
      label: 'Optimize & Scale',
      headline: 'Test, collaborate, and grow',
      cards: [
        {
          title: 'A/B Testing & Analytics',
          description: 'Built-in testing tools to optimize your campaigns. Performance tracking and engagement insights. Data-driven recommendations for better results.'
        },
        {
          title: 'Team Collaboration',
          description: 'Real-time collaboration with your team members. Brand guidelines and approval workflows. Version control and design system management.'
        }
      ],
      image: '/features-collaboration.png'
    }
  ]

  const activeCategory = featureCategories.find(cat => cat.id === activeTab)

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#0F0F0F] rounded-lg p-2 inline-flex">
            {featureCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-[#A259FF] to-[#FF6F61] text-white'
                    : 'text-[#AAAAAA] hover:text-[#F5F5F5]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content - Varied Layouts */}
        {activeCategory && (
          <>
            {/* Design & Create - Two Stacked Cards */}
            {activeTab === 'design' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-8">
                    {activeCategory.headline}
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    {activeCategory.cards.map((card, index) => (
                      <div 
                        key={index}
                        className="bg-[#0F0F0F] border border-[#333] rounded-lg p-6 hover:border-[#A259FF]/50 transition-colors"
                      >
                        <h3 className="text-xl font-semibold text-[#F5F5F5] mb-3">
                          {card.title}
                        </h3>
                        <p className="text-[#AAAAAA] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="bg-[#0F0F0F] border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white font-semibold px-8 py-4 rounded-md transition-colors cursor-pointer">
                    Get Started Free
                  </button>
                </div>

                <div className="lg:pl-8">
                  <div className="bg-[#0F0F0F] rounded-lg p-8 border border-[#333]">
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#A259FF]/20 to-[#FF6F61]/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-[#A259FF] rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">D</span>
                        </div>
                        <p className="text-[#AAAAAA] text-sm">Design & Create Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Intelligence & AI - Single Wide Card */}
            {activeTab === 'intelligence' && (
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] text-center mb-12">
                  {activeCategory.headline}
                </h2>
                
                <div className="bg-[#0F0F0F] border border-[#333] rounded-lg p-8 mb-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {activeCategory.cards.map((card, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-2xl font-semibold text-[#F5F5F5]">
                          {card.title}
                        </h3>
                        <p className="text-[#AAAAAA] leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-[#0F0F0F] border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white font-semibold px-8 py-4 rounded-md transition-colors cursor-pointer">
                    EXPERIENCE AI FEATURES
                  </button>
                </div>
              </div>
            )}

            {/* Connect & Deploy - Grid of 4 Blocks */}
            {activeTab === 'connect' && (
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] text-center mb-12">
                  {activeCategory.headline}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-[#0F0F0F] border border-[#333] rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-[#A259FF] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="text-[#F5F5F5] font-semibold mb-2">Export HTML</h4>
                    <p className="text-[#AAAAAA] text-sm">Clean, optimized code</p>
                  </div>
                  
                  <div className="bg-[#0F0F0F] border border-[#333] rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-[#FF6F61] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="text-[#F5F5F5] font-semibold mb-2">ESP Integration</h4>
                    <p className="text-[#AAAAAA] text-sm">Direct platform sync</p>
                  </div>
                  
                  <div className="bg-[#0F0F0F] border border-[#333] rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-[#A259FF] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="text-[#F5F5F5] font-semibold mb-2">API Access</h4>
                    <p className="text-[#AAAAAA] text-sm">Custom workflows</p>
                  </div>
                  
                  <div className="bg-[#0F0F0F] border border-[#333] rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-[#FF6F61] rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h4 className="text-[#F5F5F5] font-semibold mb-2">Multi-Format</h4>
                    <p className="text-[#AAAAAA] text-sm">PNG, PDF exports</p>
                  </div>
                </div>

                <div className="text-center">
                  <button className="bg-[#0F0F0F] border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white font-semibold px-8 py-4 rounded-md transition-colors cursor-pointer">
                    VIEW INTEGRATIONS
                  </button>
                </div>
              </div>
            )}

            {/* Optimize & Scale - Timeline Layout */}
            {activeTab === 'optimize' && (
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] text-center mb-12">
                  {activeCategory.headline}
                </h2>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#A259FF] to-[#FF6F61] h-full hidden md:block"></div>
                  
                  <div className="space-y-12">
                    {activeCategory.cards.map((card, index) => (
                      <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className="md:w-1/2 p-6">
                          <div className="bg-[#0F0F0F] border border-[#333] rounded-lg p-6">
                            <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-4">
                              {card.title}
                            </h3>
                            <p className="text-[#AAAAAA] leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="hidden md:block w-8 h-8 bg-[#FF6F61] rounded-full border-4 border-[#1E1E1E] z-10 relative"></div>
                        
                        <div className="md:w-1/2 p-6">
                          <div className="aspect-[16/10] bg-gradient-to-br from-[#A259FF]/10 to-[#FF6F61]/10 rounded-lg border border-[#333] flex items-center justify-center">
                            <span className="text-[#AAAAAA] text-sm">Feature Demo</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-12">
                  <button className="bg-[#0F0F0F] border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white font-semibold px-8 py-4 rounded-md transition-colors cursor-pointer">
                    Start Optimizing
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}