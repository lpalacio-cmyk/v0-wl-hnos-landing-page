'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const WA_LINK = 'https://wa.link/69asix'

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.523 5.847L.057 23.882l6.197-1.425A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.785 9.785 0 01-5.044-1.4l-.361-.215-3.741.981.998-3.648-.235-.374A9.817 9.817 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
    </svg>
  )
}

const stats = [
  { value: '+7', unit: 'años', label: 'de trayectoria' },
  { value: '5', unit: 'áreas', label: 'en un solo equipo' },
  { value: 'NOA', unit: '', label: 'Catamarca y la región' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="inicio" className="pt-[60px] bg-surface">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center py-16 sm:py-20 lg:py-24">

          {/* Left column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.div variants={item}>
              <span className="label-pill">Asesoramiento financiero integral</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 font-sans font-bold text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] leading-[1.1] text-navy text-balance"
            >
              El socio estratégico para las{' '}
              <span className="text-sky">decisiones financieras</span>{' '}
              de tu PyME
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-[1rem] sm:text-[1.0625rem] text-text-secondary leading-[1.7] max-w-[500px] text-pretty"
            >
              Logramos que tomes mejores decisiones financieras a través de una visión integral y estratégica de tu empresa.
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <Link
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white font-sans font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-all duration-150 shadow-sm hover:shadow-md"
              >
                <WhatsAppIcon size={15} />
                Agendar reunión
              </Link>
              <Link
                href="#herramientas"
                className="inline-flex items-center gap-1.5 border border-border-soft hover:border-sky/40 text-text-secondary hover:text-sky bg-surface-2 hover:bg-sky-light font-sans font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-all duration-150"
              >
                Probar herramientas gratis
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="mt-10 flex items-center gap-8 sm:gap-10">
              {stats.map((s, i) => (
                <div key={i} className={i > 0 ? 'pl-8 sm:pl-10 border-l border-border' : ''}>
                  <p className="font-sans font-bold text-[1.35rem] text-navy leading-none">
                    {s.value}
                    {s.unit && <span className="text-[1rem] ml-0.5 font-semibold text-sky">{s.unit}</span>}
                  </p>
                  <p className="mt-1 text-[12px] text-text-muted font-medium">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
            aria-hidden="true"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="border-t border-border" />
    </section>
  )
}

// Sparkline mini SVG path from an array of values (0–100)
function Sparkline({ values, color }: { values: number[]; color: string }) {
  const w = 44
  const h = 20
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const pts = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * w
      const y = h - ((v - min) / range) * h
      return `${x},${y}`
    })
    .join(' ')
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" className="shrink-0">
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Cashflow SVG curve chart
function CashflowChart({ labels }: { labels: string[] }) {
  const w = 340
  const h = 70
  // data: millions ARS
  const data = [3.1, 4.2, 2.8, 5.0, 3.6, 4.8]
  const minLine = 3.0 // "mínimo operativo"
  const alertIdx = 2 // índice con punto de atención
  const max = Math.max(...data) + 0.5
  const min = Math.min(...data, minLine) - 0.3
  const range = max - min

  const toX = (i: number) => 12 + (i / (data.length - 1)) * (w - 24)
  const toY = (v: number) => h - 8 - ((v - min) / range) * (h - 16)

  const pts = data.map((v, i) => `${toX(i)},${toY(v)}`).join(' ')
  const minY = toY(minLine)

  // area fill under the curve (closed path)
  const areaPath =
    `M ${toX(0)},${toY(data[0])} ` +
    data.map((v, i) => `L ${toX(i)},${toY(v)}`).join(' ') +
    ` L ${toX(data.length - 1)},${h} L ${toX(0)},${h} Z`

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      {/* Area fill */}
      <path d={areaPath} fill="#1595BC" fillOpacity="0.08" />
      {/* Min line */}
      <line x1={12} y1={minY} x2={w - 12} y2={minY} stroke="#1595BC" strokeWidth="1" strokeDasharray="4 3" opacity="0.45" />
      <text x={w - 10} y={minY - 3} textAnchor="end" fontSize="7" fill="#1595BC" opacity="0.7">mín. op.</text>
      {/* Alert zone — very subtle */}
      <rect
        x={toX(alertIdx) - 10}
        y={0}
        width={20}
        height={h}
        fill="#EF4444"
        fillOpacity="0.05"
        rx="2"
      />
      {/* Curve */}
      <polyline points={pts} fill="none" stroke="#1595BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Alert dot */}
      <circle cx={toX(alertIdx)} cy={toY(data[alertIdx])} r="3.5" fill="#F59E0B" stroke="white" strokeWidth="1.2" />
      {/* Normal dots */}
      {data.map((v, i) =>
        i !== alertIdx ? (
          <circle key={i} cx={toX(i)} cy={toY(v)} r="2.5" fill="#1595BC" stroke="white" strokeWidth="1" />
        ) : null
      )}
      {/* X-axis labels */}
      {labels.map((lbl, i) => (
        <text key={i} x={toX(i)} y={h - 1} textAnchor="middle" fontSize="7.5" fill="#8C96A6">
          {lbl}
        </text>
      ))}
    </svg>
  )
}

function DashboardMockup() {
  // Dynamic: last 6 months ending this month
  const now = new Date()
  const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  const chartLabels = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - 5 + i, 1)
    return monthNames[d.getMonth()]
  })

  // Dynamic due dates for current month
  const m = now.getMonth() // 0-based
  const y = now.getFullYear()
  const pad = (n: number) => String(n).padStart(2, '0')
  const fmt = (day: number, mo: number, yr: number) => `${pad(day)}/${pad(mo + 1)}/${yr}`

  // IVA: 18th of current month; if already past, next month
  const ivaDay = 18
  const ivaDone = now.getDate() > ivaDay
  const ivaDate = fmt(ivaDay, ivaDone ? (m + 1) % 12 : m, ivaDone && m === 11 ? y + 1 : y)
  const ivaLabel = `IVA — ${monthNames[ivaDone ? (m + 1) % 12 : m]}`

  // Ingresos Brutos: 22nd of current month
  const iibbDay = 22
  const iibbDate = fmt(iibbDay, m, y)

  // Formulario 931: 12th of next month
  const nextM = (m + 1) % 12
  const nextY = m === 11 ? y + 1 : y
  const f931Date = fmt(12, nextM, nextY)

  const dues = [
    { label: ivaLabel, date: ivaDate, done: ivaDone },
    { label: 'Ingresos Brutos', date: iibbDate, done: false },
    { label: 'Formulario 931', date: f931Date, done: false },
  ]

  const kpis = [
    {
      label: 'Ventas',
      value: '$4.8M',
      pct: '+11%',
      up: true,
      spark: [30, 42, 38, 55, 48, 62],
      color: '#1595BC',
    },
    {
      label: 'Resultado',
      value: '+18.4%',
      pct: '+3.2pp',
      up: true,
      spark: [20, 28, 22, 35, 30, 42],
      color: '#1C913D',
    },
    {
      label: 'Saldo de caja',
      value: '$920K',
      pct: '-6%',
      up: false,
      spark: [60, 55, 68, 50, 45, 40],
      color: '#F59E0B',
    },
  ]

  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-border bg-surface shadow-card-hover overflow-hidden">
      {/* Window bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface-2">
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="w-2.5 h-2.5 rounded-full bg-border" />
        <span className="ml-3 text-[11px] text-text-muted font-medium">Panel de gestión — WL Asesores</span>
      </div>

      <div className="p-5 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-2.5">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="bg-surface-2 rounded-xl p-3 border border-border-soft flex flex-col gap-1">
              <p className="text-[9.5px] text-text-muted font-semibold uppercase tracking-wide leading-none">{kpi.label}</p>
              <p className="font-bold text-[13px] text-navy leading-tight">{kpi.value}</p>
              <div className="flex items-center justify-between gap-1">
                <span
                  className={`text-[10px] font-semibold flex items-center gap-0.5 ${kpi.up ? 'text-green' : 'text-amber-500'}`}
                >
                  {kpi.up ? '▲' : '▼'} {kpi.pct}
                </span>
                <Sparkline values={kpi.spark} color={kpi.color} />
              </div>
            </div>
          ))}
        </div>

        {/* Cashflow chart */}
        <div className="rounded-xl border border-border-soft bg-surface-2 p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-[11px] font-semibold text-navy">Flujo de caja mensual</p>
              <p className="text-[9.5px] text-text-muted">Últimos 6 meses · ● atención de caja</p>
            </div>
            <span className="text-[10px] text-sky font-semibold bg-sky/8 border border-sky/15 px-2 py-0.5 rounded-full">+12%</span>
          </div>
          <CashflowChart labels={chartLabels} />
        </div>

        {/* Due dates */}
        <div className="rounded-xl border border-border-soft bg-surface-2 p-4 space-y-2.5">
          <p className="text-[11px] font-semibold text-navy mb-1">Próximos vencimientos</p>
          {dues.map((t) => (
            <div key={t.label} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${t.done ? 'bg-green border-green' : 'border-border'}`}>
                  {t.done && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-[11px] font-medium ${t.done ? 'text-text-muted line-through' : 'text-navy'}`}>{t.label}</span>
              </div>
              <span className={`text-[10px] font-medium ${t.done ? 'text-text-muted' : 'text-sky'}`}>{t.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
