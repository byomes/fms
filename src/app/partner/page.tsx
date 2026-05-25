import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner',
  description:
    'Support Faith Makes Sense. Free resources, Adelphos Academy, and pastor training in Uganda — all funded by partners.',
}

const pillars = [
  {
    title: 'Free Resources',
    body: 'Apologetics tools for anyone who downloads them. No paywall, no email required — just free, accessible content for Christians who want to be equipped.',
  },
  {
    title: 'Adelphos Academy',
    body: 'Course development, including the Essentials tier that will always be free. Partners make it possible to build and maintain online apologetics training.',
  },
  {
    title: 'Uganda',
    body: 'Pastor training materials for church leaders in East Africa via web-deployed resources. Every gift helps equip pastors who are shaping the next generation of believers.',
  },
]

export default function PartnerPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-wider text-white mb-4">
            Partner With Us
          </h1>
          <p className="text-slate-light text-lg">
            Faith Makes Sense does not charge for its content and never will.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-navy-900 border border-navy-700 p-8"
              >
                <h2 className="font-display text-2xl uppercase tracking-wider text-gold-400 mb-4">
                  {pillar.title}
                </h2>
                <p className="text-slate-light leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-light text-lg leading-relaxed mb-10">
            Every gift, regardless of size, keeps the library open, the courses running, and the training materials flowing.
          </p>
          <a
            href="https://givebutter.com/fms1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-sm uppercase tracking-wide hover:bg-gold-400 transition-colors duration-200"
          >
            Support Faith Makes Sense
          </a>
        </div>
      </section>
    </div>
  )
}
