import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { contactOptions } from '../data/contactOptions';

function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Contacto</p>
          <h1 className="text-4xl font-semibold text-deepblue sm:text-5xl">Conversemos sobre el siguiente paso en tu bienestar.</h1>
          <p className="max-w-2xl leading-8 text-slate-600">
            Escríbenos para agendar una consulta, recibir información personalizada o conocer nuestras opciones de acompañamiento.
          </p>

          <div className="space-y-4 rounded-[30px] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="font-medium text-deepblue">Nuestra sede</p>
            <p className="text-slate-600">Edificio con portones verdes delante de la cristalería. Atención cercana y accesible.</p>
            <div className="grid gap-3 text-slate-700 sm:grid-cols-2">
              <span>📍 Ubicación física</span>
              <span>🕒 Lunes a viernes 9:00 - 19:00</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <span>📞 +504 3145-7819</span>
              <span>✉️ <a href="mailto:divermentehnsb@gmail.com" className="text-deepblue underline">divermentehnsb@gmail.com</a></span>
            </div>
          </div>
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft">
            <iframe
              title="Mapa de ubicación DiverMente"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.1234567890123!2d-99.123456!3d19.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1%3A0x123456789abcdef!2sCentro%20DiverMente!5e0!3m2!1ses-419!2smx!4v1700000000000"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[34px] bg-skysoft/80 p-8 shadow-soft"
        >
          <ContactForm contactOptions={contactOptions} />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactPage;
