import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import CTA from './components/CTA'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [status, setStatus] = useState('Checking backend...')
  const [challengeCount, setChallengeCount] = useState(null)

  useEffect(() => {
    // Ping backend and seed default challenges once
    const init = async () => {
      try {
        const ping = await fetch(`${BACKEND_URL}`)
        if (!ping.ok) throw new Error('Backend not reachable')
        setStatus('Backend connected')

        // Seed defaults (idempotent if already seeded)
        const seed = await fetch(`${BACKEND_URL}/seed`, { method: 'POST' })
        if (seed.ok) {
          // fetch challenges count to display
          const res = await fetch(`${BACKEND_URL}/challenges`)
          const list = await res.json()
          setChallengeCount(list.length)
        }
      } catch (e) {
        setStatus('Backend unavailable')
      }
    }
    init()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />

      <section className="py-10">
        <div className="container mx-auto px-6 md:px-10">
          <div className="rounded-xl border border-gray-200 p-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-600">System status</p>
              <p className="font-semibold">{status}</p>
            </div>
            {challengeCount !== null && (
              <div className="text-sm text-gray-700">Challenges available: <span className="font-semibold">{challengeCount}</span></div>
            )}
          </div>
        </div>
      </section>

      <FeatureCards />
      <CTA />

      <footer className="py-10 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-10 text-center text-sm text-gray-600">
          EcoHero+ — From Kids to Legends – Earn by Saving Earth.
        </div>
      </footer>
    </div>
  )
}

export default App
