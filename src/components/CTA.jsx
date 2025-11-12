import React from 'react'

function CTA() {
  return (
    <section id="get-started" className="py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="container mx-auto px-6 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to become an EcoHero?</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Create a profile for you or your child. Start completing eco challenges today and turn points into real rewards.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#demo" className="px-5 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">Try a Demo</a>
          <a href="/test" className="px-5 py-3 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition">Check Backend</a>
        </div>
      </div>
    </section>
  )
}

export default CTA