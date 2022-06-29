import { Request, Response } from "express";
import Pais from "../models/catalogopais_model";

//TODO: crear los controladores
export const getCatalogopaises = async (res: Response) => {
    const pais = await Pais.findAll({
        where: {
            Habilitado: true,
        },
    });
    res.json({ pais});
};

export const getCatalogopais = async (req: Request, res: Response) => {
    const { id } = req.params;

    const pais = await Pais.findByPk(id);
    if (pais) {
        res.json(pais);
    } else {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }
};

export const postCatalogopais = async (req: Request, res: Response) => {
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

export const putCatalogopais = async (req: Request, res: Response) => {
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

//TODO: eliminacion fisica de un registro
export const deleteCatalogopais = async (req: Request, res: Response) => {
    const { id } = req.params;

    const pais = await Pais.findByPk(id);
    if (!pais) {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }

    await pais.update({ Habilitado: false });
    //TODO: eliminar el registro fisico
    //await pais.destroy();

    res.json(pais);
}; 