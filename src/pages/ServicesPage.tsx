import { motion } from 'framer-motion';
import ServiceAccordion from '../components/ServiceAccordion';
import { services } from '../data/services';

function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Servicios</p>
        <h1 className="mt-4 text-4xl font-semibold text-deepblue sm:text-5xl">Servicios terapéuticos diseñados para cada etapa y necesidad.</h1>
        <p className="mt-5 leading-8 text-slate-600">
          Un catálogo de intervenciones que permite agregar nuevos servicios fácilmente y ajustar cada enfoque al proceso de cada familia.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-16 space-y-4"
      >
        {services.map((service, index) => (
          <ServiceAccordion key={service.title} service={service} defaultOpen={index === 0} />
        ))}
      </motion.div>
    </section>
  );
}

export default ServicesPage;
