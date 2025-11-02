import { motion } from 'framer-motion'
import { Star, BarChart3, Users, Layers } from 'lucide-react'

const features = [
  {
    title: 'Points & Rewards',
    desc: 'Flexible point rules, tiers, and instant rewards that customers love.',
    icon: Star,
  },
  {
    title: 'Customer Insights',
    desc: 'Understand behavior with visit frequency, cohort trends, and churn risk.',
    icon: Users,
  },
  {
    title: 'Multi-branch Management',
    desc: 'Manage locations, staff permissions, and campaigns from one dashboard.',
    icon: Layers,
  },
  {
    title: 'Real-time Analytics',
    desc: 'Track revenue lift, redemption rates, and lifetime value in real time.',
    icon: BarChart3,
  },
]

export default function Highlights() {
  return (
    <div className="relative" style={{ backgroundColor: '#1E1E1E' }}>
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to grow loyalty</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Powerful tools designed for restaurants and multi-location brands.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 p-6 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <span
                className="inline-flex w-10 h-10 items-center justify-center rounded-md mb-4"
                style={{ backgroundColor: '#C6A664' }}
              >
                <f.icon className="text-[#1E1E1E]" size={20} />
              </span>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Simple, transparent pricing</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Start free. Upgrade when you grow — no hidden fees, cancel anytime.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-md px-6 py-3 font-medium text-[#1E1E1E]"
              style={{ backgroundColor: '#C6A664' }}
            >
              See Plans
            </a>
            <span className="text-white/50 text-sm">Monthly and annual billing available</span>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
