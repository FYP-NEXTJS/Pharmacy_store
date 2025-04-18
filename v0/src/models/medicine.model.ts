import mongoose, { Schema, Document } from "mongoose";

export interface IMedicine extends Document {
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
}

const MedicineSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  sold: { type: Number, default: 0 },
});

export default mongoose.models.Medicine ||
  mongoose.model<IMedicine>("Medicine", MedicineSchema);
