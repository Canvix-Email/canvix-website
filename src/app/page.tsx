import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { DragDropFeature } from '@/components/DragDropFeature'
import { CollaborationFeature } from '@/components/CollaborationFeature'
import { AIInsightsFeature } from '@/components/AIInsightsFeature'
import { EcosystemIntegrations } from '@/components/EcosystemIntegrations'
import { ResourcesShowcase } from '@/components/ResourcesShowcase'
import { DemoEditorCTA } from '@/components/DemoEditorCTA'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Blue gradient background sections - extended */}
      <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] pb-32">
        <Header />
        <Hero />
        <DragDropFeature />
      </div>
      
      {/* Grey background sections - extended upward */}
      <div className="bg-[#F0F1F2] pt-32">
        {/* Collaboration card positioned to overlap blue and grey sections */}
        <div className="relative -mt-64">
          <CollaborationFeature />
        </div>
        
        <AIInsightsFeature />
      </div>
      
      {/* Blue background section */}
      <EcosystemIntegrations />
      
      {/* Final grey sections */}
      <div className="bg-[#F0F1F2]">
        <ResourcesShowcase />
        <DemoEditorCTA />
        <Footer />
      </div>
    </div>
  )
}
