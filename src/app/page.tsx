import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-navy-900 pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center py-24">
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl uppercase tracking-wider text-white mb-6">
            Faith Makes Sense
          </h1>
          <p className="text-lg sm:text-xl text-slate-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Apologetics for the local church. Resources, training, and tools to help you learn, defend, and share your faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="px-8 py-3 bg-gold-500 text-navy-950 font-sans font-medium text-sm uppercase tracking-wide hover:bg-gold-400 transition-colors duration-200"
            >
              Browse Resources
            </Link>
            <Link
              href="/partner"
              className="px-8 py-3 border border-white/30 text-white font-sans font-medium text-sm uppercase tracking-wide hover:border-white hover:bg-white/5 transition-colors duration-200"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      {/* GODFIDENCE Feature */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex justify-center">
              <Image
                src="/images/resource-1.png"
                alt="GODFIDENCE cover"
                width={480}
                height={480}
                className="w-full max-w-sm shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-display text-5xl lg:text-6xl uppercase tracking-wider text-white mb-4">
                GODFIDENCE
              </h2>
              <p className="text-slate-light text-lg leading-relaxed mb-8">
                A practical guide to confident faith. Download the free resource that started it all.
              </p>
              <a
                href="/resources/GODFIDENCE.pdf"
                download
                className="inline-block px-8 py-3 bg-gold-500 text-navy-950 font-sans font-medium text-sm uppercase tracking-wide hover:bg-gold-400 transition-colors duration-200"
              >
                Download Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Adelphos Academy Feature */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2 flex justify-center">
              <Image
                src="/images/home-img2.png"
                alt="Adelphos Academy"
                width={480}
                height={480}
                className="w-full max-w-sm shadow-2xl"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="font-display text-5xl lg:text-6xl uppercase tracking-wider text-white mb-4">
                Adelphos Academy
              </h2>
              <p className="text-slate-light text-lg leading-relaxed mb-8">
                Online apologetics training — self-paced, accessible, and always free at the Essentials tier.
              </p>
              <a
                href="https://adelphosacademy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-gold-500 text-gold-500 font-sans font-medium text-sm uppercase tracking-wide hover:bg-gold-500 hover:text-navy-950 transition-colors duration-200"
              >
                Explore Adelphos ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
