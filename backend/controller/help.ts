import { Request, Response } from "express"
import help from "../model/help"


interface SearchRequest extends Request{
    query:{
      query: string
    }
  }
search: (req: SearchRequest,res: Response)=>{
    const { query }=req.query
    help.find({keyword: {$regex: new RegExp(query,"i")}}).then(items=>res.send(items))
  }

