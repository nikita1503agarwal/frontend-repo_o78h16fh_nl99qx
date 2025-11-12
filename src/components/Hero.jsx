import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-2xl bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              EcoHero+ : For All Ages
            </h1>
            <p className="mt-3 md:mt-4 text-gray-700 md:text-lg">
              Every action counts. Every age matters. Join challenges, earn points, and redeem real rewards.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#get-started" className="px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Get Started</a>
              <a href="#how-it-works" className="px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition">How it works</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  )
}

export default Hero