import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactInquiryEmail, ContactInquiry } from '@/lib/email-templates';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as ContactInquiry;

    // Validación mínima
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'Nombre y email son obligatorios' },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;

    if (!apiKey || !to) {
      // Fallback en desarrollo local sin Resend configurado
      console.warn('[contact] Resend no configurado, simulando envío');
      console.log('[contact] data:', data);
      return NextResponse.json({ ok: true, simulated: true });
    }

    const resend = new Resend(apiKey);
    const { subject, html, text } = contactInquiryEmail(data);

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM || 'Atelier ASC <onboarding@resend.dev>',
      to,
      replyTo: data.email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error('[contact] Resend error:', result.error);
      return NextResponse.json(
        { error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error('[contact] Unhandled error:', err);
    return NextResponse.json(
      { error: 'Error inesperado del servidor' },
      { status: 500 }
    );
  }
}
