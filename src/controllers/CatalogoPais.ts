import { Request, Response } from "express";
import Pais from "../models/CatalogoPais";


//TODO: crear los controladores
export const GETCPS = async (req: Request, res: Response) => {
    const pais = await Pais.findAll({
        where: {
            Habilitado: true,
        },
    });
    const habilitados = await Pais.count({
        where: {
            Habilitado: true,
        },
    });
    const deshabilitados = await Pais.count({
        where: {
            Habilitado: false,
        },
    });
    res.json({ pais, habilitados, deshabilitados });
};

export const GETCP = async (req: Request, res: Response) => {
    const { id } = req.params;

    const pais = await Pais.findByPk(id);
    if (pais) {
        res.json(pais);
    } else {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }
};

export const POSTCP = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const existe = await Pais.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El pais ya existe llamado ${body.Nombre}` });
        }
        const pais = await Pais.create(body);
        await pais.save();
        res.status(201).json(pais);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
};

export const PUTCP = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const pais = await Pais.findByPk(id);
        if (!pais) {
            return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
        }
        await pais.update(body);
        res.json(pais).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
};

export const PUTCPH = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Pais.findByPk(id).then((pais) => {
            if (!pais) {
                return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
            }
            pais.update({ Habilitado: 1 });
            res.json(pais).status(200);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al habilitar" });
    }
};

//TODO: eliminacion fisica de un registro
export const PUTCPD = async (req: Request, res: Response) => {
    const { id } = req.params;

    const pais = await Pais.findByPk(id);
    if (!pais) {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }

    await pais.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await pais.destroy();

    res.json(pais);
};