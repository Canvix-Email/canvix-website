'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Globe } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('English (US)')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'en-AU', name: 'English (AU & NZ)' },
    { code: 'fr-FR', name: 'Français' },
    { code: 'de-DE', name: 'Deutsch' },
    { code: 'ja-JP', name: '日本語' },
    { code: 'es-LA', name: 'Español (América Latina)' },
    { code: 'es-ES', name: 'Español (Europa)' },
    { code: 'it-IT', name: 'Italiano' },
    { code: 'nl-NL', name: 'Nederlands' },
    { code: 'pt-BR', name: 'Português (Brasil)' },
    { code: 'zh-CN', name: '中文 (简体)' },
    { code: 'ko-KR', name: '한국어' },
    { code: 'ru-RU', name: 'Русский' },
    { code: 'hi-IN', name: 'हिन्दी' },
    { code: 'ar-SA', name: 'العربية' }
  ]

  const handleLanguageSelect = (language: any) => {
    setSelectedLanguage(language.name)
    setIsLanguageOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false)
      }
    }

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageOpen])

  return (
    <header className="sticky top-0 z-50 bg-[#1E3A8A] backdrop-blur-sm border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/canvix-logo-full-white.png" 
                alt="Canvix Logo" 
                width={152} 
                height={38}
                className="h-[38px] w-auto object-contain bg-transparent"
                style={{ backgroundColor: 'transparent' }}
              />
            </Link>
          </div>
          
          {/* Left Navigation */}
          <nav className="hidden md:flex space-x-8 mt-1">
            {/* Products with Hover Menu */}
            <div className="relative group">
              <Link 
                href="/products" 
                className="text-white hover:text-[#A259FF] transition-colors font-bold cursor-pointer"
              >
                Products
              </Link>
              
              {/* Hover Menu */}
              <div className="absolute top-full left-0 w-[500px] bg-[#1E1E1E] border border-[#333] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mt-2">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Left Column - Core Products */}
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold mb-4 text-sm uppercase tracking-wider">
                        Core Platform
                      </h3>
                      <div className="space-y-3">
                        <Link 
                          href="/products/email-builder"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#A259FF] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">E</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                Email Builder
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Drag-and-drop email editor
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        <Link 
                          href="/products/templates"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#FF6F61] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">T</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                Templates
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Professional email designs
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        <Link 
                          href="/products/integrations"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#A259FF] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">I</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                Integrations
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Connect your favorite tools
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Right Column - Featured Product */}
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold mb-4 text-sm uppercase tracking-wider">
                        Featured
                      </h3>
                      
                      {/* Featured Product Showcase */}
                      <Link href="/products/templates" className="block group/featured">
                        <div className="bg-[#0F0F0F] border border-[#333] rounded-md p-4 hover:border-[#A259FF]/50 transition-colors">
                          <div className="w-full h-24 bg-gradient-to-br from-[#A259FF]/20 to-[#FF6F61]/20 rounded mb-3 flex items-center justify-center">
                            <span className="text-[#AAAAAA] text-xs">Template Preview</span>
                          </div>
                          <h4 className="text-[#F5F5F5] font-semibold text-sm mb-2 group-hover/featured:text-[#A259FF] transition-colors">
                            Premium Templates
                          </h4>
                          <p className="text-[#AAAAAA] text-xs mb-3">
                            50+ professionally designed email templates for every industry
                          </p>
                          <div className="text-xs text-[#A259FF] font-semibold">
                            Browse Templates →
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link 
              href="/pricing" 
              className="text-white hover:text-[#A259FF] transition-colors font-bold cursor-pointer"
            >
              Pricing
            </Link>
            
            {/* Resources with Hover Menu */}
            <div className="relative group">
              <Link 
                href="/resources" 
                className="text-white hover:text-[#A259FF] transition-colors font-bold cursor-pointer"
              >
                Resources
              </Link>
              
              {/* Hover Menu */}
              <div className="absolute top-full left-0 w-[600px] bg-[#1E1E1E] border border-[#333] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mt-2">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column - Main Resources */}
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold mb-4 text-sm uppercase tracking-wider">
                        Learn & Grow
                      </h3>
                      <div className="space-y-3">
                        <Link 
                          href="/resources/blog"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#A259FF] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">B</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                The Canvix Blog
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Email marketing tips & trends
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        <Link 
                          href="/resources/academy"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#FF6F61] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">A</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                Email Academy
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                eBooks, reports & resources
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        <Link 
                          href="/resources/knowledge-base"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#A259FF] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">K</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                Knowledge Base
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Documentation & guides
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        <Link 
                          href="/resources/case-studies"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#FF6F61] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">C</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                Case Studies
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Customer success stories
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Right Column - Featured Content */}
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold mb-4 text-sm uppercase tracking-wider">
                        Featured Content
                      </h3>
                      
                      {/* Featured Blog Post */}
                      <Link href="/resources/blog/email-design-trends-2024" className="block group/featured mb-4">
                        <div className="bg-[#0F0F0F] border border-[#333] rounded-md p-3 hover:border-[#A259FF]/50 transition-colors">
                          <div className="w-full h-20 bg-gradient-to-br from-[#A259FF]/20 to-[#FF6F61]/20 rounded mb-3 flex items-center justify-center">
                            <span className="text-[#AAAAAA] text-xs">Blog Post</span>
                          </div>
                          <h4 className="text-[#F5F5F5] font-semibold text-sm mb-1 group-hover/featured:text-[#A259FF] transition-colors line-clamp-2">
                            Email Design Trends That Convert in 2024
                          </h4>
                          <p className="text-[#AAAAAA] text-xs">
                            Latest design patterns driving engagement
                          </p>
                        </div>
                      </Link>
                      
                      {/* Featured Academy Course */}
                      <Link href="/resources/academy/email-marketing-fundamentals" className="block group/featured">
                        <div className="bg-[#0F0F0F] border border-[#333] rounded-md p-3 hover:border-[#A259FF]/50 transition-colors">
                          <div className="w-full h-20 bg-gradient-to-br from-[#FF6F61]/20 to-[#A259FF]/20 rounded mb-3 flex items-center justify-center">
                            <span className="text-[#AAAAAA] text-xs">Course</span>
                          </div>
                          <h4 className="text-[#F5F5F5] font-semibold text-sm mb-1 group-hover/featured:text-[#A259FF] transition-colors line-clamp-2">
                            Email Marketing Fundamentals
                          </h4>
                          <p className="text-[#AAAAAA] text-xs">
                            Master the basics in 30 minutes
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Company with Hover Menu */}
            <div className="relative group">
              <Link 
                href="/company" 
                className="text-white hover:text-[#A259FF] transition-colors font-bold cursor-pointer"
              >
                Company
              </Link>
              
              {/* Hover Menu */}
              <div className="absolute top-full left-0 w-[450px] bg-[#1E1E1E] border border-[#333] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mt-2">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Left Column - Company Info */}
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold mb-4 text-sm uppercase tracking-wider">
                        About Canvix
                      </h3>
                      <div className="space-y-3">
                        <Link 
                          href="/about"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#A259FF] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">A</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                About
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Our mission & story
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        <Link 
                          href="/company/careers"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#FF6F61] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">C</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                Careers
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Join our team
                              </p>
                            </div>
                          </div>
                        </Link>
                        
                        <Link 
                          href="/company/contact"
                          className="block group/item"
                        >
                          <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#0F0F0F] transition-colors">
                            <div className="w-8 h-8 bg-[#A259FF] rounded-md flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm font-bold">📧</span>
                            </div>
                            <div>
                              <h4 className="text-[#F5F5F5] font-semibold text-sm group-hover/item:text-[#A259FF] transition-colors">
                                Contact
                              </h4>
                              <p className="text-[#AAAAAA] text-xs">
                                Get in touch
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Right Column - News & Updates */}
                    <div>
                      <h3 className="text-[#F5F5F5] font-semibold mb-4 text-sm uppercase tracking-wider">
                        News & Updates
                      </h3>
                      
                      {/* Latest Company News */}
                      <Link href="/company/news/canvix-launch" className="block group/featured mb-4">
                        <div className="bg-[#0F0F0F] border border-[#333] rounded-md p-3 hover:border-[#A259FF]/50 transition-colors">
                          <div className="w-full h-16 bg-gradient-to-br from-[#FF6F61]/20 to-[#A259FF]/20 rounded mb-3 flex items-center justify-center">
                            <span className="text-[#AAAAAA] text-xs">Company News</span>
                          </div>
                          <h4 className="text-[#F5F5F5] font-semibold text-sm mb-1 group-hover/featured:text-[#A259FF] transition-colors line-clamp-2">
                            Canvix Launches with Mission to Democratize Email Design
                          </h4>
                          <p className="text-[#AAAAAA] text-xs">
                            Our founding story and vision
                          </p>
                        </div>
                      </Link>
                      
                      {/* Quick Contact */}
                      <div className="bg-[#0F0F0F] border border-[#333] rounded-md p-3">
                        <h4 className="text-[#F5F5F5] font-semibold text-sm mb-2">
                          Get in Touch
                        </h4>
                        <p className="text-[#AAAAAA] text-xs mb-2">
                          Have questions? We'd love to hear from you.
                        </p>
                        <Link 
                          href="/company/contact"
                          className="text-xs text-[#A259FF] font-semibold hover:text-[#A259FF]/80 transition-colors"
                        >
                          Contact Us →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Right Navigation */}
          <div className="flex items-center space-x-4 mt-1">
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="text-white hover:text-[#A259FF] transition-colors cursor-pointer flex items-center"
              >
                <Globe size={20} className="mt-1" />
              </button>
              
              {/* Dropdown Menu */}
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[#1E1E1E] border border-[#333] rounded-lg shadow-xl z-[70] max-h-[500px] overflow-y-auto">
                    <div className="py-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageSelect(language)}
                          className={`w-full text-left px-4 py-3 hover:bg-[#2A2A2A] transition-colors cursor-pointer ${
                            selectedLanguage === language.name ? 'bg-[#A259FF]/20 text-[#A259FF]' : 'text-[#F5F5F5]'
                          }`}
                        >
                          <span className="text-sm font-medium">{language.name}</span>
                        </button>
                      ))}
                    </div>
                </div>
              )}
            </div>
            
            {/* Login Button */}
            <Link 
              href="/login"
              className="text-white hover:text-[#A259FF] transition-colors px-3 py-2 font-bold cursor-pointer"
            >
              Login
            </Link>
            
            {/* Try Demo Editor Button */}
            <Link
              href="/demo"
              className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] hover:opacity-90 text-white px-4 py-2 rounded-md transition-opacity font-bold cursor-pointer"
            >
              Try Demo Editor
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}