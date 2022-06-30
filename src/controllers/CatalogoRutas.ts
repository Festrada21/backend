import { Request, Response } from "express";
import CatalogoRutas from "../models/CatalogoRutas";


//TODO: crear los controladores
export const GETRUTAS = async (req: Request, res: Response) => {
    const ruta = await CatalogoRutas.findAll();
    const habilitados = await CatalogoRutas.count();
    const deshabilitados = await CatalogoRutas.count();
    res.json({ ruta, habilitados, deshabilitados });
};

export const GETRUTA = async (req: Request, res: Response) => {
    const { id } = req.params;

    const ruta = await CatalogoRutas.findByPk(id);
    if (ruta) {
        res.json(ruta);
    } else {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
};

export const POSTRUTA = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existe = await CatalogoRutas.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El Registro ya existe llamado ${body.Nombre}` });
        }
        const ruta = await CatalogoRutas.create(body);
        await ruta.save();
        res.status(201).json(ruta);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
};

export const PUTRUTA = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const ruta = await CatalogoRutas.findByPk(id);
        if (!ruta) {
            return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
        }
        await ruta.update(body);
        res.json(ruta).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
};

export const PUTRUTAH = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await CatalogoRutas.findByPk(id).then((ruta) => {
            if (!ruta) {
                return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
            }
            ruta.update({ Habilitado: 1 });
            res.json(ruta).status(200);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al habilitar" });
    }
};

//TODO: eliminacion fisica de un registro
export const PUTRUTAD = async (req: Request, res: Response) => {
    const { id } = req.params;

    const ruta = await CatalogoRutas.findByPk(id);
    if (!ruta) {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }

    await ruta.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await ruta.destroy();

    res.json(ruta);
};