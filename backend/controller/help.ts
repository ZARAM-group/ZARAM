import { Request, Response } from 'express';
import HelpModel from "../model/help"


interface Search extends Request{
    query:{
      query: string
    }
  }
export default {
searchHelp: (req: Search,res: Response)=>{
    const { query }=req.query
    console.log(query)
    HelpModel.find({question: query}).then(help=>res.send(help))
  }
}