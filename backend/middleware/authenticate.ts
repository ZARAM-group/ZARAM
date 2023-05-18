
import jwt, { Secret } from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";

const authenticate = async (req: Request,res: Response,next: NextFunction)=>{
  
  const token = req.headers.authorization

  if(!token){
    res.send({message: "Authorization failed: Unauthorized"})
  }
  
  try{
    jwt.verify((token as string), (process.env.token as Secret))
    next()
  }
  catch(err){
    res.status(500).send(err)
  }
}

export default authenticate