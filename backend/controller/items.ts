import { Request, Response } from "express"
import items from "../model/items"

interface SearchRequest extends Request{
  query:{
    query: string
  }
}

export default {

  add: (req: Request, res: Response)=>{
    const { name, price, image,color, type, size, gender, keyword, description, conditions}=req.body
    items.create({name: name, price: price, image: image, color: color, type: type, size: size, gender: gender, keyword: keyword, description: description, conditions: conditions})
    .then(item=>res.send(item))
  },

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

  search: (req: SearchRequest,res: Response)=>{
    const { query }=req.query
    items.find({keyword: {$regex: new RegExp(query,"i")}}).then(items=>res.send(items))
  }
}