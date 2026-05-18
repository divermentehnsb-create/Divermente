import type { ServiceItem } from '../data/services';

interface Props {
  service: ServiceItem;
}

function ServicePreview({ service }: Props) {
  return (
    <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
      <div className={`mb-6 inline-flex rounded-3xl bg-gradient-to-r ${service.color} px-4 py-3 text-sm font-semibold text-white`}>
        {service.title}
      </div>
      <h3 className="text-xl font-semibold text-deepblue">{service.subtitle}</h3>
      <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
    </article>
  );
}

export default ServicePreview;
