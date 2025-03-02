import { NextResponse } from "next/server"; 
import { connectDB } from "../../../utils/mongoose-db";

export function GET(request) {
  connectDB();
  return NextResponse.json({ message: "Hello World!" });
}