type Category = 'jesus' | 'origins' | 'foundations'

const bgColors: Record<Category, string> = {
  jesus:       '#1e3a5f',
  origins:     '#1a3d2b',
  foundations: '#5c1a1a',
}

interface ResourceCardProps {
  title: string
  description: string
  pdfPath: string
  category: Category
}

export default function ResourceCard({ title, description, pdfPath, category }: ResourceCardProps) {
  const bg = bgColors[category]

  return (
    <div className="flex flex-col h-48 w-full">
      <div
        className="relative flex-1 flex flex-col items-center justify-center px-4 text-center overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)',
          }}
        />
        <p className="relative z-10 text-white font-bold text-base uppercase tracking-widest">
          {title}
        </p>
      </div>
      <div className="bg-white py-2 px-4 flex items-center justify-between">
        <span className="text-gray-600 text-sm">{description}</span>
        <a
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1e3a5f] text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-[#16304f] transition-colors ml-3 whitespace-nowrap flex-shrink-0"
        >
          Download →
        </a>
      </div>
    </div>
  )
}
