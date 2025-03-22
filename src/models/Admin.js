import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    adminId: {
        type: String,
        require: true,
        unique: true
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName:{
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps: true});

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);