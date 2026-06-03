'use client'

import Link from 'next/link'
import { TrendingUp, PiggyBank, FileCheck } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WA_LINK = 'https://wa.link/69asix'

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L.057 23.882l6.197-1.425A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.044-1.4l-.361-.215-3.741.981.998-3.648-.235-.374A9.817 9.817 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
    </svg>
  )
}

const points = [
  {
    Icon: TrendingUp,
    title: 'Financiamiento a tu medida',
    desc: 'Diseñamos la estrategia de endeudamiento óptima y elegimos la mejor fuente para tu empresa.',
  },
  {
    Icon: PiggyBank,
    title: 'Inversión de excedentes',
    desc: 'Hacé rendir la liquidez de tu empresa con análisis de rentabilidad y gestión del riesgo.',
  },
  {
    Icon: FileCheck,
    title: 'Legajos y garantías',
    desc: 'Armamos legajos crediticios profesionales y gestionamos avales para aprovechar más rápido y en mejores condiciones.',
  },
]

export default function CapitalMarketsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-24 px-5 sm:px-8 bg-navy relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #1595bc 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center text-sky font-sans font-semibold text-[11px] tracking-[0.1em] uppercase bg-sky/15 border border-sky/20 rounded-full px-3.5 py-1"
            >
              Lo que nos hace diferentes
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-5 font-sans font-bold text-[1.625rem] sm:text-[2rem] text-white leading-[1.2] text-balance"
            >
              Conectamos tu PyME al mercado de capitales
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.17 }}
              className="mt-4 text-[15px] text-white/60 leading-[1.75]"
            >
              Te abrimos las puertas a fuentes de financiamiento e inversión que suelen quedar reservadas al mundo corporativo, para que diversifiques, reduzcas tu costo financiero y hagas rendir tu tesorería.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-8"
            >
              <Link
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white font-sans font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-all duration-150 shadow-sm"
              >
                <WhatsAppIcon size={14} />
                Descubrí las oportunidades para tu PyME
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/8 transition-colors duration-150"
              >
                <div className="w-9 h-9 rounded-lg bg-sky/20 flex items-center justify-center text-sky shrink-0 mt-0.5">
                  <p.Icon size={18} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-[14px] text-white mb-1">{p.title}</h3>
                  <p className="text-[13px] text-white/55 leading-[1.65]">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
