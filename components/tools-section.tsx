'use client'

import Link from 'next/link'
import { ArrowRight, Calculator, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const tools = [
  {
    icon: <Calculator size={22} strokeWidth={1.8} />,
    title: 'Calculadora de precio de venta',
    desc: 'Descomponé tu precio hasta el bolsillo real —impuestos, comisiones y costos— y descubrí cuánto deberías cobrar para alcanzar el margen que buscás.',
    href: '/precio',
    badge: 'Precio de venta',
    color: 'wl-cyan',
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.8} />,
    title: 'Calculadora de punto de equilibrio',
    desc: 'Conocé cuánto necesitás vender para cubrir todos tus costos y a partir de qué punto tu negocio empieza a generar ganancia.',
    href: '/equilibrio',
    badge: 'Punto de equilibrio',
    color: 'wl-navy',
  },
]

function ToolCard({ tool, index }: { tool: typeof tools[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
    >
      <Link
        href={tool.href}
        className="group flex flex-col h-full bg-wl-white border border-wl-border rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        {/* Icon */}
        <div className="w-11 h-11 rounded-xl bg-wl-cyan/10 flex items-center justify-center text-wl-cyan mb-5 group-hover:bg-wl-cyan group-hover:text-white transition-all duration-300">
          {tool.icon}
        </div>

        {/* Mini UI mockup */}
        <div className="mb-5 rounded-xl border border-wl-border bg-wl-bg p-3 overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="w-2 h-2 rounded-full bg-wl-border" />
            <div className="w-2 h-2 rounded-full bg-wl-border" />
            <div className="w-2 h-2 rounded-full bg-wl-border" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-3/5 bg-wl-navy/10 rounded-full" />
            <div className="h-7 bg-white border border-wl-border rounded-lg flex items-center px-2 gap-1">
              <span className="text-[9px] text-wl-gray-light font-body">$</span>
              <div className="h-1.5 w-14 bg-wl-cyan/30 rounded-full" />
            </div>
            <div className="h-2 w-2/5 bg-wl-navy/10 rounded-full" />
            <div className="h-7 bg-white border border-wl-border rounded-lg flex items-center px-2 gap-1">
              <span className="text-[9px] text-wl-gray-light font-body">%</span>
              <div className="h-1.5 w-10 bg-wl-cyan/30 rounded-full" />
            </div>
            <div className="h-8 rounded-lg bg-wl-cyan/15 flex items-center justify-center">
              <div className="h-2 w-20 bg-wl-cyan/40 rounded-full" />
            </div>
          </div>
        </div>

        <h3 className="font-sans font-[700] text-wl-navy text-[15px] leading-snug mb-2">
          {tool.title}
        </h3>
        <p className="font-body text-sm text-wl-gray leading-relaxed flex-1">
          {tool.desc}
        </p>

        <div className="mt-5 inline-flex items-center gap-1.5 text-wl-cyan font-body font-[600] text-sm group-hover:gap-2.5 transition-all duration-200">
          Abrir herramienta
          <ArrowRight size={14} />
        </div>
      </Link>
    </motion.div>
  )
}

export default function ToolsSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="herramientas" className="py-24 px-6 bg-wl-bg">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-1.5 text-wl-cyan font-body font-[600] text-xs tracking-widest uppercase bg-wl-cyan/8 border border-wl-cyan/20 rounded-full px-4 py-1.5"
          >
            Herramientas gratuitas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 font-sans font-[700] text-3xl sm:text-4xl text-wl-navy text-balance"
          >
            Probá nuestras herramientas de forma gratuita
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 font-body text-base text-wl-gray max-w-xl mx-auto leading-relaxed"
          >
            Cargá los datos de tu negocio requeridos y llevate un diagnóstico al instante.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((t, i) => (
            <ToolCard key={t.href} tool={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
