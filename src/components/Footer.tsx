'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F0F0F] border-t border-[#1E1E1E] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col justify-start">
            <div className="mt-16 mb-4 flex justify-center items-center">
              <Link href="/">
                <Image 
                  src="/canvix-logo-full-white.png" 
                  alt="Canvix Logo" 
                  width={280} 
                  height={70} 
                  className="h-18 w-auto object-contain bg-transparent cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'transparent' }}
                />
              </Link>
            </div>
            <p className="text-[#F5F5F5] text-lg font-bold text-center">
              Unlock your email potential.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="ml-20">
            <h3 className="text-[#F5F5F5] font-bold text-2xl mb-2">Company</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] mb-6"></div>
            <div className="space-y-3">
              <Link href="/about" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">About</Link>
              <Link href="/blog" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Blog</Link>
              <Link href="/academy" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Email Academy</Link>
              <Link href="/careers" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Careers</Link>
              <Link href="/contact" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Contact</Link>
              <Link href="/newsroom" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Newsroom</Link>
              <Link href="/resources" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Resources</Link>
            </div>
          </div>

          {/* Column 3: Platform */}
          <div className="ml-24">
            <h3 className="text-[#F5F5F5] font-bold text-2xl mb-2">Platform</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] mb-6"></div>
            <div className="space-y-3">
              <Link href="/customers" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Customers</Link>
              <Link href="/email-gallery" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Email Gallery</Link>
              <Link href="/email-testing" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Email Testing</Link>
              <Link href="/integrations" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Integrations</Link>
              <Link href="/pricing" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Pricing</Link>
              <Link href="/translations" className="block text-[#F5F5F5] font-bold hover:text-[#A259FF] transition-colors">Translations</Link>
            </div>
          </div>

          {/* Column 4: Social */}
          <div className="text-center">
            <h3 className="text-[#F5F5F5] font-bold text-2xl mb-2">Social</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#A259FF] to-[#FF6F61] mx-auto mb-6"></div>
            <div className="flex flex-col items-center space-y-4">
              {/* First row - 3 icons */}
              <div className="flex space-x-6">
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  <Linkedin size={36} className="w-9 h-9" />
                </Link>
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  <Facebook size={36} className="w-9 h-9" />
                </Link>
              </div>
              {/* Second row - 2 icons */}
              <div className="flex space-x-6">
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  <Instagram size={36} className="w-9 h-9" />
                </Link>
                <Link href="#" className="text-white hover:text-white/80 transition-colors">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9"
                  >
                    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm0 19c-.721 0-1.367-.207-1.979-.566.015-.085.033-.171.052-.256.021-.093.044-.186.069-.277.390-1.407 1.326-6.178 1.326-6.178s-.335-.671-.335-1.664c0-1.56.904-2.724 2.03-2.724.958 0 1.421.719 1.421 1.581 0 .963-.614 2.404-.931 3.74-.265 1.119.561 2.031 1.666 2.031 1.999 0 3.34-2.564 3.34-5.59 0-2.311-1.552-4.049-4.364-4.049-3.155 0-5.097 2.319-5.097 4.906 0 .895.263 1.513.681 1.999.193.23.22.32.15.58-.052.19-.166.659-.215.843-.064.24-.26.326-.477.237-1.33-.543-1.955-2.003-1.955-3.639 0-2.683 2.277-5.883 6.801-5.883 3.629 0 6.016 2.616 6.016 5.415 0 3.703-2.058 6.448-5.078 6.448-.944 0-1.833-.53-2.138-1.15 0 0-.514 2.109-.617 2.56-.181.709-.535 1.291-.888 1.787z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-[#F5F5F5] mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[#F5F5F5] text-sm">
            © {currentYear} Canvix. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link href="/accessibility" className="text-[#F5F5F5] hover:text-[#A259FF] transition-colors">
              Accessibility
            </Link>
            <Link href="/privacy" className="text-[#F5F5F5] hover:text-[#A259FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/security" className="text-[#F5F5F5] hover:text-[#A259FF] transition-colors">
              Security
            </Link>
            <Link href="/terms" className="text-[#F5F5F5] hover:text-[#A259FF] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}