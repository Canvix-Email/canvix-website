import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started with email creation',
      featured: false,
      features: [
        'Up to 5 email templates',
        'Basic drag-and-drop editor',
        'Standard templates library',
        'Email preview and testing',
        'Basic export options',
        'Community support'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'bg-white text-[#A259FF] hover:bg-gray-100'
    },
    {
      name: 'Essentials',
      price: '$20',
      period: 'per month',
      description: 'Essential tools for small teams and growing businesses',
      featured: false,
      features: [
        'Up to 50 email templates',
        'Advanced drag-and-drop editor',
        'Premium templates library',
        'AI-powered content assistance',
        'Multiple export formats',
        'Email collaboration tools',
        'Priority email support',
        'Basic analytics and insights'
      ],
      buttonText: 'Start Essentials',
      buttonStyle: 'bg-white text-[#A259FF] hover:bg-gray-100'
    },
    {
      name: 'Professional',
      price: '$50',
      period: 'per month',
      description: 'Professional features for marketing teams and agencies',
      featured: true,
      features: [
        'Unlimited email templates',
        'Full AI-powered editor suite',
        'Custom brand templates',
        'Advanced ESP integrations',
        'Team collaboration workspace',
        'A/B testing capabilities',
        'Advanced analytics dashboard',
        'Custom domain support',
        'Priority phone & chat support',
        'Template marketplace access'
      ],
      buttonText: 'Go Professional',
      buttonStyle: 'bg-white text-[#A259FF] hover:bg-gray-100'
    },
    {
      name: 'Studio',
      price: '$99',
      period: 'per month',
      description: 'Complete creative studio for enterprise-level campaigns',
      featured: false,
      features: [
        'Everything in Professional',
        'Advanced AI content generation',
        'Custom integrations & API access',
        'White-label capabilities',
        'Advanced automation workflows',
        'Multi-brand management',
        'Custom reporting & analytics',
        'Dedicated account manager',
        'Custom training & onboarding',
        'SLA support guarantees'
      ],
      buttonText: 'Get Studio Access',
      buttonStyle: 'bg-white text-[#A259FF] hover:bg-gray-100'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-[#F5F5F5]">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>
          <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto mb-8">
            Choose the perfect plan to unlock your email potential. Start free and upgrade as you grow.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-[#F5F5F5]/60">
            <span>✓ 14-day free trial on all paid plans</span>
            <span>✓ Cancel anytime</span>
            <span>✓ No setup fees</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 relative flex flex-col h-full ${
                plan.featured
                  ? 'bg-gradient-to-b from-[#A259FF] to-[#FF6F61]'
                  : 'bg-[#1E1E1E] border border-[#333]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FF6F61] text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-[#F5F5F5]'}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-black ${plan.featured ? 'text-white' : 'text-[#F5F5F5]'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== 'Free' && (
                    <span className={`text-sm ${plan.featured ? 'text-white/80' : 'text-[#F5F5F5]/60'}`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${plan.featured ? 'text-white/90' : 'text-[#F5F5F5]/70'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check 
                      size={16} 
                      className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-[#A259FF]'}`} 
                    />
                    <span className={`text-sm ${plan.featured ? 'text-white' : 'text-[#F5F5F5]/80'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#F5F5F5]">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#93C5FD]">Can I change plans anytime?</h3>
                <p className="text-[#F5F5F5]/80 text-sm">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#93C5FD]">What payment methods do you accept?</h3>
                <p className="text-[#F5F5F5]/80 text-sm">
                  We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay by invoice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#93C5FD]">Is there a free trial?</h3>
                <p className="text-[#F5F5F5]/80 text-sm">
                  Yes! All paid plans include a 14-day free trial with full access to features. No credit card required to start your trial.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#93C5FD]">What happens to my data if I cancel?</h3>
                <p className="text-[#F5F5F5]/80 text-sm">
                  You can export all your templates and data before canceling. We keep your data for 30 days after cancellation in case you want to reactivate.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#93C5FD]">Do you offer refunds?</h3>
                <p className="text-[#F5F5F5]/80 text-sm">
                  We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us for a full refund within 30 days of purchase.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#93C5FD]">Can I get a custom enterprise plan?</h3>
                <p className="text-[#F5F5F5]/80 text-sm">
                  Absolutely! Contact our sales team to discuss custom features, pricing, and support options for larger organizations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to unlock your email potential?
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Start with our free plan or try any paid plan free for 14 days. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#A259FF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}