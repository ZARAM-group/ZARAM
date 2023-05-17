import mongoose, { Schema, Document } from 'mongoose';

export interface help extends Document {
    question: string;
    keyword: string;
    answer: string;
  }
  
  const helpSchema: Schema = new Schema({
    question: String,
    keyword: String,
    Answer: String,
  });

  const HelpModel = mongoose.model<help>('help', helpSchema);
  export default HelpModel;