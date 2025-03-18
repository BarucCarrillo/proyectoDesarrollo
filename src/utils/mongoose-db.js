import {connect, connection} from "mongoose";

const conn = {
    isConnected: false
}

export async function connectDB() {
    if (conn.isConnected) return;

    const db = await connect("mongodb://localhost/proyectoDesarrollo")
    console.log("Connected to MongoDB")
    conn.isConnected = db.connections[0].readyState
}

connection.on("connected", () => {
    console.log("MongoDB connected")
})

connection.on("error", (error) => {
    console.error("MongoDB connection error", error)
})