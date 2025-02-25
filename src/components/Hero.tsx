import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-warm animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQuMDI3IDQ5LjE2N2MtLjU1Mi00LjQ0My0xLjk0NC04LjcwOC00LjA3Mi0xMi42MTctMi4xMjgtMy45MS00Ljk5LTcuMzY3LTguMzg1LTEwLjIyM2wtLjM4NS0uMzIzYy0zLjU2LTIuOTktNy42NC01LjMwNy0xMi4wMjctNi44NjNsLS40NDctLjE1N2MtNC41ODctMS42Mi05LjQ2OS0yLjQ0Ny0xNC40MjctMi40NDctNC45NTggMC05LjgyNy44MjctMTQuMzg1IDIuNDQ3bC0uNDQ4LjE1N2MtNC4zODcgMS41NTYtOC40NjcgMy44NzMtMTIuMDI3IDYuODYzbC0uMzg1LjMyM2MtMy4zOTUgMi44NTYtNi4yNTcgNi4zMTMtOC4zODUgMTAuMjIzLTIuMTI4IDMuOTEtMy41MiA4LjE3NC00LjA3MiAxMi42MTctLjU1MyA0LjQ0Mi0uMjcgOC45NTguODMzIDEzLjI5Mi4xMDQuNDEuMjE4LjgxNy4zNDMgMS4yMjJsLjE0Ni40N2MxLjI4IDQuMDkgMy4yMDggNy45MzUgNS43MDggMTEuMzY4IDIuNSAzLjQzMyA1LjU2MyA2LjQzNyA5LjA2MyA4LjkwNyAzLjUgMi40NyA3LjM5NiA0LjM5IDExLjUzMSA1LjY4OCA0LjEzNiAxLjI5OCA4LjQ5IDEuOTUzIDEyLjg3NSAxLjk1M3M4Ljc0LS42NTUgMTIuODc1LTEuOTUzYzQuMTM1LTEuMjk4IDguMDMxLTMuMjE4IDExLjUzMS01LjY4OCAzLjUtMi40NyA2LjU2My01LjQ3NCA5LjA2My04LjkwNyAyLjUtMy40MzMgNC40MjgtNy4yNzggNS43MDgtMTEuMzY4bC4xNDYtLjQ3Yy4xMjUtLjQwNS4yMzktLjgxMi4zNDMtMS4yMjIgMS4xMDMtNC4zMzQgMS4zODYtOC44NS44MzMtMTMuMjkyeiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 animate-[spin_30s_linear_infinite]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Leadership That Serves
              <span className="block gradient-text animate-pulse">Kianjai Ward</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-slide-up" style={{ "--slide-delay": "0.2s" } as React.CSSProperties}>
              Join Elias Murithi Mithika in building a brighter future for our community. 
              Together, we can create positive change and sustainable development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ "--slide-delay": "0.4s" } as React.CSSProperties}>
              <button className="btn btn-primary btn-shine btn-hover-lift group">
                Join the Movement
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="btn btn-secondary btn-shine btn-hover-lift">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}