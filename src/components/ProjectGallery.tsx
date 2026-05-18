import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';
import type { ProjectItem } from '../data/projects';

interface Props {
  projects: ProjectItem[];
}

const categories = ['Todos', 'Espacio clínico', 'Actividad infantil', 'Proceso clínico', 'Evento', 'Ambiente educativo'];

function ProjectGallery({ projects }: Props) {
  const [filter, setFilter] = useState('Todos');
  const [active, setActive] = useState<ProjectItem | null>(null);

  const filtered = useMemo(
    () => (filter === 'Todos' ? projects : projects.filter((project) => project.category === filter)),
    [filter, projects]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="flex items-center gap-3 text-deepblue">
          <FiFilter />
          <span className="text-sm font-semibold uppercase tracking-[0.3em]">Filtrar</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full px-5 py-3 text-sm font-medium transition ${filter === category ? 'bg-deepblue text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <motion.button
            key={project.title}
            type="button"
            onClick={() => setActive(project)}
            whileHover={{ y: -4 }}
            className="group overflow-hidden rounded-[32px] bg-slate-950/5 p-0 text-left shadow-soft transition hover:shadow-glow"
          >
            <div className="relative overflow-hidden">
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="space-y-3 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-tealbright">{project.category}</p>
              <h2 className="text-xl font-semibold text-deepblue">{project.title}</h2>
              <p className="text-slate-600 leading-7">{project.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {active ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-6 backdrop-blur-sm">
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }} className="relative max-w-3xl overflow-hidden rounded-[36px] bg-white shadow-soft">
            <button type="button" onClick={() => setActive(null)} className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-800 shadow-soft transition hover:bg-slate-100">
              <FiX size={22} />
            </button>
            <img src={active.image} alt={active.title} className="h-80 w-full object-cover" />
            <div className="p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-tealbright">{active.category}</p>
              <h2 className="mt-4 text-3xl font-semibold text-deepblue">{active.title}</h2>
              <p className="mt-5 text-slate-600 leading-8">{active.description}</p>
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectGallery;
