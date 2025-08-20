'use client'
import Image from 'next/image'

export function ImageCarousel() {
  // Email inspiration images - duplicate for seamless loop
  const emailImages = [
    'email-inspiration-from-elysium-health1573133999.jpg',
    'email-inspiration-from-microsoft-store1642568272.jpg', 
    'email-inspiration-from-samsung165528774.jpg',
    'email-inspiration-from-thumbtack159941161.jpg',
    'email-inspiration-from-touch-of-modern1677467495.jpg',
    'email-inspiration-from-true-classic1691355085.jpg'
  ]

  // Triple the array for truly seamless infinite scroll
  const duplicatedImages = [...emailImages, ...emailImages, ...emailImages]

  return (
    <section className="bg-[#0F0F0F] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Scrolling Container */}
        <div className="relative h-96 bg-[#1E1E1E] rounded-lg overflow-hidden mb-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#1E1E1E] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#1E1E1E] to-transparent z-10"></div>
          
          {/* Scrolling Images */}
          <div className="flex scrolling-container gap-5 items-center h-full py-4" style={{width: `${duplicatedImages.length * 320}px`}}>
            {duplicatedImages.map((image, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={`/${image}`}
                  alt={`Email inspiration example ${(index % emailImages.length) + 1}`}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Text Content Below Carousel */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[#F5F5F5] text-2xl font-semibold mb-4">
            Elegant. Effortless. Effective.
          </h2>
          <p className="text-[#AAAAAA]">
            Professional email designs made easy with our drag-and-drop builder and growing template library
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .scrolling-container {
          animation: scroll 50s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}