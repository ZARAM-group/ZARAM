import mongoose, { Schema, Document } from 'mongoose';

export interface Item extends Document {
  name: string;
  price: number;
  image: string;
  color: string;
  type: string;
  size: string;
  gender: string;
  keyword: string;
  description: string;
  conditions: string[];
}

const itemSchema: Schema = new Schema({
  name: String,
  price: Number,
  image: String,
  color: String,
  type: String,
  size: String,
  gender: String,
  keyword: String,
  description: String,
  conditions: [String],
});

const ItemModel = mongoose.model<Item>('items', itemSchema);

export default ItemModel;
