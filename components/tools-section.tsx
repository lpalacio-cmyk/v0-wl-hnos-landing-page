'use client'

import Link from 'next/link'
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tools = [
  {
    icon: Calculator,
    label: 'Precio de venta',
    title: 'Calculadora de precio de venta',
    desc: 'Descomponé tu precio hasta el bolsillo real: impuestos, comisiones y costos. Descubrí cuánto deberías cobrar para alcanzar el margen que buscás.',
    href: '/precio',
    accent: 'sky' as const,
  },
  {
    icon: TrendingUp,
    label: 'Punto de equilibrio',
    title: 'Calculadora de punto de equilibrio',
    desc: 'Conocé cuánto necesitás vender para cubrir todos tus costos y a partir de qué punto tu negocio empieza a generar ganancia.',
    href: '/equilibrio',
    accent: 'navy' as const,
  },
]

const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ToolsSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="herramientas" className="py-20 sm:py-24 px-5 sm:px-8 bg-surface-2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="label-pill"
          >
            Herramientas gratuitas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="mt-4 font-sans font-bold text-[1.625rem] sm:text-[2rem] text-navy text-balance"
          >
            Probá nuestras herramientas de forma gratuita
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.13 }}
            className="mt-3 text-[1rem] text-text-secondary leading-[1.7] max-w-[480px]"
          >
            Cargá los datos de tu negocio y llevate un diagnóstico al instante.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {tools.map((tool, i) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.href}
                custom={i}
                variants={itemAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
              >
                <Link
                  href={tool.href}
                  className="group flex flex-col h-full bg-surface rounded-xl border border-border hover:border-sky/30 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-200"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      tool.accent === 'sky'
                        ? 'bg-sky/10 text-sky group-hover:bg-sky group-hover:text-white'
                        : 'bg-navy/8 text-navy group-hover:bg-navy group-hover:text-white'
                    } transition-all duration-200`}>
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-semibold text-text-muted bg-surface-3 px-2.5 py-1 rounded-full border border-border-soft">
                      {tool.label}
                    </span>
                  </div>

                  {/* Mini mockup */}
                  <div className="mb-5 rounded-lg bg-surface-2 border border-border-soft p-3.5">
                    <div className="space-y-2">
                      <div className="h-2 w-2/5 rounded-full bg-border" />
                      <div className="h-9 rounded-lg bg-surface border border-border-soft flex items-center px-3 gap-2">
                        <span className="text-[11px] text-text-muted font-semibold">$</span>
                        <div className="h-1.5 w-20 rounded-full bg-sky/20" />
                      </div>
                      <div className="h-2 w-1/3 rounded-full bg-border" />
                      <div className="h-9 rounded-lg bg-surface border border-border-soft flex items-center px-3 gap-2">
                        <span className="text-[11px] text-text-muted font-semibold">%</span>
                        <div className="h-1.5 w-14 rounded-full bg-sky/20" />
                      </div>
                      <div className="h-9 rounded-lg bg-sky flex items-center justify-center gap-1.5">
                        <div className="h-2 w-16 rounded-full bg-white/40" />
                      </div>
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-[15px] text-navy leading-snug mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-[13.5px] text-text-secondary leading-[1.65] flex-1">
                    {tool.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-sky text-[13.5px] font-semibold group-hover:gap-2.5 transition-all duration-200">
                    Abrir herramienta
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
