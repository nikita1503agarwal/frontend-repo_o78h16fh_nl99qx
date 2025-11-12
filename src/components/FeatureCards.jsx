import React from 'react'
import { Leaf, Bike, Recycle, PiggyBank } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Eco Challenges',
    desc: 'Fun for kids, meaningful for adults. Complete eco-tasks daily.'
  },
  {
    icon: PiggyBank,
    title: 'Points → Money',
    desc: '1000 points = $1. Withdraw when you reach $10.'
  },
  {
    icon: Recycle,
    title: 'Leaderboards & Badges',
    desc: 'Compete globally or as a family. Earn “Eco Kid”, “Green Parent”, more.'
  },
  {
    icon: Bike,
    title: 'Eco Wallet',
    desc: 'See your balance in points and dollars with a fun progress meter.'
  }
]

function FeatureCards() {
  return (
    <section id="how-it-works" className="py-14 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">Built for every age</h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">Kids, teens, adults, and seniors can all join eco-friendly challenges and earn real rewards.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition bg-white">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards