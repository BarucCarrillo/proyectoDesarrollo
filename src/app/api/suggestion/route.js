// src/app/api/suggestion/route.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);  // Usando tu API Key de Resend

export async function POST(request) {
  const { email, suggestion } = await request.json();

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Correo de envío
      to: process.env.EMAIL_USER,  // Correo de destino donde recibirás las sugerencias
      subject: 'Nueva sugerencia de usuario',
      text: `Correo del usuario: ${email}\nSugerencia: ${suggestion}`,
    });

    return new Response(JSON.stringify({ message: 'Correo enviado con éxito' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error al enviar el correo' }), { status: 500 });
  }
}
