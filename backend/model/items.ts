
import mongoose, { Schema, Document } from 'mongoose';

export interface Item extends Document {
  name: string;
  price: number;
  color: string;
  type: string;
  size: string;
  gender: string;
  description: string;
  conditions: string[];
}

const itemSchema: Schema = new Schema({

  name: String,
  price: Number,
  color: String,
  type: String,
  size: String,
  gender: String,
  description: String,
  conditions: Array
})

const items=mongoose.model("items",schema)

  conditions: [String],
});

const ItemModel = mongoose.model<Item>('items', itemSchema);

export default ItemModel;
