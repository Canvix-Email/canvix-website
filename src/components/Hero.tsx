'use client'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="pt-32 pb-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Headline */}
            <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-8 text-[#F5F5F5]">
              Email Made
              <br />
              Easy
            </h1>
            
            {/* Subheader */}
            <p className="text-[#AAAAAA] text-xl md:text-2xl mb-8 leading-relaxed">
              Build beautiful, professional emails with no coding required. The complete platform that transforms how teams create, collaborate, and optimize email campaigns.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                href="/register"
                className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-md text-lg transition-opacity cursor-pointer text-center"
              >
                Get Started Free
              </Link>
              <Link 
                href="/demo"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] font-semibold px-8 py-4 rounded-md text-lg transition-colors cursor-pointer text-center"
              >
                Try Demo Editor
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-6 text-[#AAAAAA] text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Free plan available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#22C55E] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Abstract Geometric Design */}
          <div className="hidden lg:block relative ml-12">
            {/* Extending background that goes beyond container */}
            <div className="absolute inset-0 -right-[60vw] bg-gradient-to-r from-transparent via-[#A259FF]/15 to-[#FF6F61]/15"></div>
            
            {/* Email-Inspired Abstract Elements */}
            <div className="relative flex items-center justify-center h-[500px]">
              {/* Large envelope/document shape */}
              <div className="absolute w-32 h-24 bg-[#A259FF]/25 rounded-lg border-l-4 border-[#A259FF]/40 top-16 right-12 transform rotate-6"></div>
              
              {/* Medium email card */}
              <div className="absolute w-24 h-16 bg-[#FF6F61]/25 rounded border border-[#FF6F61]/40 top-32 left-8 transform -rotate-12">
                {/* Email lines mockup */}
                <div className="p-2 space-y-1">
                  <div className="h-1 bg-[#FF6F61]/50 rounded w-3/4"></div>
                  <div className="h-1 bg-[#FF6F61]/40 rounded w-1/2"></div>
                  <div className="h-1 bg-[#FF6F61]/35 rounded w-2/3"></div>
                </div>
              </div>
              
              {/* Small floating email icon */}
              <div className="absolute w-16 h-12 bg-[#A259FF]/30 rounded top-48 right-20 transform rotate-12">
                {/* Envelope fold effect */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-4 border-b-4 border-l-transparent border-b-[#A259FF]/50"></div>
              </div>
              
              {/* Large background document */}
              <div className="absolute w-40 h-56 bg-gradient-to-b from-[#A259FF]/20 to-[#FF6F61]/15 rounded-lg bottom-12 right-4 transform rotate-3">
                {/* Document content lines */}
                <div className="p-4 space-y-2 mt-4">
                  <div className="h-1 bg-[#A259FF]/35 rounded w-full"></div>
                  <div className="h-1 bg-[#A259FF]/30 rounded w-5/6"></div>
                  <div className="h-1 bg-[#FF6F61]/30 rounded w-4/5"></div>
                  <div className="h-1 bg-[#A259FF]/25 rounded w-3/4"></div>
                  <div className="h-1 bg-[#FF6F61]/25 rounded w-2/3"></div>
                </div>
              </div>
              
              {/* Tiny floating message bubbles */}
              <div className="absolute w-8 h-6 bg-[#FF6F61]/35 rounded-full top-20 left-16 transform -rotate-6"></div>
              <div className="absolute w-6 h-4 bg-[#A259FF]/40 rounded-full bottom-32 left-4 transform rotate-15"></div>
              
              {/* Scattered dots representing pixels/data */}
              <div className="absolute top-24 right-32 w-2 h-2 bg-[#A259FF]/60 rounded-full"></div>
              <div className="absolute bottom-24 left-20 w-1 h-1 bg-[#FF6F61]/70 rounded-full"></div>
              <div className="absolute top-40 left-32 w-1 h-1 bg-[#A259FF]/50 rounded-full"></div>
              <div className="absolute bottom-40 right-16 w-2 h-2 bg-[#FF6F61]/55 rounded-full"></div>
              
              {/* Connecting lines between elements */}
              <div className="absolute top-28 left-24 w-16 h-px bg-gradient-to-r from-[#A259FF]/40 to-transparent transform rotate-45"></div>
              <div className="absolute bottom-28 right-28 w-12 h-px bg-gradient-to-r from-[#FF6F61]/35 to-transparent transform -rotate-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}