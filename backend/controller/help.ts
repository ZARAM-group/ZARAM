import { Request, Response } from "express"
import help from "../model/help"


interface help extends Request{
    query:{
      query: string
    }
  }
search: (req: help,res: Response)=>{
    const { query }=req.query
    help.find({keyword: {$regex: new RegExp(query,"i")}}).then(help=>res.send(help))
  }
