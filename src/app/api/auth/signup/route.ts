import { NextResponse } from "next/server";
import Task from "@/models/Task";
import bcrypt from "bcryptjs";
import {connectDB} from "@/utils/mongoose-db";

export async function POST(request: Request){

    const { firstName, lastName, email, password, domicilio } = await request.json();
    console.log(email, password);

    if (!password || password.length < 8) 
        return NextResponse.json(
        { 
            message: 'La contraseña debe tener al menos 8 caracteres' 
        }, 
        { 
            status: 400 
        }
    );

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

        // Asegúrate de que el objeto 'domicilio' tenga la estructura correcta
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
                pais: domicilio.pais || "México" // Valor por defecto
            }
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