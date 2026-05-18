import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaSmile } from 'react-icons/fa';

function HeroSection() {
  return (
    <section className="hero-background overflow-hidden px-6 pb-20 pt-24 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_0.8fr] lg:items-center lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-deepblue shadow-soft ring-1 ring-slate-200">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-tealbright text-white">+</span>
            Centro integral y terapéutico para familias.
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-deepblue sm:text-6xl">
            Comprendemos • Acompañamos • Potenciamos
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            DiverMente es un espacio especializado para el desarrollo emocional, cognitivo y social de niños, jóvenes y adultos, con un acercamiento humano y profesional.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-deepblue px-7 py-4 text-sm font-semibold text-white shadow-soft hover:bg-purplegentle"
            >
              Agenda tu consulta
            </Link>
            <Link to="/servicios" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-deepblue hover:bg-slate-50">
              Ver servicios
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[26px] bg-white/90 p-4 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Crecimiento</p>
              <p className="mt-2 text-xl font-semibold text-deepblue">Programas personalizados</p>
            </div>
            <div className="rounded-[26px] bg-white/90 p-4 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Confianza</p>
              <p className="mt-2 text-xl font-semibold text-deepblue">Acompañamiento constante</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-skysoft via-white to-purplegentle p-8 shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(27,187,207,0.26),_transparent_32%)]" />
            <div className="relative z-10 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-white/90 p-5 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Mas confianza</p>
                  <p className="mt-3 text-lg font-semibold text-deepblue">Resultados visibles en cada proceso.</p>
                </div>
                <div className="rounded-[28px] bg-white/90 p-5 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.3em] text-purplegentle">Inclusión</p>
                  <p className="mt-3 text-lg font-semibold text-deepblue">Estrategias para familias neurodivergentes.</p>
                </div>
              </div>
              <div className="rounded-[32px] bg-deepblue/95 p-6 text-white shadow-glow">
                <div className="flex items-center gap-3 text-xl font-semibold">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-tealbright text-deepblue">
                    <FaHeart />
                  </span>
                  Apoyo con calidez profesional
                </div>
                <p className="mt-4 leading-7 text-slate-100">Un entorno seguro donde cada miembro de la familia encuentra acompañamiento terapéutico, emocional y estratégico.</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['Infantil', 'Juvenil', 'Familiar'].map((label) => (
                  <div key={label} className="rounded-3xl bg-white/90 p-4 text-center shadow-soft">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{label}</p>
                    <span className="mt-3 block text-xl font-semibold text-deepblue">+20</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-white/70 p-4 shadow-soft backdrop-blur-xl">
            <div className="inline-flex items-center gap-3 text-sm text-deepblue">
              <FaSmile className="text-tealbright" /> Mascota DiverMente — jirafa multicolor
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
