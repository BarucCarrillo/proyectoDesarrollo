"use server"; // Asegura que solo se ejecute en el servidor

import mongoose from "mongoose";

const conn = {
    isConnected: false,
};

export async function connectDB() {
    if (conn.isConnected) return;

    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {});

        conn.isConnected = db.connections[0].readyState;
        console.log("✅ Connected to MongoDB");

    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
}

// Agregar eventos solo una vez
if (!mongoose.connection._hasListeners) {
    mongoose.connection.on("connected", () => console.log("🟢 MongoDB connected"));
    mongoose.connection.on("error", (error) => console.error("🔴 MongoDB error:", error));
    mongoose.connection._hasListeners = true;
}
