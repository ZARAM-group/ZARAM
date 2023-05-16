import { Request, Response } from "express"
import items from "../model/items"

export default {

  getByColor: (req: Request,res: Response)=>{
    const { color }=req.params
    items.find({color: color}).then(items=>res.send(items))
  },

  getByGender: (req: Request,res: Response)=>{
    const { gender }=req.params
    items.find({gender: gender}).then(items=>res.send(items))
  },

  getBySize: (req: Request,res: Response)=>{
    const { size }=req.params
    items.find({size: size}).then(items=>res.send(items))
  },

  search: (req: Request,res: Response)=>{
    items.find({})
  }

}