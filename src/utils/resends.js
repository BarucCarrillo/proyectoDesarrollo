import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendResetPasswordEmail = async (to, newPassword) => {
  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER, // Dirección verificada en Resend
      to,
      subject: "Nueva contraseña generada",
      html: `<p>Tu nueva contraseña es: <strong>${newPassword}</strong></p>
             <p>Te recomendamos cambiarla después de iniciar sesión.</p>`,
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return { success: false, error: error.message };
  }
};
