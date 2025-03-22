import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose-db";
import Admin from "@/models/Admin";

export async function GET() {
  connectDB();

  const tareas = await Admin.find();

  return NextResponse.json(tareas);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const tarea = new Admin(data);
    const nuevaTarea = await tarea.save();
    return NextResponse.json(nuevaTarea);
  } catch (error) {
    return NextResponse.json(error.message, { status: 400 });
  }
}