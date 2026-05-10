'use client';

import { useState } from 'react';

const occasions = [
  'Novia civil', 'Invitada de boda', 'Madrina',
  'Gala / editorial', 'Cumpleaños', 'Otra ocasión',
];

const pieceTypes = [
  'Vestido a medida desde cero',
  'Modificación de pieza existente',
  'Asesoría de estilo / ocasión',
  'Pieza de archivo de colección',
];

const budgetRanges = [
  'Hasta 2.500€',
  '2.500€ – 5.000€',
  '5.000€ – 10.000€',
  '10.000€+',
  'Prefiero conversarlo',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', occasion: '', pieceType: '',
    eventDate: '', city: '', budget: '', message: '', consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handle = (k: string, v: string | boolean) =>
    setFormData((p) => ({ ...p, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.consent) return;
    setStatus('sending');
    try {
      // TODO: Conectar con Resend API. Endpoint sugerido: /api/contact
      await new Promise((r) => setTimeout(r, 1000));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="text-center py-16 px-8 bg-marfil-soft">
        <p className="font-display italic text-3xl text-noche mb-4">
          Tu mensaje ha llegado al atelier.
        </p>
        <p className="font-body text-lg text-noche/70 max-w-xl mx-auto">
          Alejandra responde personalmente cada solicitud. Recibirás una respuesta
          en un plazo de 48 horas con los próximos pasos del proceso.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-transparent border-b border-noche/30 font-body text-lg py-3 focus:outline-none focus:border-dorado transition-colors';
  const labelClass =
    'font-ui text-xs tracking-widest uppercase text-tierra block mb-2';

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-x-10 gap-y-8">
      <label className="block">
        <span className={labelClass}>Nombre completo *</span>
        <input
          type="text" required value={formData.name}
          onChange={(e) => handle('name', e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>Email *</span>
        <input
          type="email" required value={formData.email}
          onChange={(e) => handle('email', e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>Teléfono / WhatsApp</span>
        <input
          type="tel" value={formData.phone}
          onChange={(e) => handle('phone', e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>Ciudad</span>
        <input
          type="text" value={formData.city}
          onChange={(e) => handle('city', e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>Ocasión</span>
        <select
          value={formData.occasion}
          onChange={(e) => handle('occasion', e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Selecciona una</option>
          {occasions.map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>

      <label className="block">
        <span className={labelClass}>Tipo de pieza</span>
        <select
          value={formData.pieceType}
          onChange={(e) => handle('pieceType', e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Selecciona una</option>
          {pieceTypes.map((p) => <option key={p}>{p}</option>)}
        </select>
      </label>

      <label className="block">
        <span className={labelClass}>Fecha del evento</span>
        <input
          type="date" value={formData.eventDate}
          onChange={(e) => handle('eventDate', e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="block">
        <span className={labelClass}>Presupuesto orientativo</span>
        <select
          value={formData.budget}
          onChange={(e) => handle('budget', e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Selecciona uno</option>
          {budgetRanges.map((b) => <option key={b}>{b}</option>)}
        </select>
      </label>

      <label className="block md:col-span-2">
        <span className={labelClass}>
          Cuéntanos el momento que quieres vestir
        </span>
        <textarea
          value={formData.message}
          onChange={(e) => handle('message', e.target.value)}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Diseñaremos una pieza desde tu historia, tu cuerpo y tu ocasión."
        />
      </label>

      <label className="md:col-span-2 flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox" required checked={formData.consent}
          onChange={(e) => handle('consent', e.target.checked)}
          className="mt-1.5 accent-dorado"
        />
        <span className="font-body text-sm text-noche/70">
          Acepto el tratamiento de mis datos según la política de privacidad. Mis
          datos solo se usarán para responder a esta solicitud. *
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'sending' || !formData.consent}
        className="md:col-span-2 mt-4 inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase bg-noche text-marfil px-8 py-5 hover:bg-dorado transition-all duration-medium ease-brand disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar solicitud al atelier'}
      </button>

      {status === 'error' && (
        <p className="md:col-span-2 font-body text-base text-alerta text-center">
          Hubo un problema al enviar. Por favor, escribe directamente a hola@eternacouture.com.
        </p>
      )}
    </form>
  );
}
