import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import { team } from '../data/team';

function TeamPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Nuestro equipo</p>
        <h1 className="mt-4 text-4xl font-semibold text-deepblue sm:text-5xl">Profesionales que acompañan desde la experiencia y la empatía.</h1>
        <p className="mt-5 leading-8 text-slate-600">
          Un equipo interdisciplinario con enfoque en salud mental, desarrollo infantil, educación y acompañamiento estratégico.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {team.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </motion.div>
    </section>
  );
}

export default TeamPage;
