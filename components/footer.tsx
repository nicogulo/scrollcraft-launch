import Link from 'next/link'

const columns = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#changelog' },
    ],
  },
  {
    heading: 'Developers',
    links: [
      { label: 'Docs', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'Examples', href: '#examples' },
      { label: 'GitHub', href: '#github' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-white font-semibold text-lg tracking-tight">
              ScrollCraft
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
              Craft immersive scroll experiences that captivate and convert.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ScrollCraft. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#privacy" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Privacy
            </Link>
            <Link href="#terms" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
