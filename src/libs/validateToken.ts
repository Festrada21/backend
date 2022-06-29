import jwt from 'jsonwebtoken';
import { Request,Response,NextFunction } from "express";

const key = "aa123456,./;'[][023678999751312+_+)&*^$*#~`";
const secretKey =  process.env.KEY_SECRET;

interface IPayload{
_id: string;
iat:number;
exp:number;
}

const TokenValidation =(req:Request, res:Response, next:NextFunction)=>{
    const token = req.header('auth_token');
    if(!token){return res.status(401).json({msg:'Acceso denegado'});}
    
    const pkey = secretKey || key;
    const payload=jwt.verify(token,pkey) as IPayload;
    // req.userId=payload._id;
    
    next();    
}

export default TokenValidation;