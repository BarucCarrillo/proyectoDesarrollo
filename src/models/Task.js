import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    domicilio: {
        calle: {
            type: String,
            required: true,
            trim: true
        },
        numeroExterior: {
            type: String,
            required: true,
            trim: true
        },
        numeroInterior: {
            type: String,
            required: false,
            trim: true
        },
        colonia: {
            type: String,
            required: true,
            trim: true
        },
        municipio: {
            type: String,
            required: true,
            trim: true
        },
        estado: {
            type: String,
            required: true,
            trim: true
        },
        codigoPostal: {
            type: String,
            required: true,
            trim: true
        }
    }
}, {
    timestamps: true
});

export default models.Task || model('Task', taskSchema);
