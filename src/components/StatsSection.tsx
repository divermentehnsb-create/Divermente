import { motion } from 'framer-motion';

const stats = [
  { value: '250+', label: 'Familias acompañadas' },
  { value: '18', label: 'Años de experiencia combinada' },
  { value: '95%', label: 'Satisfacción medida' }
];

function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <div className="rounded-[36px] bg-gradient-to-r from-skysoft/80 via-white to-purplegentle/70 p-8 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-[30px] bg-white/90 p-8 text-center shadow-soft"
            >
              <p className="text-4xl font-semibold text-deepblue">{item.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
