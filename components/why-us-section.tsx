'use client'

import { Award, Layers, Eye, Shield } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  {
    icon: Award,
    title: 'Experiencia comprobada',
    desc: 'Más de 7 años acompañando a empresas del NOA, con actualización normativa permanente y rigor técnico.',
    number: '01',
  },
  {
    icon: Layers,
    title: 'Una única firma, todas las áreas',
    desc: 'Asesoramiento tributario, contable, laboral, financiero y de mercado de capitales bajo un mismo equipo coordinado.',
    number: '02',
  },
  {
    icon: Eye,
    title: 'Visión integral y estratégica',
    desc: 'No solo cumplimos obligaciones: anticipamos riesgos y proponemos oportunidades de mejora continua para tu negocio.',
    number: '03',
  },
  {
    icon: Shield,
    title: 'Confidencialidad y rigor',
    desc: 'Manejo discreto de la información sensible de tu empresa, con los más altos estándares profesionales y éticos.',
    number: '04',
  },
]

export default function WhyUsSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-24 px-5 sm:px-8 bg-surface-2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="label-pill"
          >
            ¿Por qué elegirnos?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="mt-4 font-sans font-bold text-[1.625rem] sm:text-[2rem] text-navy text-balance max-w-[500px]"
          >
            Sociedad de profesionales en Ciencias Económicas
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-surface rounded-xl border border-border p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center text-sky shrink-0">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-[12px] font-semibold text-border group-hover:text-sky/40 transition-colors select-none">
                    {r.number}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-[15px] text-navy leading-snug mb-2.5">
                  {r.title}
                </h3>
                <p className="text-[13.5px] text-text-secondary leading-[1.65]">
                  {r.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
