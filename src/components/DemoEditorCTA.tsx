'use client'
import Link from 'next/link'

export function DemoEditorCTA() {
  return (
    <section className="bg-[#0F0F0F] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#A259FF]/10 to-[#FF6F61]/10 rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Content */}
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center lg:text-left">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent"> Email Marketing?</span>
              </h2>
              
              {/* Trust Elements */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 text-[#CCCCCC] text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-[#A259FF] text-lg">✓</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#A259FF] text-lg">✓</span>
                  <span>Free plan available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#A259FF] text-lg">✓</span>
                  <span>Setup in minutes</span>
                </div>
              </div>
            </div>

            {/* Right Side - Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:w-1/3 lg:justify-end">
              <Link 
                href="/demo"
                className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition-opacity cursor-pointer text-center whitespace-nowrap"
              >
                Try Demo Editor
              </Link>
              <Link 
                href="/register"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#A259FF] font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                Start Free Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}