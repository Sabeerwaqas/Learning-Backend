import mongoose from "mongoose";

const doctorInHospital = new mongoose.Schema({
  hospitalName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
  workingHours: {
    type: Number,
    required: true,
    min: 0
  },
});

const doctorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
      min: 0
    },
    worksInHospitals: [doctorInHospital],
  },
  { timestamps: true }
);

export const Doctors = mongoose.model("Doctors", doctorsSchema);
