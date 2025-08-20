'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export function AIInsightsFeature() {
  const [isVisible, setIsVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [emailsAnalyzed, setEmailsAnalyzed] = useState(0)
  const [predictionAccuracy, setPredictionAccuracy] = useState(0)
  const [roiImprovement, setRoiImprovement] = useState(0)
  
  // Card metrics animation states
  const [openRates, setOpenRates] = useState(0)
  const [clickRates, setClickRates] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [conversions, setConversions] = useState(0)
  const [engagement, setEngagement] = useState(0)
  
  const statsRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Intersection Observer to trigger animation when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Intersection Observer for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !cardsVisible) {
          setCardsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (cardsRef.current) {
      observer.observe(cardsRef.current)
    }

    return () => observer.disconnect()
  }, [cardsVisible])

  // Counter animations
  useEffect(() => {
    if (!isVisible) return

    // Animate emails analyzed (10M+)
    const emailsTimer = setInterval(() => {
      setEmailsAnalyzed(prev => {
        if (prev >= 10) return 10
        return prev + 0.2
      })
    }, 50)

    // Animate prediction accuracy (89%)
    const accuracyTimer = setInterval(() => {
      setPredictionAccuracy(prev => {
        if (prev >= 89) return 89
        return prev + 2
      })
    }, 30)

    // Animate ROI improvement (2.3x)
    const roiTimer = setInterval(() => {
      setRoiImprovement(prev => {
        if (prev >= 2.3) return 2.3
        return prev + 0.05
      })
    }, 60)

    // Cleanup timers
    return () => {
      clearInterval(emailsTimer)
      clearInterval(accuracyTimer) 
      clearInterval(roiTimer)
    }
  }, [isVisible])

  // Card metrics animations
  useEffect(() => {
    if (!cardsVisible) return

    // Animate +23% open rates
    const openTimer = setInterval(() => {
      setOpenRates(prev => {
        if (prev >= 23) return 23
        return prev + 1
      })
    }, 120)

    // Animate +35% click rates  
    const clickTimer = setInterval(() => {
      setClickRates(prev => {
        if (prev >= 35) return 35
        return prev + 1
      })
    }, 100)

    // Animate 90% accuracy
    const accTimer = setInterval(() => {
      setAccuracy(prev => {
        if (prev >= 90) return 90
        return prev + 2
      })
    }, 80)

    // Animate +18% conversions
    const convTimer = setInterval(() => {
      setConversions(prev => {
        if (prev >= 18) return 18
        return prev + 1
      })
    }, 140)

    // Animate +28% engagement
    const engTimer = setInterval(() => {
      setEngagement(prev => {
        if (prev >= 28) return 28
        return prev + 1
      })
    }, 110)

    return () => {
      clearInterval(openTimer)
      clearInterval(clickTimer)
      clearInterval(accTimer)
      clearInterval(convTimer)
      clearInterval(engTimer)
    }
  }, [cardsVisible])

  const getAnimatedMetric = (index: number) => {
    switch(index) {
      case 0: return `+${openRates}% open rates`
      case 1: return `+${clickRates}% click rates`
      case 2: return `${accuracy}% accuracy`
      case 3: return `+${conversions}% conversions`
      case 4: return `+${engagement}% engagement`
      case 5: return "Real-time data"
      default: return ""
    }
  }

  const aiCapabilities = [
    {
      icon: "✍️",
      title: "Copy Optimization",
      description: "AI analyzes your audience and suggests subject lines, body copy, and CTAs that drive higher engagement rates."
    },
    {
      icon: "🧪", 
      title: "A/B Testing Intelligence",
      description: "Smart test recommendations based on your industry, audience behavior, and campaign performance history."
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Deep insights from engagement patterns, deliverability metrics, and subscriber behavior across campaigns."
    },
    {
      icon: "🎨",
      title: "Design Recommendations", 
      description: "Layout optimization, color psychology, and visual hierarchy suggestions tailored to your brand and goals."
    },
    {
      icon: "⏰",
      title: "Send-Time Optimization",
      description: "AI determines optimal delivery windows for each subscriber segment based on engagement patterns."
    },
    {
      icon: "🎯",
      title: "Audience Insights",
      description: "Understand subscriber preferences, content resonance, and behavioral trends to inform strategy."
    }
  ]

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blue circle - top left */}
        <div className="absolute top-16 left-8 w-64 h-64 bg-gradient-to-br from-[#3B82F6]/10 to-[#06B6D4]/5 rounded-full blur-3xl"></div>
        
        {/* Medium cyan shape - top right */}
        <div className="absolute top-32 right-12 w-40 h-40 bg-[#06B6D4]/8 rounded-full"></div>
        
        {/* Brain/circuit inspired elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32">
          <div className="absolute inset-0 border border-[#3B82F6]/20 rounded-lg transform rotate-45"></div>
          <div className="absolute inset-4 border border-[#06B6D4]/30 rounded-lg transform -rotate-12"></div>
          <div className="absolute inset-8 bg-[#6366F1]/10 rounded-full"></div>
        </div>
        
        {/* Connected dots pattern */}
        <div className="absolute bottom-1/3 left-1/4">
          <div className="relative">
            <div className="w-4 h-4 bg-[#3B82F6] rounded-full opacity-40"></div>
            <div className="absolute top-8 left-12 w-3 h-3 bg-[#06B6D4] rounded-full opacity-50"></div>
            <div className="absolute top-16 left-6 w-2 h-2 bg-[#6366F1] rounded-full opacity-60"></div>
            {/* Connecting lines */}
            <div className="absolute top-2 left-2 w-12 h-px bg-gradient-to-r from-[#3B82F6]/30 to-transparent transform rotate-45"></div>
            <div className="absolute top-10 left-8 w-8 h-px bg-gradient-to-r from-[#06B6D4]/30 to-transparent transform -rotate-12"></div>
          </div>
        </div>
        
        {/* Large background shape - bottom right */}
        <div className="absolute bottom-12 right-4 w-80 h-48 bg-gradient-to-l from-[#6366F1]/8 to-transparent rounded-full blur-2xl"></div>
        
        {/* AI-inspired geometric elements */}
        <div className="absolute bottom-1/4 left-8">
          <div className="w-24 h-24 border border-[#3B82F6]/15 transform rotate-12">
            <div className="w-full h-full border border-[#06B6D4]/20 transform -rotate-6">
              <div className="w-full h-full bg-[#6366F1]/5 transform rotate-3"></div>
            </div>
          </div>
        </div>
        
        {/* Floating accent elements */}
        <div className="absolute top-1/2 left-12 w-6 h-6 bg-[#3B82F6]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-[#06B6D4]/40 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-[#6366F1]/20 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Centered */}
        <div className="text-center mb-16">
          {/* Feature Category Label */}
          <div className="text-[#A259FF] text-sm font-semibold tracking-wider uppercase mb-4">
            AI-Powered Insights
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F0F0F] mb-8">
            Intelligence That
            <br />
            <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
              Drives Results
            </span>
          </h2>
          
          <p className="text-[#666666] text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            Our AI doesn't just help you build emails—it learns from your campaigns, analyzes your audience, 
            and provides actionable insights that turn your email marketing into a strategic advantage.
          </p>
        </div>

        {/* AI Capabilities Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((capability, index) => (
            <div 
              key={index}
              className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-[#A259FF]/30 group"
            >
              {/* Icon & Metric */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{capability.icon}</div>
                <div className="text-[#A259FF] text-sm font-semibold bg-[#A259FF]/10 px-3 py-1 rounded-full transition-all duration-300">
                  {getAnimatedMetric(index)}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-[#0F0F0F] text-lg font-semibold mb-3 group-hover:text-[#A259FF] transition-colors">
                {capability.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#666666] leading-relaxed text-sm">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="text-center">
          <div ref={statsRef} className="bg-gradient-to-r from-[#A259FF]/10 to-[#FF6F61]/10 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#A259FF] mb-2 transition-all duration-300">
                  {emailsAnalyzed.toFixed(1)}M+
                </div>
                <div className="text-[#666666] text-sm">Emails Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6F61] mb-2 transition-all duration-300">
                  {Math.round(predictionAccuracy)}%
                </div>
                <div className="text-[#666666] text-sm">Prediction Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#A259FF] mb-2 transition-all duration-300">
                  {roiImprovement.toFixed(1)}x
                </div>
                <div className="text-[#666666] text-sm">Average ROI Improvement</div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo"
              className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] hover:opacity-90 text-white font-bold px-8 py-4 rounded-lg text-lg transition-opacity cursor-pointer text-center"
            >
              See AI in Action
            </Link>
            <Link 
              href="/ai-features"
              className="border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors cursor-pointer text-center"
            >
              Learn More About AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}