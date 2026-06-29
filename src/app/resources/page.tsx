import type { Metadata } from 'next'
import ResourceCard from '@/components/ResourceCard'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Free apologetics resources. No signup required. Download, share, teach.',
}

const jesusResources = [
  {
    title: 'The Historical Jesus',
    description: 'Did Jesus actually exist? Non-Christian sources settle the question.',
    pdfPath: '/resources/The Historical Jesus.pdf',
  },
  {
    title: 'The Divine Jesus',
    description: 'Four times Jesus claimed to be God — and everyone in the room knew it.',
    pdfPath: '/resources/The Divine Jesus.pdf',
  },
  {
    title: 'Jesus the Promised Messiah',
    description: 'Prophet, priest, and king — the one role only Jesus could fill.',
    pdfPath: '/resources/The Promised Messiah.pdf',
  },
  {
    title: 'Messianic Mystery',
    description: 'Five independent streams of prophecy. One person in all of history.',
    pdfPath: '/resources/Messianic Mystery.pdf',
  },
  {
    title: 'Jesus the Miracle Worker',
    description: 'Four categories of miracles that belong exclusively to God.',
    pdfPath: '/resources/Jesus The Miracle Worker.pdf',
  },
  {
    title: 'Jesus the Only Way',
    description: 'Not an arbitrary rule — the shape of the problem demands the solution.',
    pdfPath: '/resources/Jesus The Only Way.pdf',
  },
  {
    title: 'The Case for Miracles',
    description: 'Are miracles even possible? Answering the objections before they\'re asked.',
    pdfPath: '/resources/The Case for Miracles.pdf',
  },
  {
    title: 'Defending the Resurrection',
    description: 'The minimal facts argument — built on evidence skeptics already accept.',
    pdfPath: '/resources/Defending The Resurrection.pdf',
  },
] as const

const originsResources = [
  {
    title: 'The Origin of the Universe',
    description: 'What science and philosophy say about how it all began.',
    pdfPath: '/resources/The Origin of the Universe.pdf',
  },
  {
    title: 'The Age of the Earth',
    description: 'Examining the evidence for the earth\'s age.',
    pdfPath: '/resources/Age of the Earth.pdf',
  },
  {
    title: 'The Fossil Record',
    description: 'What the fossils actually show — and what they don\'t.',
    pdfPath: '/resources/The Fossil Record.pdf',
  },
  {
    title: 'Biological Evolution',
    description: 'A clear-eyed look at the evidence for and against evolution.',
    pdfPath: '/resources/Biological Evolution.pdf',
  },
  {
    title: 'Human Evolution',
    description: 'What the science says about human origins.',
    pdfPath: '/resources/Human Evolution.pdf',
  },
  {
    title: 'The Pre-Flood World',
    description: 'Understanding the world before Noah\'s flood.',
    pdfPath: '/resources/The Pre-Flood World.pdf',
  },
  {
    title: 'The Genesis Flood',
    description: 'The biblical and scientific case for a global flood.',
    pdfPath: '/resources/The Genesis Flood.pdf',
  },
  {
    title: 'Noah and the Corrupted World',
    description: 'The theological context of Noah\'s story.',
    pdfPath: '/resources/Noah and the Corrupted World.pdf',
  },
  {
    title: 'What About Dinosaurs',
    description: 'Dinosaurs, the Bible, and what Christians should know.',
    pdfPath: '/resources/What About Dinosaurs.pdf',
  },
  {
    title: "The Construction of Noah's Ark",
    description: 'How the Ark was built and whether it was feasible.',
    pdfPath: '/resources/The Construction of the Ark.pdf',
  },
] as const

const foundationsResources = [
  {
    title: 'GODFIDENCE',
    description: 'A practical guide to confident faith in God\'s existence.',
    pdfPath: '/resources/GODFIDENCE.pdf',
  },
  {
    title: 'The Big Bible Story',
    description: 'The sweep of Scripture from creation to new creation.',
    pdfPath: '/resources/Big Bible Story.pdf',
  },
  {
    title: 'The Bible Timeline',
    description: 'Key time periods of biblical history at a glance.',
    pdfPath: '/resources/Bible Time Periods.pdf',
  },
  {
    title: 'Bible Study Method',
    description: 'A simple, repeatable method for personal Bible study.',
    pdfPath: '/resources/Bible Study Method.pdf',
  },
  {
    title: 'Worldviews Worksheet',
    description: 'Map the major worldviews and how they answer life\'s big questions.',
    pdfPath: '/resources/Worldviews Worksheet.pdf',
  },
] as const

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-wider text-blue-900 mb-4">
              Resources
            </h1>
            <p className="text-gray-600 text-lg">
              Everything here is free. No signup required. Download, share, teach.
            </p>
          </div>

          {/* About Jesus */}
          <div className="mb-16">
            <div className="bg-[#1e3a5f] py-3 px-4 rounded-md mb-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                About Jesus
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jesusResources.map(r => (
                <ResourceCard key={r.pdfPath} {...r} category="jesus" />
              ))}
            </div>
          </div>

          {/* Science & Origins */}
          <div className="mb-16">
            <div className="bg-[#1a3d2b] py-3 px-4 rounded-md mb-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                Science &amp; Origins
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {originsResources.map(r => (
                <ResourceCard key={r.pdfPath} {...r} category="origins" />
              ))}
            </div>
          </div>

          {/* Bible Foundations */}
          <div className="mb-16">
            <div className="bg-[#5c1a1a] py-3 px-4 rounded-md mb-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                Bible Foundations
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {foundationsResources.map(r => (
                <ResourceCard key={r.pdfPath} {...r} category="foundations" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
