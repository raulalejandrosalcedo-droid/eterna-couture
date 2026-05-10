import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { newsletterEmail, NewsletterEntry } from '@/lib/email-templates';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as NewsletterEntry;

    if (!data.email) {
      return NextResponse.json({ error: 'Email obligatorio' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;

    if (!apiKey || !to) {
      console.warn('[subscribe] Resend no configurado');
      console.log('[subscribe] data:', data);
      return NextResponse.json({ ok: true, simulated: true });
    }

    const resend = new Resend(apiKey);
    const { subject, html, text } = newsletterEmail(data);

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Atelier ASC <onboarding@resend.dev>',
      to,
      replyTo: data.email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error('[subscribe] Resend error:', result.error);
      return NextResponse.json({ error: 'No se pudo suscribir' }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error('[subscribe] error:', err);
    return NextResponse.json({ error: 'Error inesperado' }, { status: 500 });
  }
}
