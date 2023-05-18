import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  fName: string;
  lName: string;
  password: string;
  email: string;
  isAdmin: boolean;
  cart: string[];
}

const userSchema: Schema = new Schema({
  fName: String,
  lName: String,
  password: String,
  email: String,
  isAdmin: Boolean,
  cart: [String],
});

const user = mongoose.model<User>("users", userSchema);

export default user;
