'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.link/69asix'

const stats = [
  { value: '+7 años', label: 'de trayectoria' },
  { value: '5 áreas', label: 'en un solo equipo' },
  { value: 'NOA', label: 'Catamarca y la región' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 px-6 bg-wl-white overflow-hidden"
    >
      {/* Subtle background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full bg-wl-cyan/5 blur-3xl" />
        <div className="absolute top-40 -left-32 w-[320px] h-[320px] rounded-full bg-wl-navy/4 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 text-wl-cyan font-body font-[600] text-xs tracking-widest uppercase bg-wl-cyan/8 border border-wl-cyan/20 rounded-full px-4 py-1.5">
            Asesoramiento financiero integral
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-sans font-[700] text-4xl sm:text-5xl lg:text-[52px] leading-[1.12] text-wl-navy text-balance"
        >
          El socio estratégico para las{' '}
          <span className="text-wl-cyan">decisiones financieras</span>{' '}
          de tu PyME
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 font-body text-base sm:text-lg text-wl-gray leading-relaxed max-w-2xl mx-auto text-pretty"
        >
          Logramos que tomes mejores decisiones financieras a través de una visión integral y estratégica de tu empresa.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-wl-green hover:bg-[#178035] text-white font-body font-[600] text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L.057 23.882l6.197-1.425A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.044-1.4l-.361-.215-3.741.981.998-3.648-.235-.374A9.817 9.817 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
            </svg>
            Agendar reunión
          </Link>
          <Link
            href="#herramientas"
            className="inline-flex items-center gap-2 border-2 border-wl-navy/20 hover:border-wl-cyan text-wl-navy hover:text-wl-cyan font-body font-[600] text-sm px-6 py-[10px] rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Probar herramientas gratis
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 inline-flex flex-wrap justify-center gap-x-10 gap-y-5 bg-wl-bg border border-wl-border rounded-2xl px-10 py-5"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <span className="font-sans font-[700] text-xl text-wl-navy">{s.value}</span>
              <span className="font-body text-xs text-wl-gray">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
