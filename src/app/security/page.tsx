import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] text-[#F5F5F5]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#A259FF] to-[#FF6F61] bg-clip-text text-transparent">
              Security
            </span>
          </h1>
          <p className="text-xl text-[#F5F5F5]/80 max-w-3xl mx-auto">
            Your data security is our priority. Learn about our current security practices and our commitment to enterprise-grade protection.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Our Security Commitment */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Our Security Commitment</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-4">
                At Canvix, we take security seriously and are committed to protecting your data and email campaigns. We implement industry-standard security practices and are actively working toward enterprise-grade security compliance.
              </p>
              <p className="text-lg leading-relaxed">
                We continuously evaluate and improve our security posture to ensure your email marketing data remains secure and your campaigns are protected.
              </p>
            </div>
          </section>

          {/* Current Security Practices */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Current Security Practices</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#A259FF]">Data Encryption</h3>
                <ul className="space-y-2 text-[#F5F5F5]/80">
                  <li>• SSL/TLS encryption for all data in transit</li>
                  <li>• Encrypted storage for sensitive data at rest</li>
                  <li>• Secure API communications</li>
                  <li>• End-to-end encryption for email templates</li>
                </ul>
              </div>
              
              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#A259FF]">Access Controls</h3>
                <ul className="space-y-2 text-[#F5F5F5]/80">
                  <li>• Multi-factor authentication support</li>
                  <li>• Role-based access permissions</li>
                  <li>• Secure user session management</li>
                  <li>• Regular access reviews and audits</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#A259FF]">Infrastructure Security</h3>
                <ul className="space-y-2 text-[#F5F5F5]/80">
                  <li>• Cloud-hosted infrastructure with security controls</li>
                  <li>• Regular security updates and patches</li>
                  <li>• Network security and firewall protection</li>
                  <li>• Backup and disaster recovery procedures</li>
                </ul>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#A259FF]">Data Protection</h3>
                <ul className="space-y-2 text-[#F5F5F5]/80">
                  <li>• Regular automated backups</li>
                  <li>• Data anonymization where applicable</li>
                  <li>• Secure data deletion procedures</li>
                  <li>• Privacy by design principles</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security Monitoring */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Monitoring & Response</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">Continuous Monitoring</h4>
                  <ul className="space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>• System activity monitoring and logging</li>
                    <li>• Automated threat detection</li>
                    <li>• Real-time security alerts</li>
                    <li>• Performance and availability monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#FF6F61]">Incident Response</h4>
                  <ul className="space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>• Defined incident response procedures</li>
                    <li>• 24/7 security monitoring capabilities</li>
                    <li>• Rapid response to security events</li>
                    <li>• Post-incident analysis and improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Security */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Third-Party Integrations</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                We carefully vet our third-party service providers and integrations to ensure they meet our security standards:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-[#A259FF] mb-2">Cloud Providers</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Enterprise-grade cloud infrastructure with built-in security controls and compliance features.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[#A259FF] mb-2">ESP Partners</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Secure API connections to trusted email service providers with encrypted data transmission.
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-[#A259FF] mb-2">Security Tools</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Industry-standard security tools for monitoring, logging, and threat detection.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Security Journey */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Enterprise Security Journey</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                We are committed to achieving enterprise-grade security standards and are actively working toward industry certifications:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-[#A259FF] pl-6">
                  <h4 className="font-semibold text-[#A259FF] mb-2">Security Framework Implementation</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Implementing comprehensive security frameworks and best practices to support enterprise compliance requirements.
                  </p>
                </div>
                <div className="border-l-4 border-[#FF6F61] pl-6">
                  <h4 className="font-semibold text-[#FF6F61] mb-2">Compliance Readiness</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Preparing for industry-standard compliance certifications including SOC 2 and ISO 27001 to meet enterprise security requirements.
                  </p>
                </div>
                <div className="border-l-4 border-[#A259FF] pl-6">
                  <h4 className="font-semibold text-[#A259FF] mb-2">Continuous Improvement</h4>
                  <p className="text-[#F5F5F5]/80 text-sm">
                    Regular security assessments, updates, and improvements to maintain the highest security standards as we grow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Security Best Practices */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Your Security Best Practices</h2>
            <div className="bg-[#1E1E1E] rounded-lg p-8">
              <p className="text-lg leading-relaxed mb-6">
                While we secure our platform, here are recommendations to help you maintain security on your end:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#FF6F61]">Account Security</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Use strong, unique passwords</li>
                    <li>Enable multi-factor authentication</li>
                    <li>Regularly review account activity</li>
                    <li>Keep login credentials confidential</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-[#FF6F61]">Email Campaign Security</h4>
                  <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                    <li>Verify recipient list accuracy</li>
                    <li>Use secure ESP integrations</li>
                    <li>Monitor campaign performance</li>
                    <li>Report suspicious activity</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Reporting */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#F5F5F5]">Security Contact & Reporting</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 border border-[#E5E5E5]">
                <h3 className="text-xl font-semibold mb-4 text-[#0F0F0F]">Security Questions or Concerns?</h3>
                <p className="text-[#666666] mb-6">
                  If you have security questions, need to report a vulnerability, or want to discuss enterprise security requirements, contact our security team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:security@canvix.com" 
                    className="bg-[#A259FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A259FF]/90 transition-colors text-center"
                  >
                    Contact Security Team
                  </a>
                  <a 
                    href="mailto:support@canvix.com" 
                    className="bg-white border-2 border-[#A259FF] text-[#A259FF] hover:bg-[#A259FF] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    General Support
                  </a>
                </div>
              </div>

              <div className="bg-[#1E1E1E] rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#A259FF]">Vulnerability Reporting</h3>
                <p className="text-lg leading-relaxed mb-4">
                  We appreciate security researchers and users who help us improve our security. If you discover a potential security vulnerability:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]/80 text-sm">
                  <li>Email us immediately at security@canvix.com with details</li>
                  <li>Provide steps to reproduce the issue if possible</li>
                  <li>Allow us reasonable time to investigate and address the issue</li>
                  <li>We&apos;ll acknowledge receipt and keep you updated on our progress</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}