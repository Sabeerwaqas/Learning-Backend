import mongoose from "mongoose";

const subTodos = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schema",
    },
  },
  { timestamps: true }
);

export const SubTodos = mongoose.model("SubTodos", subTodos);
