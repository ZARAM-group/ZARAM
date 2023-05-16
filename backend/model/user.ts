import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
  cart: string[];
}

const userSchema: Schema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  isAdmin: Boolean,
  cart: [String],
});

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
