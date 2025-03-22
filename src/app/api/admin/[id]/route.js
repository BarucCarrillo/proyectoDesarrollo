import { NextResponse } from "next/server";
import {connectDB} from '@/utils/mongoose-db';
import bcrypt from "bcryptjs";
import Admin from "@/models/Admin";

export async function GET(request, {params}) {
  try{
  connectDB();
  const adminFound = await Admin.findById(params.id);

  if (!adminFound) {
    return NextResponse.json({ message: `No se encontró el usuario ${params.id}` }, { status: 404 });
  }

  return NextResponse.json(adminFound);
  }catch(error){
    return NextResponse.json(error.message, { status: 400 });
  }
}

export async function DELETE(request, {params}) {
  try{
    connectDB();
    const adminDeleted = await Admin.findByIdAndDelete(params.id);

    if (!taskDeleted) {
      return NextResponse.json({ message: `No se encontró el usuario ${params.id}` }, { status: 400 });
    }

    return NextResponse.json(adminDeleted);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    await connectDB();

    // Si el usuario envió una nueva contraseña, la hasheamos
    if (data.password && data.password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }

    // Actualizar la tarea en la base de datos
    const adminUpdated = await Admin.findByIdAndUpdate(params.id, data, { new: true });

    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}