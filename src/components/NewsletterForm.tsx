'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Error');
      setStatus('sent');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <p className="font-display italic text-lg text-marfil">
        Recibirás el lookbook privado de Contemplación en tu correo.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu email"
        className="flex-1 bg-transparent border-b border-petalo/50 text-marfil font-ui text-base py-3 px-1 placeholder-petalo/60 focus:outline-none focus:border-dorado transition-colors"
        aria-label="Email"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="font-ui text-xs font-light tracking-widest uppercase border border-marfil text-marfil px-6 py-3 hover:bg-marfil hover:text-noche transition-all duration-medium ease-brand disabled:opacity-60"
      >
        {status === 'sending' ? 'Enviando…' : 'Recibir lookbook'}
      </button>
    </form>
  );
}
