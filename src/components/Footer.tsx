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
    <footer className="bg-blue-950 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          <p className="font-display text-xl uppercase tracking-widest text-white">
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
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-white/70 text-center items-center">
            <a
              href="mailto:info@faithmakessense.com"
              className="hover:text-white transition-colors duration-200"
            >
              info@faithmakessense.com
            </a>
            <a
              href="https://www.facebook.com/FaithMakesSense/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
          </div>

          <p className="text-xs text-white/40">
            © 2026 Faith Makes Sense
          </p>
        </div>
      </div>
    </footer>
  )
}
