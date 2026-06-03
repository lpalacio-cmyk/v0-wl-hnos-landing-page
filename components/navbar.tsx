'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const WA_LINK = 'https://wa.link/69asix'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Herramientas', href: '#herramientas' },
]

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L.057 23.882l6.197-1.425A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.044-1.4l-.361-.215-3.741.981.998-3.648-.235-.374A9.817 9.817 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/96 backdrop-blur-md shadow-nav border-b border-border'
          : 'bg-surface border-b border-border-soft'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[60px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="#inicio" className="flex items-center gap-2.5 shrink-0 group" aria-label="WL Hnos. & Asoc. — Inicio">
          <Image
            src="/images/logo.png"
            alt="WL Hnos. & Asoc. isotipo"
            width={34}
            height={34}
            className="transition-transform duration-300 group-hover:scale-[1.04]"
            priority
          />
          <span className="hidden sm:block font-sans font-semibold text-[14px] text-navy leading-tight">
            WL Hnos. &amp; Asoc.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-[13.5px] font-medium text-text-secondary hover:text-navy px-3.5 py-2 rounded-lg hover:bg-surface-2 transition-all duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 bg-green hover:bg-green-dark text-white font-sans font-semibold text-[13px] px-4 py-2 rounded-lg transition-all duration-150 shadow-sm"
          >
            <WhatsAppIcon size={14} />
            Agendar reunión
          </Link>

          <button
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-navy hover:bg-surface-2 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-surface border-t border-border ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-5 py-5 gap-1" aria-label="Navegación móvil">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-sm font-medium text-text-secondary hover:text-navy px-3 py-2.5 rounded-lg hover:bg-surface-2 transition-all"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-2 mt-1 border-t border-border">
            <Link
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 bg-green text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-lg mt-2 transition-colors hover:bg-green-dark"
            >
              <WhatsAppIcon size={14} />
              Agendar reunión
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
