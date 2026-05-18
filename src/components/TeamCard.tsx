import { FiArrowRight } from 'react-icons/fi';
import type { TeamMember } from '../data/team';

interface Props {
  member: TeamMember;
}

function TeamCard({ member }: Props) {
  return (
    <article className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-glow">
      <div className="mb-6 h-48 rounded-[28px] bg-gradient-to-br from-tealbright to-purplegentle p-6 text-white shadow-soft">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em]">Equipo</p>
            <h2 className="text-2xl font-semibold">{member.name}</h2>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em]">
            <span>{member.role.split(' — ')[0]}</span>
            <FiArrowRight />
          </div>
        </div>
      </div>
      <p className="text-slate-600 leading-7">{member.description}</p>
      {member.social?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {member.social.map((social) => (
            <a key={social.label} href={social.url} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-deepblue transition hover:bg-slate-50">
              {social.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default TeamCard;
