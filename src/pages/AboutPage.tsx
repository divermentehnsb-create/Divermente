import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Quiénes somos</p>
        <h1 className="text-4xl font-semibold text-deepblue sm:text-5xl">DiverMente: atención integral con calidez, compromiso y profesionalismo.</h1>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
          Somos un centro de atención familiar y desarrollo infantil que une la experiencia clínica con un enfoque humano. Nuestra misión es ofrecer terapias inclusivas y acompañamiento estratégico para cada persona y familia.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {[
          {
            title: 'Misión',
            text: 'Promover el bienestar emocional, cognitivo y relacional con intervenciones personalizadas, inclusivas y basadas en evidencia.'
          },
          {
            title: 'Visión',
            text: 'Ser un referente en salud integral para familias y niños, reconocidos por un acompañamiento cálido, innovador y transformador.'
          },
          {
            title: 'Enfoque terapéutico',
            text: 'Ofrecemos una práctica interdisciplinaria que integra psicología, terapia de lenguaje, desarrollo infantil y estrategias familiares.'
          }
        ].map((item) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-soft"
          >
            <h2 className="text-2xl font-semibold text-deepblue">{item.title}</h2>
            <p className="mt-4 text-slate-600 leading-7">{item.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2">
        <div className="rounded-[28px] bg-gradient-to-br from-deepblue/10 to-tealbright/10 p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-deepblue">Atención integral</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Cada proceso se acompaña con un diseño terapéutico que respeta el ritmo individual, fomenta la empatía y fortalece la red familiar.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li>• Apoyo a familias con niños neurodivergentes</li>
            <li>• Estrategias prácticas para la vida diaria</li>
            <li>• Espacios seguros para jóvenes y adultos</li>
          </ul>
        </div>
        <div className="rounded-[28px] bg-skysoft/75 p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-deepblue">Inclusión con acompañamiento humano</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Trabajamos con respeto y creatividad para que cada persona encuentre un espacio de confianza, crecimiento y transformación.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
