'use client'

import { BarChart3, Receipt, BookOpen, Users } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: BarChart3,
    title: 'Gestión financiera estratégica',
    desc: 'Centralizamos tu información, armamos tableros de flujo de caja, rentabilidad y ciclo de capital, y te acompañamos de forma continua.',
    tag: 'Finanzas',
  },
  {
    icon: Receipt,
    title: 'Impuestos optimizados y al día',
    desc: 'Cumplimos todas tus obligaciones fiscales mientras reducimos tu carga impositiva dentro del marco legal: IVA, Ingresos Brutos, Ganancias, Bienes Personales, inscripciones y planes de pago.',
    tag: 'Impuestos',
  },
  {
    icon: BookOpen,
    title: 'Contabilidad ordenada y auditada',
    desc: 'Teneduría online, balances y estados contables anuales, y auditoría externa con informe del auditor independiente.',
    tag: 'Contabilidad',
  },
  {
    icon: Users,
    title: 'Gestión laboral y de nóminas',
    desc: 'Cubrimos toda la operatoria laboral: liquidación de haberes, recibos y cargas sociales, altas y bajas de personal, Libro de Sueldos Digital y Formulario 931.',
    tag: 'Laboral',
  },
]

export default function ServicesSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-20 sm:py-24 px-5 sm:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="label-pill"
          >
            Nuestros servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.07 }}
            className="mt-4 font-sans font-bold text-[1.625rem] sm:text-[2rem] text-navy text-balance max-w-[520px]"
          >
            Todo el ciclo financiero de tu empresa, cubierto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.13 }}
            className="mt-3 text-[1rem] text-text-secondary leading-[1.7] max-w-[420px]"
          >
            Trabajamos sobre las áreas que ordenan tu gestión y potencian tu crecimiento.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="bg-surface rounded-xl border border-border p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/6 flex items-center justify-center text-navy shrink-0">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="mt-1 text-[11px] font-semibold text-text-muted bg-surface-3 px-2.5 py-1 rounded-full border border-border-soft">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-[15px] text-navy leading-snug mb-2.5">
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-text-secondary leading-[1.65]">
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
