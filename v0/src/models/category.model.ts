import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
  imageUrl: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  itemsCount: { type: Number, default: 0 },
  items: { type: [Schema.Types.ObjectId], ref: "Medicine" },
});

export default mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);
