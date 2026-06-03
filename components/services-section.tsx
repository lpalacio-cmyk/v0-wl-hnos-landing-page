'use client'

import { BarChart3, Receipt, BookOpen, Users } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.8} />,
    title: 'Gestión financiera estratégica',
    desc: 'Centralizamos tu información y armamos tableros de flujo de caja, rentabilidad y costo de capital, con acompañamiento continuo.',
  },
  {
    icon: <Receipt size={22} strokeWidth={1.8} />,
    title: 'Impuestos optimizados y al día',
    desc: 'Cumplimos tus obligaciones fiscales mientras reducimos tu carga impositiva dentro del marco legal: IVA, Ingresos Brutos, Ganancias, Bienes Personales, inscripciones y planes de pago.',
  },
  {
    icon: <BookOpen size={22} strokeWidth={1.8} />,
    title: 'Contabilidad ordenada y auditada',
    desc: 'Teneduría online, balances y estados contables anuales, y auditoría externa con informe del auditor independiente.',
  },
  {
    icon: <Users size={22} strokeWidth={1.8} />,
    title: 'Gestión laboral y de nóminas',
    desc: 'Cubrimos toda la operatoria laboral: liquidación de haberes, recibos y cargas sociales, altas y bajas de personal, Libro de Sueldos Digital y Formulario 931.',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
      <div className="w-11 h-11 rounded-xl bg-wl-navy/6 flex items-center justify-center text-wl-navy mb-5">
        {service.icon}
      </div>
      <h3 className="font-sans font-[700] text-wl-navy text-[15px] leading-snug mb-2.5">
        {service.title}
      </h3>
      <p className="font-body text-sm text-wl-gray leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  )
}

export default function ServicesSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="py-24 px-6 bg-wl-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headRef} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center text-wl-cyan font-body font-[600] text-xs tracking-widest uppercase bg-wl-cyan/8 border border-wl-cyan/20 rounded-full px-4 py-1.5"
          >
            Nuestros servicios
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 font-sans font-[700] text-3xl sm:text-4xl text-wl-navy text-balance"
          >
            Todo el ciclo financiero de tu empresa, cubierto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 font-body text-base text-wl-gray max-w-lg mx-auto leading-relaxed"
          >
            Trabajamos sobre las áreas que ordenan tu gestión y potencian tu crecimiento.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
