import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Pastor, apologist, and founder of Faith Makes Sense. Dr. Bill Yomes on why apologetics matters for the local church.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/headshot.png"
                alt="Dr. Bill Yomes"
                width={480}
                height={480}
                className="w-full max-w-sm shadow-2xl object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-wider text-blue-900 mb-8">
                About
              </h1>
              <blockquote className="text-gray-600 text-lg leading-relaxed border-l-2 border-blue-700 pl-6 mb-8 italic">
                &ldquo;I didn&apos;t set out to be an apologist. I set out to follow Jesus — and I kept running into questions that demanded answers. Not just for me, but for the people I was trying to reach.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            <div>
              <h2 className="font-display text-3xl uppercase tracking-wider text-blue-700 mb-4">
                Why This Exists
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Faith shouldn&apos;t feel fragile. Too many Christians lack the tools to engage honest questions. Faith Makes Sense exists to change that — providing free, accessible apologetics resources for everyday believers and the churches that disciple them.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl uppercase tracking-wider text-blue-700 mb-4">
                The Ministry
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Faith Makes Sense produces free apologetics resources available to anyone who downloads them. Through Adelphos Academy, we develop online courses — including an Essentials tier that will always be free. We also support pastor training for church leaders in Uganda, delivering training materials via web-deployed resources.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl uppercase tracking-wider text-blue-700 mb-4">
                About Dr. Bill
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                William CK Yomes is a pastor, apologist, and author based in Wilmington, Delaware. He serves as Senior Pastor of Catalyst Community Church and is the founding apologist of Faith Makes Sense, a nonprofit providing free apologetics and theological education for pastors, leaders, and believers around the world.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                He holds a Master&apos;s Degree in Apologetics from Luther Rice College and Seminary and a Doctor of Ministry in Theology and Apologetics from Liberty University. Through Faith Makes Sense he oversees Adelphos Academy, an online theological education platform, and provides training to a pastor training network in Uganda.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                He writes theology for the church — including He Is Risen and the forthcoming The Wrong Jesus — and children&apos;s fantasy fiction for his family through the Dreamstone Chronicles series.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                He and his wife Melanie share an ever-growing family. He is also a daydreamer, guitar player, and lifelong ice cream superfan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
