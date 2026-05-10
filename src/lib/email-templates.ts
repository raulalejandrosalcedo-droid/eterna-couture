/**
 * Plantillas de email del atelier — voz de marca consistente.
 */

const baseStyle = `
  font-family: 'Garamond', 'EB Garamond', Georgia, serif;
  color: #1A1614;
  background: #F7F3EE;
  padding: 40px 24px;
  line-height: 1.7;
  max-width: 640px;
  margin: 0 auto;
`;

const wordmarkStyle = `
  font-family: 'Cormorant Garamond', Garamond, serif;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 12px;
  color: #42373A;
  margin-bottom: 32px;
`;

const headingStyle = `
  font-family: 'Cormorant Garamond', Garamond, serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  margin: 0 0 24px 0;
  color: #1A1614;
`;

const labelStyle = `
  font-family: 'Raleway', Arial, sans-serif;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #808274;
  margin: 24px 0 4px 0;
`;

const valueStyle = `
  font-size: 16px;
  color: #1A1614;
  margin: 0;
`;

const dividerStyle = `
  border: 0;
  border-top: 1px solid #E8E0D5;
  margin: 32px 0;
`;

const footerStyle = `
  font-family: 'Raleway', Arial, sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #808274;
  text-align: center;
  margin-top: 40px;
`;

export interface ContactInquiry {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  occasion?: string;
  pieceType?: string;
  eventDate?: string;
  budget?: string;
  message?: string;
}

export interface WaitlistEntry {
  name: string;
  email: string;
  occasion?: string;
  city?: string;
}

export interface NewsletterEntry {
  email: string;
}

export function contactInquiryEmail(data: ContactInquiry): { subject: string; html: string; text: string } {
  const subject = `Nueva solicitud de cita — ${data.name}`;

  const html = `
<div style="${baseStyle}">
  <p style="${wordmarkStyle}">Alejandra Salcedo · Couture</p>
  <h1 style="${headingStyle}">Nueva solicitud de cita privada</h1>
  <p style="font-size:16px;color:#42373A;font-style:italic;margin-bottom:32px;">
    "${data.name}" quiere conversar sobre una pieza.
  </p>
  <hr style="${dividerStyle}" />
  ${field('Nombre', data.name)}
  ${field('Email', `<a href="mailto:${data.email}" style="color:#B7A060;">${data.email}</a>`)}
  ${data.phone ? field('Teléfono / WhatsApp', data.phone) : ''}
  ${data.city ? field('Ciudad', data.city) : ''}
  ${data.occasion ? field('Ocasión', data.occasion) : ''}
  ${data.pieceType ? field('Tipo de pieza', data.pieceType) : ''}
  ${data.eventDate ? field('Fecha del evento', data.eventDate) : ''}
  ${data.budget ? field('Presupuesto orientativo', data.budget) : ''}
  ${data.message ? `<hr style="${dividerStyle}" /><p style="${labelStyle}">Mensaje</p><p style="${valueStyle};white-space:pre-wrap;">${escapeHtml(data.message)}</p>` : ''}
  <hr style="${dividerStyle}" />
  <p style="${footerStyle}">
    Este mensaje fue enviado desde eternacouture.com<br/>
    Recibido el ${new Date().toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'short' })}
  </p>
</div>`;

  const text = `Nueva solicitud de cita privada
${data.name}

Email: ${data.email}
${data.phone ? `Teléfono: ${data.phone}\n` : ''}${data.city ? `Ciudad: ${data.city}\n` : ''}${data.occasion ? `Ocasión: ${data.occasion}\n` : ''}${data.pieceType ? `Tipo de pieza: ${data.pieceType}\n` : ''}${data.eventDate ? `Fecha: ${data.eventDate}\n` : ''}${data.budget ? `Presupuesto: ${data.budget}\n` : ''}
${data.message ? `\nMensaje:\n${data.message}\n` : ''}
Recibido el ${new Date().toLocaleString('es-ES')}`;

  return { subject, html, text };
}

export function waitlistEmail(data: WaitlistEntry): { subject: string; html: string; text: string } {
  const subject = `Lista Contemplación — ${data.name}`;
  const html = `
<div style="${baseStyle}">
  <p style="${wordmarkStyle}">Alejandra Salcedo · Couture</p>
  <h1 style="${headingStyle}">Nueva inscripción a Contemplación</h1>
  <p style="font-size:16px;color:#42373A;font-style:italic;margin-bottom:32px;">
    "${data.name}" quiere acceso anticipado al lookbook.
  </p>
  <hr style="${dividerStyle}" />
  ${field('Nombre', data.name)}
  ${field('Email', `<a href="mailto:${data.email}" style="color:#B7A060;">${data.email}</a>`)}
  ${data.occasion ? field('Ocasión de interés', data.occasion) : ''}
  ${data.city ? field('Ciudad', data.city) : ''}
  <hr style="${dividerStyle}" />
  <p style="${footerStyle}">
    Inscripción desde /colecciones/contemplacion<br/>
    Recibido el ${new Date().toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'short' })}
  </p>
</div>`;

  const text = `Nueva inscripción a Contemplación
${data.name}
Email: ${data.email}
${data.occasion ? `Ocasión: ${data.occasion}\n` : ''}${data.city ? `Ciudad: ${data.city}\n` : ''}
Recibido el ${new Date().toLocaleString('es-ES')}`;

  return { subject, html, text };
}

export function newsletterEmail(data: NewsletterEntry): { subject: string; html: string; text: string } {
  const subject = `Nueva suscripción al lookbook`;
  const html = `
<div style="${baseStyle}">
  <p style="${wordmarkStyle}">Alejandra Salcedo · Couture</p>
  <h1 style="${headingStyle}">Nueva suscripción al lookbook</h1>
  <hr style="${dividerStyle}" />
  ${field('Email', `<a href="mailto:${data.email}" style="color:#B7A060;">${data.email}</a>`)}
  <hr style="${dividerStyle}" />
  <p style="${footerStyle}">
    Suscripción desde la home<br/>
    Recibido el ${new Date().toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'short' })}
  </p>
</div>`;

  const text = `Nueva suscripción al lookbook\nEmail: ${data.email}\nRecibido el ${new Date().toLocaleString('es-ES')}`;
  return { subject, html, text };
}

function field(label: string, value: string): string {
  return `<p style="${labelStyle}">${label}</p><p style="${valueStyle}">${value}</p>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br/>');
}
