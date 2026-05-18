import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ServicePreview from '../components/ServicePreview';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { services } from '../data/services';

function HomePage() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-2 lg:items-end"
        >
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Nuestro enfoque</p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-deepblue sm:text-5xl">
              Acompañamos a familias y personas en su camino hacia el desarrollo integral.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              DiverMente integra terapias especializadas y un acompañamiento cálido, ofreciendo soluciones para el bienestar emocional,
              cognitivo y relacional.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <ServicePreview key={service.title} service={service} />
            ))}
          </div>
        </motion.div>
      </section>
      <StatsSection />
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="rounded-[34px] bg-skysoft/80 p-8 shadow-soft md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.3em] text-deepblue">Testimonios</p>
              <h2 className="text-4xl font-semibold text-deepblue">Historias que hablan de confianza y resultados.</h2>
              <p className="max-w-2xl leading-7 text-slate-600">
                Familias y personas comparten su experiencia con procesos terapéuticos basados en empatía, estrategia y crecimiento.
              </p>
            </div>
            <TestimonialCarousel />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
