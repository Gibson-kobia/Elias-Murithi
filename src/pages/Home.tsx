import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-warm animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQuMDI3IDQ5LjE2N2MtLjU1Mi00LjQ0My0xLjk0NC04LjcwOC00LjA3Mi0xMi42MTctMi4xMjgtMy45MS00Ljk5LTcuMzY3LTguMzg1LTEwLjIyM2wtLjM4NS0uMzIzYy0zLjU2LTIuOTktNy42NC01LjMwNy0xMi4wMjctNi44NjNsLS40NDctLjE1N2MtNC41ODctMS42Mi05LjQ2OS0yLjQ0Ny0xNC40MjctMi40NDctNC45NTggMC05LjgyNy44MjctMTQuMzg1IDIuNDQ3bC0uNDQ4LjE1N2MtNC4zODcgMS41NTYtOC40NjcgMy44NzMtMTIuMDI3IDYuODYzbC0uMzg1LjMyM2MtMy4zOTUgMi44NTYtNi4yNTcgNi4zMTMtOC4zODUgMTAuMjIzLTIuMTI4IDMuOTEtMy41MiA4LjE3NC00LjA3MiAxMi42MTctLjU1MyA0LjQ0Mi0uMjcgOC45NTguODMzIDEzLjI5Mi4xMDQuNDEuMjE4LjgxNy4zNDMgMS4yMjJsLjE0Ni40N2MxLjI4IDQuMDkgMy4yMDggNy45MzUgNS43MDggMTEuMzY4IDIuNSAzLjQzMyA1LjU2MyA2LjQzNyA5LjA2MyA4LjkwNyAzLjUgMi40NyA3LjM5NiA0LjM5IDExLjUzMSA1LjY4OCA0LjEzNiAxLjI5OCA4LjQ5IDEuOTUzIDEyLjg3NSAxLjk1M3M4Ljc0LS42NTUgMTIuODc1LTEuOTUzYzQuMTM1LTEuMjk4IDguMDMxLTMuMjE4IDExLjUzMS01LjY4OCAzLjUtMi40NyA2LjU2My01LjQ3NCA5LjA2My04LjkwNyAyLjUtMy40MzMgNC40MjgtNy4yNzggNS43MDgtMTEuMzY4bC4xNDYtLjQ3Yy4xMjUtLjQwNS4yMzktLjgxMi4zNDMtMS4yMjIgMS4xMDMtNC4zMzQgMS4zODYtOC44NS44MzMtMTMuMjkyeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                Leadership That Serves
                <span className="block gradient-text animate-pulse">Kianjai Ward</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 md:mb-8 animate-slide-up max-w-xl mx-auto lg:mx-0" 
                style={{ "--slide-delay": "0.2s" } as React.CSSProperties}>
                Join Elias Murithi Mithika in building a brighter future for our community. 
                Together, we can create positive change and sustainable development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" 
                style={{ "--slide-delay": "0.4s" } as React.CSSProperties}>
                <Link
                  to="/vision"
                  className="btn btn-secondary btn-shine inline-flex items-center justify-center w-full sm:w-auto"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-2xl h-[400px] md:h-[500px]">
                <img
                  src="/images/elias2.jpg"
                  alt="Elias Murithi Mithika"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{
                    imageRendering: 'high-quality',
                    objectPosition: 'center 15%',
                    willChange: 'transform'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Vision for Kianjai</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we will build a prosperous, inclusive, and sustainable Kianjai Ward 
              that works for everyone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Economic Growth',
                description: 'Creating opportunities for businesses and employment through strategic development initiatives.',
              },
              {
                title: 'Education',
                description: 'Investing in quality education and training programs for our youth.',
              },
              {
                title: 'Infrastructure',
                description: 'Developing modern infrastructure to improve connectivity and service delivery.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}