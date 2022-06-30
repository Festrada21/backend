import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Usuario from "../models/usuarios";


const key = "aa123456,./;'[][023678999751312+_+)&*^$*#~`";
const secretKey =  process.env.KEY_SECRET;

export const singUp = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existe = await Usuario.findOne({
        where: {
            usuario: body.usuario,
        },
        });
        if (existe) {
        return res
            .status(400)
            .json({ msg: `El usuario ${body.usuario} ya existe!.` });
        }
        const pkey = secretKey || key;
        const usuario = await Usuario.create({
            empleadoId: body.empleadoId,
            usuario: body.usuario,
            email: body.email,
            contraseña: body.contraseña,
            Habilitado: 1,
        });
        const token:string =jwt.sign({ usuario }, pkey, { expiresIn: "1h" });  
        await usuario.save();
        res.status(201).header('auth_token',token).json(usuario);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
};


export const singIn = async (req: Request, res: Response) => {
    const userid =    Usuario.findOne({
        where: {
            usuario: req.body.usuario,
            habilitado: 1, 
        },});

   Usuario.findOne({
        where: {
            usuario: req.body.usuario,
            habilitado: 1, 
        },
    }).then((Usuario:any) => {
        if (!Usuario) {
            return res.status(404).json({ msg: "Credenciales erroneas o usuario no habilitado" });
        }
        if (!Usuario.validPassword(req.body.contraseña)) {
            return res.status(401).json({ msg: "Contraseña incorrecta" });
        }
        const pkey = secretKey || key;
        const userId = Usuario.usuarioId;
        console.log(userId);
        const token:string =jwt.sign({_id:userId}, pkey, { expiresIn: 60*60*24 });  
        res.status(200).header('auth_token',token).json(Usuario);
    });
    
  };

  export const profile = async (req: Request, res: Response) => {
    const user = await Usuario.findByPk(req.userid);
   
    if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });
    const user2 = Usuario.build({ contraseña: '0' });
console.log(user); // '7cfc84b8ea898bb72462e78b4643cfccd77e9f05678ec2ce78754147ba947acc'
      res.json({user2,user});
  };