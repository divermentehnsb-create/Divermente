import React, { useMemo, useState } from 'react';
import { FiCheckCircle, FiMapPin, FiSend } from 'react-icons/fi';

interface Props {
  contactOptions: string[];
}

function ContactForm({ contactOptions }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: contactOptions[0], message: '' });

  const valid = useMemo(
    () => form.name.trim().length > 2 && form.email.includes('@') && form.message.trim().length > 10,
    [form]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valid) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[30px] bg-white p-8 shadow-soft">
        <div className="flex items-center gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-tealbright text-white">
            <FiMapPin size={20} />
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-tealbright">Ubicación</p>
            <p className="mt-1 text-slate-600">Edificio con portones verdes frente a cristalería.</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-[30px] bg-white p-8 shadow-soft">
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700">
            Nombre completo
            <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-tealbright focus:outline-none focus:ring-2 focus:ring-tealbright/20" placeholder="Tu nombre" required />
          </label>
          <label className="space-y-2 text-sm text-slate-700">
            Teléfono
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-tealbright focus:outline-none focus:ring-2 focus:ring-tealbright/20" placeholder="(000) 000-0000" />
          </label>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="space-y-2 text-sm text-slate-700">
            Correo electrónico
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-tealbright focus:outline-none focus:ring-2 focus:ring-tealbright/20" placeholder="correo@ejemplo.com" required />
          </label>
          <label className="space-y-2 text-sm text-slate-700">
            Área de interés
            <select name="interest" value={form.interest} onChange={handleChange} className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-tealbright focus:outline-none focus:ring-2 focus:ring-tealbright/20">
              {contactOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="space-y-2 text-sm text-slate-700">
          Mensaje
          <textarea name="message" value={form.message} onChange={handleChange} rows={6} className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-tealbright focus:outline-none focus:ring-2 focus:ring-tealbright/20" placeholder="Cuéntanos cómo podemos ayudarte" required />
        </label>
        <button type="submit" disabled={!valid} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-deepblue px-6 py-4 text-sm font-semibold text-white shadow-soft transition disabled:cursor-not-allowed disabled:bg-slate-400 hover:bg-purplegentle">
          <FiSend /> Enviar mensaje
        </button>
        {submitted ? (
          <div className="rounded-3xl bg-tealbright/15 p-4 text-sm text-tealbright">
            <FiCheckCircle className="inline-block align-middle" /> Mensaje enviado. En breve te contactaremos.
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default ContactForm;
