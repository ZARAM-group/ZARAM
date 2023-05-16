import { Request, Response } from "express";
import User from "../model/user";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default {
    getAll:(req: Request, res: Response)=> {
        User.find().then(User=>res.send(User))
      },

    addToCart:(req: Request, res: Response)=>{
        const {UserId,itemId}=req.params
        User.findByIdAndUpdate(UserId,{$push:{cart:itemId}}).then(User=>res.send(User))
    },


    removeFromCart:(req:Request , res: Response)=>{
        const{UserId,itemId}=req.params
        

    },

    signup: async (req: Request, res: Response)=>{
        const { user, pass, fName, lName, email } = req.body
        const existingUser=await User.find({username: user})
        if(existingUser){
            res.send({message: "Username Already Exists"})
        }
        else{
            const hashedPassword = await bcrypt.hash(pass,10)
            const newUser={
                username: user,
                password: hashedPassword,
                firstName: fName,
                lastName: lName,
                email: email,
                isAdmin: false,
                cart: []
            }
            User.create(newUser)
        }
    },

    login: async (req: Request, res: Response)=>{
        const { user, pass } = req.body
        const loggedUser = await User.find({username: user})
        if(!loggedUser){
            res.send({message: "User Doesn't Exist"})
        }
        else{
            if(await bcrypt.compare(pass,(loggedUser as any).password)){
                res.send({message: "Password Incorrect"})
            }
            else{
                const token = await jwt.sign({id: (loggedUser as any)._id},process.env.token)
                res.send({
                    token: token,
                    username: user,
                    fName: (loggedUser as any).fName,
                    lName: (loggedUser as any).lName,
                    email: (loggedUser as any).email
                })
            }
        }
    }
}

