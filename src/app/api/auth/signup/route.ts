import { NextResponse } from "next/server";
import Task from "@/models/Task";
import bcrypt from "bcryptjs";
import { connectDB } from "@/utils/mongoose-db";
import crypto from 'crypto';

export async function POST(request: Request) {
    const { firstName, lastName, email, password, domicilio } = await request.json();
    console.log(email, password);

    try {     
        await connectDB();
        const userFound = await Task.findOne({ email });

        if (userFound) 
            return NextResponse.json(
            { 
                message: 'El usuario ya existe' 
            }, 
            { 
                status: 400 
            }
        );

        const hashPassword = await bcrypt.hash(password, 10);

        // Generar un resetToken aleatorio
        const resetToken = crypto.randomBytes(20).toString('hex');
        // Establecer la expiración del token (ejemplo: 1 hora desde ahora)
        const tokenExpiry = new Date(Date.now() + 3600000); 

        const user = new Task({
            firstName,
            lastName,
            email,
            password: hashPassword,
            domicilio: {
                calle: domicilio.calle || "",
                numeroExterior: domicilio.numeroExterior || "",
                numeroInterior: domicilio.numeroInterior || "",
                colonia: domicilio.colonia || "",
                municipio: domicilio.municipio || "",
                estado: domicilio.estado || "",
                codigoPostal: domicilio.codigoPostal || "",
            },
        });

        await user.save();

        return NextResponse.json(
            { 
                message: 'Usuario creado con éxito' 
            }, 
            { 
                status: 201 
            }
        );
    } catch (error) {     
        console.log(error);
        return NextResponse.json({
            message: 'Error al crear el usuario'
        }, {
            status: 400
        });
    }
}
