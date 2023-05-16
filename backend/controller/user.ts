import { Request, Response } from "express";
import User, { UserDocument } from "../model/user";

export default {
  getAll: async (req: Request, res: Response): Promise<void> => {
    try {
      const users: UserDocument[] = await User.find();
      res.send(users);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  addToCart: async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId, itemId } = req.params;
      const updatedUser: UserDocument | null = await User.findByIdAndUpdate(
        userId,
        { $push: { cart: itemId } },
        { new: true }
      );
      res.send(updatedUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};
