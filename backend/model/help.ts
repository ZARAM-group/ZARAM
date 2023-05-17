import mongoose, { Schema, Document } from 'mongoose';

export interface help extends Document {
    question: string;
    keyword: string;
  }
  
  const helpSchema: Schema = new Schema({
    question: String,
    keyword: String,
  });

  const HelpModel = mongoose.model<help>('help', helpSchema);
  export default HelpModel;