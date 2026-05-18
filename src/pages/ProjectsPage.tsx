import { motion } from 'framer-motion';
import ProjectGallery from '../components/ProjectGallery';
import { projects } from '../data/projects';

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Proyectos y avances</p>
        <h1 className="mt-4 text-4xl font-semibold text-deepblue sm:text-5xl">Espacios, actividades y procesos con sentido.</h1>
        <p className="mt-5 leading-8 text-slate-600">
          Una galería dinámica que permite mostrar remodelaciones, talleres, eventos y avances terapéuticos con impacto visual.
        </p>
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mt-16">
        <ProjectGallery projects={projects} />
      </motion.div>
    </section>
  );
}

export default ProjectsPage;
