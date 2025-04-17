import mongoose, { Schema, models, model } from "mongoose";

const medicineSchema = new Schema({
  name: {
    type: String,
    required: [true, "Medicine name is required"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Medicine Price is required"],
  },
  category: {
    type: String,
    required: [true, "Medicine Category is required"],
  },
  stock: {
    type: Number,
    required: [true, "Medicine Stock is required"],
  },
  distributer: {
    type: String,
    required: [true, "Medicine distributer is required"],
  },
  sold: {
    type: Number,
    default: 0,
  },
  tags: {
    type: [String],
  },
});

const Medicine = models.Medicine || model("Medicine", medicineSchema);

export default Medicine;
