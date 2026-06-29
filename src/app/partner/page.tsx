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
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-wider text-blue-900 mb-4">
            Partner With Us
          </h1>
          <p className="text-gray-600 text-lg">
            Faith Makes Sense does not charge for its content and never will.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-gray-100 border border-gray-200 p-8"
              >
                <h2 className="font-display text-2xl uppercase tracking-wider text-blue-900 mb-4">
                  {pillar.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>

          {/* Monthly Partner CTA */}
          <h2 className="text-gray-900 font-bold text-xl mt-12">
            Become a Monthly Partner
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Monthly partners make the mission sustainable. Every recurring gift — regardless of size — keeps the library free, the courses running, and the training materials flowing to pastors in Uganda.
          </p>

          <div className="bg-[#1e3a5f] rounded-xl p-6 mt-6 max-w-xl">
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold">
              Partner Gift
            </p>
            <h3 className="text-white font-bold text-lg mt-1">
              Receive a Signed Copy of The Wrong Jesus
            </h3>
            <p className="text-white/80 text-sm mt-2">
              Every new monthly partner receives a personally signed copy of Dr. Bill Yomes&apos;s book — a clear, compelling case for the real Jesus of Scripture.
            </p>
            <a
              href="https://givebutter.com/fms1"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-white text-[#1e3a5f] font-semibold px-6 py-3 rounded-md hover:bg-blue-50 text-center w-fit"
            >
              Become a Monthly Partner →
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Prefer a one-time gift?{' '}
            <a
              href="https://givebutter.com/fms1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e3a5f] underline font-medium"
            >
              Give here →
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
