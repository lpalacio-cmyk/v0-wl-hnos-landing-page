'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Reunión de diagnóstico',
    desc: 'Conversamos sobre la situación actual de tu empresa, tus objetivos y desafíos. Sin costo ni compromiso, para dimensionar dónde podemos generar más valor.',
  },
  {
    number: '02',
    title: 'Propuesta a medida',
    desc: 'Diseñamos un plan de trabajo con alcance, plazos y honorarios claramente definidos. Vos decidís qué contratar, con total transparencia y sin sorpresas.',
  },
  {
    number: '03',
    title: 'Acompañamiento continuo',
    desc: 'Nos sumamos como una extensión de tu equipo: cumplimos vencimientos, generamos reportes para la dirección y proponemos oportunidades todo el año.',
  },
]

export default function HowWeWorkSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-24 px-5 sm:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="label-pill"
          >
            ¿Cómo trabajamos juntos?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="mt-4 font-sans font-bold text-[1.625rem] sm:text-[2rem] text-navy text-balance"
          >
            Simple, transparente y a tu medida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.13 }}
            className="mt-3 text-[1rem] text-text-secondary leading-[1.7]"
          >
            Tres pasos para empezar, sin compromiso.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-5">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-[44px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px"
            style={{ background: 'linear-gradient(90deg, #e4e8ef 0%, #1595bc33 50%, #e4e8ef 100%)' }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number bubble */}
              <div className="relative z-10 w-[52px] h-[52px] rounded-2xl bg-navy flex items-center justify-center mb-6 shadow-card">
                <span className="font-sans font-bold text-sky text-[16px]">{i + 1}</span>
              </div>

              <div className="bg-surface rounded-xl border border-border p-5 sm:p-6 w-full shadow-card">
                <p className="text-[10px] font-semibold text-text-muted tracking-widest uppercase mb-2">Paso {step.number}</p>
                <h3 className="font-sans font-bold text-[15px] text-navy mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-text-secondary leading-[1.65]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
