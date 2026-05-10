'use client';

import { useState } from 'react';

const occasions = [
  'Novia civil',
  'Invitada de boda',
  'Madrina',
  'Gala / editorial',
  'Otra ocasión',
];

export default function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occasion, setOccasion] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setStatus('sending');
    try {
      // TODO: Conectar con Resend / Mailchimp / Sanity
      await new Promise((r) => setTimeout(r, 800));
      setStatus('sent');
      setName('');
      setEmail('');
      setOccasion('');
      setCity('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <p className="font-display italic text-2xl text-noche mb-4">
          Tu nombre forma parte de la lista.
        </p>
        <p className="font-body text-base text-noche/70">
          Recibirás el lookbook privado de Contemplación y la apertura de citas en tu
          correo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
      <label className="block">
        <span className="font-ui text-xs tracking-widest uppercase text-tierra block mb-2">
          Nombre *
        </span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-noche/40 font-body text-lg py-2 focus:outline-none focus:border-dorado transition-colors"
        />
      </label>
      <label className="block">
        <span className="font-ui text-xs tracking-widest uppercase text-tierra block mb-2">
          Email *
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-noche/40 font-body text-lg py-2 focus:outline-none focus:border-dorado transition-colors"
        />
      </label>
      <label className="block">
        <span className="font-ui text-xs tracking-widest uppercase text-tierra block mb-2">
          Ocasión de interés
        </span>
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="w-full bg-transparent border-b border-noche/40 font-body text-lg py-2 focus:outline-none focus:border-dorado transition-colors appearance-none"
        >
          <option value="">Selecciona una</option>
          {occasions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="font-ui text-xs tracking-widest uppercase text-tierra block mb-2">
          Ciudad
        </span>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full bg-transparent border-b border-noche/40 font-body text-lg py-2 focus:outline-none focus:border-dorado transition-colors"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="md:col-span-2 mt-4 inline-flex items-center justify-center font-ui text-xs font-light tracking-widest uppercase bg-noche text-marfil px-8 py-4 hover:bg-dorado transition-all duration-medium ease-brand disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando…' : 'Quiero mi acceso privado'}
      </button>
    </form>
  );
}
