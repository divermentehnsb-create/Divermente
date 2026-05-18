import { useState } from 'react';
import { FiChevronDown, FiArrowRight } from 'react-icons/fi';
import type { ServiceItem } from '../data/services';

interface Props {
  service: ServiceItem;
  defaultOpen?: boolean;
}

function ServiceAccordion({ service, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Servicio</p>
          <h2 className="mt-2 text-2xl font-semibold text-deepblue">{service.title}</h2>
          <p className="mt-2 text-sm text-slate-600">{service.subtitle}</p>
        </div>
        <FiChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} size={24} />
      </button>
      <div className={`transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden px-6 pb-6`}> 
        <p className="text-slate-600 leading-7">{service.description}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div key={benefit} className="rounded-3xl bg-skysoft/80 p-4 text-slate-700">
              <p className="flex items-center gap-2 text-sm font-medium">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-tealbright text-white">✓</span>
                {benefit}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <a href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-deepblue px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-purplegentle">
            Contactar
            <FiArrowRight />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ServiceAccordion;
