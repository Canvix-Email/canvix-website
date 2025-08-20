'use client'
import Link from 'next/link'

export function DragDropFeature() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image Collage */}
          <div className="relative h-[700px]">
            {/* Large main editor mockup */}
            <div className="absolute top-0 left-0 w-3/4 h-2/5 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-xl">
              <div className="bg-[#A259FF]/10 rounded h-full flex items-center justify-center">
                <span className="text-[#A259FF] text-sm font-medium">Drag & Drop Editor</span>
              </div>
            </div>
            
            {/* Mobile preview mockup */}
            <div className="absolute top-8 right-0 w-1/3 h-1/2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg">
              <div className="bg-white rounded-md h-full p-2 space-y-2">
                <div className="h-3 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                <div className="h-12 bg-[#FF6F61]/20 rounded"></div>
                <div className="h-6 bg-[#A259FF] rounded w-2/3 mx-auto"></div>
              </div>
              <div className="absolute -top-1 -right-1 text-xs bg-[#22C55E] text-white px-2 py-1 rounded-full">📱</div>
            </div>
            
            {/* Email template preview */}
            <div className="absolute bottom-8 left-8 w-1/2 h-1/3 bg-white border border-white/30 rounded-lg p-4 shadow-md">
              <div className="space-y-2">
                <div className="h-4 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded"></div>
                <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                <div className="h-2 bg-gray-300 rounded w-3/5"></div>
                <div className="h-16 bg-[#A259FF]/10 rounded border border-[#A259FF]/20"></div>
                <div className="h-6 bg-[#FF6F61] rounded w-1/3 mx-auto"></div>
              </div>
            </div>
            
            {/* Component library preview */}
            <div className="absolute bottom-0 right-4 w-1/3 h-1/4 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-3">
              <div className="text-[#A259FF] text-xs font-semibold mb-2">COMPONENTS</div>
              <div className="space-y-1">
                <div className="h-4 bg-gray-200 rounded flex items-center px-2">
                  <span className="text-gray-600 text-xs">Header</span>
                </div>
                <div className="h-4 bg-gray-200 rounded flex items-center px-2">
                  <span className="text-gray-600 text-xs">Hero</span>
                </div>
                <div className="h-4 bg-[#A259FF]/20 rounded flex items-center px-2">
                  <span className="text-[#A259FF] text-xs">CTA Block</span>
                </div>
              </div>
            </div>
            
            {/* Brand color palette */}
            <div className="absolute top-1/2 left-2 w-16 h-20 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-2">
              <div className="text-gray-600 text-xs mb-2">Brand</div>
              <div className="space-y-1">
                <div className="h-3 bg-[#A259FF] rounded"></div>
                <div className="h-3 bg-[#FF6F61] rounded"></div>
                <div className="h-3 bg-[#22C55E] rounded"></div>
                <div className="h-3 bg-[#333] rounded"></div>
              </div>
            </div>
            
            {/* Analytics dashboard mockup */}
            <div className="absolute top-1/3 right-8 w-2/5 h-1/6 bg-white/90 backdrop-blur-sm border border-white/20 rounded-lg p-3">
              <div className="text-[#FF6F61] text-xs font-semibold mb-2">PERFORMANCE</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="text-[#22C55E] text-sm font-bold">24%</div>
                  <div className="text-gray-600 text-xs">Open</div>
                </div>
                <div className="text-center">
                  <div className="text-[#A259FF] text-sm font-bold">8.2%</div>
                  <div className="text-gray-600 text-xs">Click</div>
                </div>
                <div className="text-center">
                  <div className="text-[#FF6F61] text-sm font-bold">1.4%</div>
                  <div className="text-gray-600 text-xs">Conv</div>
                </div>
              </div>
            </div>
            
            {/* AI suggestions panel */}
            <div className="absolute bottom-1/4 right-0 w-1/3 h-1/5 bg-[#1E1E1E] border border-[#A259FF]/30 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg">🤖</span>
                <span className="text-[#A259FF] text-xs font-semibold">AI SUGGEST</span>
              </div>
              <div className="text-[#AAAAAA] text-xs leading-relaxed">
                "Try 'Save 50%' instead of 'Discount' for better engagement"
              </div>
            </div>
            
            {/* Template gallery preview */}
            <div className="absolute top-2/3 left-0 w-2/5 h-1/4 bg-[#1E1E1E] border border-[#333] rounded-lg p-3">
              <div className="text-[#FF6F61] text-xs font-semibold mb-2">TEMPLATES</div>
              <div className="grid grid-cols-3 gap-1">
                <div className="bg-white rounded aspect-square p-1">
                  <div className="h-2 bg-[#A259FF] rounded mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="bg-white rounded aspect-square p-1">
                  <div className="h-2 bg-[#FF6F61] rounded mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="bg-white rounded aspect-square p-1 opacity-60">
                  <div className="h-2 bg-[#22C55E] rounded mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded mb-1"></div>
                  <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            
            {/* Collaboration indicator */}
            <div className="absolute top-0 right-1/3 w-20 h-12 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-lg p-2">
              <div className="text-[#22C55E] text-xs font-semibold mb-1">TEAM</div>
              <div className="flex -space-x-1">
                <div className="w-4 h-4 bg-[#A259FF] rounded-full border border-white"></div>
                <div className="w-4 h-4 bg-[#FF6F61] rounded-full border border-white"></div>
                <div className="w-4 h-4 bg-[#22C55E] rounded-full border border-white"></div>
              </div>
            </div>
            
            {/* Device compatibility icons */}
            <div className="absolute bottom-0 left-2/3 w-16 h-16 bg-[#1E1E1E] border border-[#333] rounded-lg p-2">
              <div className="text-[#AAAAAA] text-xs mb-1">Preview</div>
              <div className="grid grid-cols-2 gap-1">
                <div className="text-[#A259FF] text-xs">📱</div>
                <div className="text-[#FF6F61] text-xs">💻</div>
                <div className="text-[#22C55E] text-xs">📧</div>
                <div className="text-[#A259FF] text-xs">@</div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute top-4 left-1/2 w-6 h-6 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xs">✨</span>
            </div>
            <div className="absolute bottom-4 left-1/4 w-4 h-4 bg-[#22C55E] rounded-full opacity-80"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#FF6F61] rounded-full opacity-60"></div>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#A259FF] rounded-full opacity-50"></div>
            <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#FF6F61] rounded-full opacity-40"></div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Feature Category Label */}
            <div className="text-[#93C5FD] text-sm font-semibold tracking-wider uppercase mb-4">
              Create + Control
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-8">
              Design Stunning Emails
              <br />
              <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
                in Minutes
              </span>
            </h2>
            
            <p className="text-[#AAAAAA] text-xl leading-relaxed mb-12">
              Our intuitive drag-and-drop editor gives you complete creative control without requiring technical skills. 
              Professional-grade design tools that make building stunning, on-brand emails effortless.
            </p>

            {/* Key Feature Groups */}
            <div className="space-y-8 mb-12">
              {/* Design & Responsiveness */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#F5F5F5] text-lg font-semibold mb-2">Intuitive Design Tools</h3>
                  <p className="text-[#AAAAAA] leading-relaxed">Drag-and-drop interface with pixel-perfect control and mobile-responsive designs that automatically adapt to any screen size.</p>
                </div>
              </div>
              
              {/* Governance & Compliance */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6F61] to-[#A259FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#F5F5F5] text-lg font-semibold mb-2">Brand Governance & Compliance</h3>
                  <p className="text-[#AAAAAA] leading-relaxed">Built-in brand guidelines, style consistency controls, and automatic compliance with accessibility standards and email regulations.</p>
                </div>
              </div>
              
              {/* Preview & Testing */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#F5F5F5] text-lg font-semibold mb-2">Real-Time Preview & Testing</h3>
                  <p className="text-[#AAAAAA] leading-relaxed">Instant preview across all major email clients with built-in testing tools to ensure perfect delivery and engagement.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link 
              href="/demo"
              className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg text-lg transition-opacity cursor-pointer inline-block"
            >
              Try the Editor Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}