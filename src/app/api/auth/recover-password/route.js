import { connectDB } from "../../../../utils/mongoose-db";
import { sendResetPasswordEmail } from "../../../../utils/resends";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import Task from "../../../../models/Task";

export async function POST(req) {
    try {
        const { email } = await req.json();
        if (!email) return Response.json({ message: "Email es requerido" }, { status: 400 });

        await connectDB(); 

        const user = await Task.findOne({ email });

        if (!user) return Response.json({ message: "Usuario no encontrado" }, { status: 404 });

        // Generar nueva contraseña aleatoria
        const newPassword = crypto.randomBytes(6).toString("hex");
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Actualizar la contraseña en la base de datos
        user.password = hashedPassword;
        await user.save();

        // Enviar la nueva contraseña por correo
        const emailSent = await sendResetPasswordEmail(email, newPassword);
        if (!emailSent.success) throw new Error(emailSent.error);

        return Response.json({ message: "Se ha enviado una nueva contraseña a tu correo" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return Response.json({ message: error.message }, { status: 500 });
    }
}
