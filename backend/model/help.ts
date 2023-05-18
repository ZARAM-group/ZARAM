import mongoose, { Schema, Document } from 'mongoose';

export interface Help extends Document {
    question: string;
    answer: string;
    keyword: string;
  }
  
  const helpSchema: Schema = new Schema({
    question: String,
    answer: String,
    keyword: String,
  });

  const HelpModel = mongoose.model<Help>('help', helpSchema);
  export default HelpModel;