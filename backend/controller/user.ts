import { Request, Response } from "express";
import User from "../model/user";
import bcrypt from "bcrypt"
import jwt, { Secret } from "jsonwebtoken"

export default {

    getAll:(req: Request, res: Response)=> {
        User.find().then(User=>res.send(User))
      },

    addToCart:(req: Request, res: Response)=>{
        const {userId,itemId}=req.body
        User.findByIdAndUpdate(userId,{$push:{cart:itemId}}).then(data=>res.send(data))
    },


    removeFromCart:(req:Request , res: Response)=>{
        const{UserId,itemId}=req.params
        User.findByIdAndUpdate(UserId,{$pull:{cart:itemId}}).then(User=>res.send(User))

    },

    signup: async (req: Request, res: Response)=>{

        const { pass, fName, lName, email } = req.body
        const existingUser=await User.findOne({email: email})
        if(existingUser){
            res.send("Email Already Exists")
        }
        else{
            const hashedPassword: String = await bcrypt.hash(pass,10)
            const newUser={
                password: hashedPassword,
                fName: fName,
                lName: lName,
                email: email,
                isAdmin: false,
                cart: []
            }
            User.create(newUser).then(user=>res.send(user))
        }
    },

    login: async (req: Request, res: Response)=>{
        const { email, pass } = req.body
        const loggedUser = await User.findOne({email: email})
        if(!loggedUser){
            res.send("Email Doesn't Exist")
        }
        else{
            if(await bcrypt.compare(pass,(loggedUser as any).password)){
                const token = jwt.sign({id: (loggedUser as any)._id},(process.env.token as Secret))
                res.send({
                    token: token,
                    id: (loggedUser as any)._id,
                    username: (loggedUser as any).username,
                    fName: (loggedUser as any).fName,
                    lName: (loggedUser as any).lName,
                    email: (loggedUser as any).email,
                    cart: (loggedUser as any).cart
                })
            }
            else{
                res.send("Password Incorrect")
            }
        }
    },
    
    refreshUser: async (req: Request, res: Response)=>{
        const { id }=req.params
        const loggedUser = await User.findOne({_id: id})
        const token = jwt.sign({id: (loggedUser as any)._id},(process.env.token as Secret))
        res.send({
            token: token,
            id: (loggedUser as any)._id,
            username: (loggedUser as any).username,
            fName: (loggedUser as any).fName,
            lName: (loggedUser as any).lName,
            email: (loggedUser as any).email,
            cart: (loggedUser as any).cart
        })
    }
}

