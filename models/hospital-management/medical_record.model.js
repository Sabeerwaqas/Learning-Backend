import mongoose from "mongoose";

const medicalRecordsSchema = new mongoose.Schema({}, { timestamps: true });

export const Records = mongoose.model("Records", medicalRecordsSchema);
