import { connect, connection } from "mongoose";

const conn = {
    isConnected: false
};

export async function connectDB() {
    if (conn.isConnected) return;
    try {
        const db = await connect("mongodb://localhost/proyectoDesarrollo");
        conn.isConnected = db.connections[0].readyState;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

// Solo agregar eventos una vez
if (!connection._hasListeners) {
    connection.on("connected", () => console.log("MongoDB connected"));
    connection.on("error", (error) => console.error("MongoDB connection error", error));
    connection._hasListeners = true; // Bandera para evitar múltiples asignaciones
}
