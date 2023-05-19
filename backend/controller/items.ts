import { Request, Response } from "express"
import items from "../model/items"
import user from "../model/user"

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

  searchWoman: (req: SearchRequest, res: Response)=>{
    const { query }=req.query
    items.find({
      $and:[
        {keyword: {$regex: new RegExp(query,"i")}},
        {gender: "female"}
    ]}).then(found=>res.send(found))
  },

  searchMan: (req: SearchRequest, res: Response)=>{
    const { query }=req.query
    items.find({
      $and:[
        {keyword: {$regex: new RegExp(query,"i")}},
        {gender: "male"}
    ]}).then(found=>res.send(found))
  },

  searchKids: (req: SearchRequest, res: Response)=>{
    const { query }=req.query
    items.find({
      $and:[
        {keyword: {$regex: new RegExp(query,"i")}},
        {gender: "kids"}
    ]}).then(found=>res.send(found))
  },

  offcanvasSearch: (req: Request, res: Response)=>{
    const { gender, type }=req.body
    items.find({
      $and: [
        {gender: gender},
        {type: type}
      ]
    }).then(found=>res.send(found))
  },

  getCartItems: async (req: Request, res: Response) => {
    const { id } = req.params;
    const currentUser = await user.findOne({ _id: id });
    const cart = (currentUser as any).cart;
  
    const cartItems: any = []
  
    await Promise.all(
      cart.map(async (e: any) => {
        const currentItem: any = await items.findOne({ _id: e });
        cartItems.push(currentItem as any)
      })
    )
    
    res.send(cartItems)
  }
}