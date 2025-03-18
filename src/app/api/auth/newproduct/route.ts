
import { NextResponse } from "next/server";
import Product from "@/models/Products";
import {connectDB} from "@/utils/mongoose-db";

export async function POST(request: Request){

    const { name, price, stock, description, image, gender } = await request.json();
    console.log(name, price, stock, description, image, gender);

    try {
        await connectDB();
        const productFound = await Product.findOne({ name });

        if (productFound) 
            return NextResponse.json(
            { 
                message: 'El producto ya existe' 
            }, 
            { 
                status: 400 
            }
        );

        const product = new Product({
            name,
            price,
            stock,
            description,
            image,
            gender
        });

        await product.save();

        return NextResponse.json(
            { 
                message: 'Producto creado con éxito' 
            }, 
            { 
                status: 201 
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'Error al crear el producto'
        }, {
            status: 400
        });
    }
}


