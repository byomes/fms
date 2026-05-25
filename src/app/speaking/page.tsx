import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'Book Bill Yomes to speak at your church, conference, or apologetics event.',
}

const topics = [
  "Evidence for God's existence",
  'The reliability of Scripture',
  'Evolution, creation, and the age of the earth',
  'How to have confident conversations about faith',
]

export default function SpeakingPage() {
  return (
    <div className="pt-20">
      <section className="min-h-screen bg-navy-900 py-20 lg:py-28 flex items-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-wider text-white mb-4">
            Book Bill to Speak
          </h1>
          <p className="text-slate-light text-lg mb-12">
            Available for churches, conferences, apologetics events, and pastor training.
          </p>

          <div className="mb-12">
            <h2 className="font-display text-2xl uppercase tracking-wider text-gold-400 mb-6">
              Topics
            </h2>
            <ul className="space-y-4">
              {topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                  <span className="text-slate-light text-lg">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="mailto:bill@faithmakessense.com"
            className="inline-block px-8 py-3 bg-gold-500 text-navy-950 font-sans font-medium text-sm uppercase tracking-wide hover:bg-gold-400 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
