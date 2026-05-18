import { FiFacebook, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/95 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-tealbright to-purplegentle text-white shadow-glow">
            D
          </div>
          <p className="max-w-xl text-slate-600">
            DiverMente acompaña procesos terapéuticos con calidez profesional, construyendo espacios de confianza para familias y personas.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Contacto</p>
            <p className="mt-3 text-slate-700">contacto@divermente.mx</p>
            <p className="text-slate-700">+504 3145-7819</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Síguenos</p>
            <div className="mt-3 flex items-center gap-4 text-deepblue">
              <a href="https://www.instagram.com/divermente_sb?igsh=MThubG94OW55OG50OQ==" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/share/1ES8kw5hTb/" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Navegación</p>
            <div className="mt-3 flex flex-col gap-2 text-slate-700">
              <Link to="/quienes-somos">Quiénes somos</Link>
              <Link to="/servicios">Servicios</Link>
              <Link to="/contacto">Contacto</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
