import { NextResponse } from "next/server";
import { connectDB } from "../../../utils/mongoose-db";
import Product from "../../../models/Products";

export async function GET() {
  connectDB();

  const products = await Product.find();

  return NextResponse.json(products);
}

export async function POST(request) {
    try {
        const data = await request.json();
        const product = new Product(data);
        const newProduct = await product.save();
        return NextResponse.json(newProduct);
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 });
    }
    }