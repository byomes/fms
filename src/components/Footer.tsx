import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: 'https://adelphosacademy.com', label: 'Adelphos ↗', external: true },
  { href: '/speaking', label: 'Speaking' },
  { href: '/partner', label: 'Partner' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <p className="font-display text-xl uppercase tracking-widest text-gold-400">
            Learn. Defend. Share.
          </p>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(link =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-light hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-light hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-slate-light text-center">
            <a
              href="mailto:info@faithmakessense.com"
              className="hover:text-white transition-colors duration-200"
            >
              info@faithmakessense.com
            </a>
            <a
              href="mailto:bill@faithmakessense.com"
              className="hover:text-white transition-colors duration-200"
            >
              bill@faithmakessense.com
            </a>
          </div>

          <p className="text-xs text-navy-600">
            © 2025 Faith Makes Sense
          </p>
        </div>
      </div>
    </footer>
  )
}
