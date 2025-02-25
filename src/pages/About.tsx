import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Made more responsive */}
      <div className="relative pt-20 md:pt-24 pb-8 md:pb-12">
        <div className="absolute inset-0">
          <img
            src="/images/Elias2.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-pink-600/90 to-amber-600/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-6 md:py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 text-center">
            About Elias Murithi Mithika
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-orange-50 max-w-3xl mx-auto text-center">
            A visionary leader committed to transforming Kianjai Ward through sustainable development and community empowerment
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Column - Made more responsive */}
          <div className="overflow-hidden rounded-lg shadow-xl bg-white">
            <img
              src="/images/elias.jpg"
              alt="Elias Murithi Mithika"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                imageRendering: 'high-quality',
                willChange: 'transform'
              }}
            />
          </div>
          
          {/* Content Column - Made more responsive */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-orange-600 via-pink-600 to-amber-600 text-transparent bg-clip-text">
              A Leader for the People
            </h2>
            <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
              Born and raised in Kianjai, Elias Murithi Mithika embodies the spirit of community service
              and transformative leadership. His deep understanding of local challenges and opportunities
              makes him uniquely qualified to lead Kianjai Ward toward a prosperous future.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              With a strong foundation in public administration and community development,
              Elias has consistently demonstrated his commitment to inclusive growth and
              sustainable development throughout his career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}