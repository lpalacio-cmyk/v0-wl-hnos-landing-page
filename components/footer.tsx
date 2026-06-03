import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, Globe } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Herramientas', href: '#herramientas' },
]

const contact = [
  { icon: <Globe size={14} />, text: 'wlhnos.com', href: 'https://wlhnos.com' },
  { icon: <Mail size={14} />, text: 'estudio@wlhnos.com', href: 'mailto:estudio@wlhnos.com' },
  { icon: <Phone size={14} />, text: '+54 9 3834 506588', href: 'tel:+5493834506588' },
]

export default function Footer() {
  return (
    <footer className="bg-wl-navy text-white/70 font-body">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/images/logo.png"
                alt="WL Hnos. & Asoc."
                width={32}
                height={32}
                className="brightness-0 invert opacity-90"
              />
              <span className="font-sans font-[700] text-white text-sm">WL Hnos. &amp; Asoc.</span>
            </div>
            <p className="text-xs leading-relaxed text-white/50 max-w-[220px]">
              Asesoramiento Financiero Integral · Catamarca y NOA
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-sans font-[700] text-white text-[13px] mb-4 tracking-wide">Navegación</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/55 hover:text-wl-cyan transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-[700] text-white text-[13px] mb-4 tracking-wide">Contacto</h4>
            <ul className="space-y-2.5">
              {contact.map((c) => (
                <li key={c.text}>
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/55 hover:text-wl-cyan transition-colors duration-200"
                  >
                    <span className="text-wl-cyan/70">{c.icon}</span>
                    {c.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} WL Hnos. &amp; Asoc. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30 max-w-sm text-right leading-relaxed">
            Herramientas orientativas; no reemplazan el asesoramiento profesional personalizado.
          </p>
        </div>
      </div>
    </footer>
  )
}
