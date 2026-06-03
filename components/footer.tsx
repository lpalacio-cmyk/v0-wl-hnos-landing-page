import Image from 'next/image'
import Link from 'next/link'
import { Globe, Mail, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Herramientas', href: '#herramientas' },
]

const legalLinks = [
  { label: 'Calculadora de precio de venta', href: '/precio' },
  { label: 'Calculadora de punto de equilibrio', href: '/equilibrio' },
]

const contact = [
  { Icon: Globe, text: 'wlhnos.com', href: 'https://wlhnos.com' },
  { Icon: Mail, text: 'estudio@wlhnos.com', href: 'mailto:estudio@wlhnos.com' },
  { Icon: Phone, text: '+54 9 3834 506588', href: 'tel:+5493834506588' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080f21] text-white/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-8">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo.png"
                alt="WL Hnos. & Asoc. isotipo"
                width={30}
                height={30}
                className="brightness-0 invert opacity-80"
              />
              <span className="font-sans font-semibold text-[13.5px] text-white/80">
                WL Hnos. &amp; Asoc.
              </span>
            </div>
            <p className="text-[12.5px] leading-[1.7] text-white/40 max-w-[200px]">
              Asesoramiento Financiero Integral · Catamarca y NOA
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-sans font-semibold text-[11px] text-white/30 tracking-[0.1em] uppercase mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-sans font-semibold text-[11px] text-white/30 tracking-[0.1em] uppercase mb-5">
              Herramientas
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-[11px] text-white/30 tracking-[0.1em] uppercase mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              {contact.map((c) => (
                <li key={c.text}>
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-colors duration-150"
                  >
                    <c.Icon size={13} className="text-sky/60 shrink-0" />
                    {c.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11.5px] text-white/25">
            © {new Date().getFullYear()} WL Hnos. &amp; Asoc. Todos los derechos reservados.
          </p>
          <p className="text-[11.5px] text-white/20 sm:max-w-xs sm:text-right leading-[1.6]">
            Herramientas orientativas; no reemplazan el asesoramiento profesional.
          </p>
        </div>
      </div>
    </footer>
  )
}
