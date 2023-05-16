import { Request, Response } from "express";
import User from "../model/user";

export default {
    getAll:(req: Request, res: Response)=> {
        User.find().then(User=>res.send(User))
      },
      
    addToCart:(req: Request, res: Response)=>{
        const {UserId,itemId}=req.params
        User.findByIdAndUpdate(UserId,{$push:{cart:itemId}}).then(User=>res.send(User))
    }
}

