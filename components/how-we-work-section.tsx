'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Reunión de diagnóstico',
    desc: 'Conversamos sobre la situación actual de tu empresa, tus objetivos y tus desafíos. Sin costo ni compromiso, para dimensionar dónde podemos generar más valor.',
  },
  {
    number: '02',
    title: 'Propuesta a medida',
    desc: 'Diseñamos un plan de trabajo con alcance, plazos y honorarios claramente definidos. Vos decidís qué contratar, con total transparencia y sin sorpresas.',
  },
  {
    number: '03',
    title: 'Acompañamiento continuo',
    desc: 'Nos sumamos como una extensión de tu equipo: cumplimos vencimientos, generamos reportes para la dirección y proponemos oportunidades a lo largo de todo el año.',
  },
]

export default function HowWeWorkSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6 bg-wl-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center text-wl-cyan font-body font-[600] text-xs tracking-widest uppercase bg-wl-cyan/8 border border-wl-cyan/20 rounded-full px-4 py-1.5"
          >
            ¿Cómo trabajamos juntos?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 font-sans font-[700] text-3xl sm:text-4xl text-wl-navy text-balance"
          >
            Simple, transparente y a tu medida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 font-body text-base text-wl-gray"
          >
            Tres pasos para empezar, sin compromiso.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-6">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[calc(33.33%+16px)] right-[calc(33.33%+16px)] h-px bg-wl-border" aria-hidden="true" />

          {steps.map((step, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, { once: true, margin: '-60px' })

            return (
              <motion.div
                key={step.number}
                ref={ref}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number bubble */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-wl-navy flex items-center justify-center mb-6 shadow-md">
                  <span className="font-sans font-[700] text-wl-cyan text-lg">{i + 1}</span>
                </div>

                <div className="bg-wl-bg border border-wl-border rounded-2xl p-6 w-full">
                  <h3 className="font-sans font-[700] text-wl-navy text-[15px] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-wl-gray leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
