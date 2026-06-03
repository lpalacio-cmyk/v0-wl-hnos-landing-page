'use client'

import { Award, Layers, Eye, Shield } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  {
    icon: <Award size={22} strokeWidth={1.8} />,
    title: 'Experiencia comprobada',
    desc: 'Más de 7 años acompañando a empresas del NOA, con actualización normativa permanente y rigor técnico.',
  },
  {
    icon: <Layers size={22} strokeWidth={1.8} />,
    title: 'Una única firma, todas las áreas',
    desc: 'Asesoramiento tributario, contable, laboral, financiero y de mercado de capitales bajo un mismo equipo coordinado.',
  },
  {
    icon: <Eye size={22} strokeWidth={1.8} />,
    title: 'Visión integral y estratégica',
    desc: 'No solo cumplimos obligaciones: anticipamos riesgos y proponemos oportunidades de mejora continua para tu negocio.',
  },
  {
    icon: <Shield size={22} strokeWidth={1.8} />,
    title: 'Confidencialidad y rigor',
    desc: 'Manejo discreto de la información sensible de tu empresa, con los más altos estándares profesionales y éticos.',
  },
]

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="bg-wl-white border border-wl-border rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="w-11 h-11 rounded-xl bg-wl-cyan/10 flex items-center justify-center text-wl-cyan mb-5">
        {reason.icon}
      </div>
      <h3 className="font-sans font-[700] text-wl-navy text-[15px] leading-snug mb-2.5">
        {reason.title}
      </h3>
      <p className="font-body text-sm text-wl-gray leading-relaxed">
        {reason.desc}
      </p>
    </motion.div>
  )
}

export default function WhyUsSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6 bg-wl-bg">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center text-wl-cyan font-body font-[600] text-xs tracking-widest uppercase bg-wl-cyan/8 border border-wl-cyan/20 rounded-full px-4 py-1.5"
          >
            ¿Por qué elegirnos?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 font-sans font-[700] text-3xl sm:text-4xl text-wl-navy text-balance"
          >
            Sociedad de profesionales en Ciencias Económicas
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} reason={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
