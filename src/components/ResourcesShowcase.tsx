'use client'
import Link from 'next/link'

export function ResourcesShowcase() {
  const resources = [
    {
      type: 'Blog Post',
      title: 'Email Design Trends That Convert in 2024',
      description: 'Discover the latest email design patterns that are driving higher engagement and conversion rates.',
      link: '/resources/blog/email-design-trends-2024',
      category: 'Design',
      readTime: '5 min read'
    },
    {
      type: 'eBook',
      title: 'The Complete Guide to Email Marketing Success',
      description: 'Everything you need to know about building effective email campaigns from strategy to execution.',
      link: '/resources/ebooks/email-marketing-guide',
      category: 'Strategy',
      readTime: '45 min read'
    },
    {
      type: 'Knowledge Base',
      title: 'Getting Started with Canvix Email Builder',
      description: 'Step-by-step guide to creating your first professional email using our drag-and-drop editor.',
      link: '/resources/knowledge-base/getting-started',
      category: 'Tutorial',
      readTime: '10 min read'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Blog Post':
        return 'bg-[#A259FF]'
      case 'eBook':
        return 'bg-[#FF6F61]'
      case 'Knowledge Base':
        return 'bg-[#A259FF]'
      default:
        return 'bg-[#A259FF]'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Blog Post':
        return '📝'
      case 'eBook':
        return '📚'
      case 'Knowledge Base':
        return '📖'
      default:
        return '📄'
    }
  }

  return (
    <section className="bg-[#0F0F0F] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">
            Resources & Insights
          </h2>
          <p className="text-[#AAAAAA] text-xl max-w-3xl mx-auto mb-8">
            Discover expert insights, practical guides, and industry best practices to elevate your email marketing game.
          </p>
          <Link 
            href="/resources"
            className="inline-flex items-center text-[#A259FF] hover:text-[#A259FF]/80 font-semibold transition-colors cursor-pointer"
          >
            Explore All Resources
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Link 
              key={index}
              href={resource.link}
              className="group block cursor-pointer"
            >
              <div className="bg-[#1E1E1E] border border-[#333] rounded-lg p-6 hover:border-[#A259FF]/50 transition-all duration-200 h-full">
                {/* Resource Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`${getTypeColor(resource.type)} rounded-full w-8 h-8 flex items-center justify-center`}>
                      <span className="text-sm">{getTypeIcon(resource.type)}</span>
                    </div>
                    <span className="text-[#A259FF] text-sm font-semibold">
                      {resource.type}
                    </span>
                  </div>
                  <span className="text-[#AAAAAA] text-xs">
                    {resource.readTime}
                  </span>
                </div>

                {/* Content Preview */}
                <div className="mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-[#A259FF]/10 to-[#FF6F61]/10 rounded-lg mb-4 flex items-center justify-center border border-[#333]">
                    <span className="text-[#AAAAAA] text-sm">Content Preview</span>
                  </div>
                </div>

                {/* Resource Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#A259FF]/20 text-[#A259FF] text-xs px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="text-[#F5F5F5] font-semibold text-lg group-hover:text-[#A259FF] transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-[#AAAAAA] text-sm leading-relaxed line-clamp-3">
                    {resource.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-[#A259FF] text-sm font-semibold group-hover:text-[#A259FF]/80 transition-colors pt-2">
                    Read More
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}