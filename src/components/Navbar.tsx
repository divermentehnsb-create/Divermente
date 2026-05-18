import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Quiénes somos', path: '/quienes-somos' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Personal', path: '/personal' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-3 font-semibold text-deepblue">
          <div className="inline-flex min-h-[56px] items-center justify-center rounded-3xl bg-gradient-to-br from-tealbright to-purplegentle px-4 py-3 text-white shadow-glow">
            <div className="text-left">
              <p className="text-base font-bold">Diver<span className="text-tealbright">Mente</span></p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/80">Centro Familiar y Desarrollo Infantil</p>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-deepblue' : 'text-slate-600 hover:text-deepblue'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="mailto:divermentehnsb@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-skysoft/70 px-4 py-2 text-sm text-deepblue transition hover:bg-skysoft">
            <FiMail /> divermentehnsb@gmail.com
          </a>
          <a href="tel:+50431457819" className="inline-flex items-center gap-2 rounded-full bg-deepblue px-4 py-2 text-sm text-white shadow-soft hover:bg-purplegentle">
            <FiPhone /> Agendar
          </a>
        </div>

        <button type="button" onClick={() => setOpen((prev) => !prev)} className="lg:hidden text-deepblue">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-3 text-base font-medium transition ${isActive ? 'bg-skysoft text-deepblue' : 'text-slate-600 hover:bg-slate-50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href="mailto:divermentehnsb@gmail.com" className="inline-flex items-center gap-2 rounded-3xl bg-skysoft/80 px-4 py-3 text-base font-medium text-deepblue">
              <FiMail /> correo
            </a>
            <a href="tel:+50431457819" className="inline-flex items-center gap-2 rounded-3xl bg-deepblue px-4 py-3 text-base font-medium text-white">
              <FiPhone /> teléfono
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
