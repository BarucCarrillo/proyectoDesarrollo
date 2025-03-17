import { NextResponse } from "next/server";
import {connectDB} from '@/utils/mongoose-db';
import Products from '@/models/Products';

export async function GET(request, {params}) {
    try{
    connectDB();
    const productFound = await Products.findById(params.id);
    
    if (!productFound) {
        return NextResponse.json({ message: `No se encontró el producto ${params.id}` }, { status: 404 });
    }
    
    return NextResponse.json(productFound);
    }catch(error){
        return NextResponse.json(error.message, { status: 400 });
    }
}

export async function DELETE(request, {params}) {
    try{
        connectDB();
        const productDeleted = await Products.findByIdAndDelete(params.id);
        
        if (!productDeleted) {
            return NextResponse.json({ message: `No se encontró el producto ${params.id}` }, { status: 400 });
        }
        
        return NextResponse.json(productDeleted);
    } catch (error) {
        return NextResponse.json(error.message, { status: 400 });
    }
}

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        await connectDB();
        
        // Actualizar el producto en la base de datos
        const productUpdated = await Products.findByIdAndUpdate(params.id, data, { new: true });
        
        return NextResponse.json(productUpdated);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
