import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Free apologetics resources. No signup required. Download, share, teach.',
}

const resources = [
  { image: '/images/resource-1.png',  pdf: 'GODFIDENCE.pdf',                   title: 'GODFIDENCE' },
  { image: '/images/resource-2.jpg',  pdf: 'Big Bible Story.pdf',               title: 'The Big Bible Story' },
  { image: '/images/resource-3.jpg',  pdf: 'Bible Time Periods.pdf',            title: 'The Bible Timeline' },
  { image: '/images/resource-4.jpg',  pdf: 'Bible Study Method.pdf',            title: 'Bible Study Method' },
  { image: '/images/resource-5.jpg',  pdf: 'Worldviews Worksheet.pdf',          title: 'Worldviews Worksheet' },
  { image: '/images/resource-6.jpg',  pdf: 'The Origin of the Universe.pdf',    title: 'The Origin of the Universe' },
  { image: '/images/resource-7.png',  pdf: 'Age of the Earth.pdf',              title: 'The Age of the Earth' },
  { image: '/images/resource-8.png',  pdf: 'The Fossil Record.pdf',             title: 'The Fossil Record' },
  { image: '/images/resource-9.png',  pdf: 'Biological Evolution.pdf',          title: 'Biological Evolution' },
  { image: '/images/resource-10.png', pdf: 'Human Evolution.pdf',               title: 'Human Evolution' },
  { image: '/images/resource-11.jpg', pdf: 'The Pre-Flood World.pdf',           title: 'The Pre-Flood World' },
  { image: '/images/resource-12.jpg', pdf: 'The Genesis Flood.pdf',             title: 'The Genesis Flood' },
  { image: '/images/resource-13.jpg', pdf: 'Noah and the Corrupted World.pdf',  title: 'Noah and the Corrupted World' },
  { image: '/images/resource-14.jpg', pdf: 'What About Dinosaurs.pdf',          title: 'What About Dinosaurs' },
  { image: null,                       pdf: 'The Construction of the Ark.pdf',   title: "The Construction of Noah's Ark" },
]

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.pdf}
                className="bg-white border border-gray-200 flex flex-col"
              >
                {resource.image ? (
                  <div className="relative aspect-[3/4] w-full bg-gray-50 p-4">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] w-full bg-gray-100 flex items-center justify-center p-8">
                    <p className="font-display text-2xl uppercase tracking-wider text-blue-900 text-center">
                      {resource.title}
                    </p>
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1 gap-4">
                  <h2 className="font-sans font-medium text-blue-900 text-base leading-tight">
                    {resource.title}
                  </h2>
                  <a
                    href={`/resources/${resource.pdf}`}
                    download
                    className="mt-auto inline-block text-center px-6 py-2 bg-blue-700 text-white font-sans font-medium text-sm uppercase tracking-wide hover:bg-blue-800 transition-colors duration-200"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
