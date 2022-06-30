import { Request, Response } from "express";
import vw_Empleados from "../views/vw_Empleados";
import Empleados from "../models/Empleados";


//TODO: crear los controladores
export const GETEMPS = async (req: Request, res: Response) => {
    const emp = await vw_Empleados.findAll();
    res.json({ emp });
};

export const GETEMP = async (req: Request, res: Response) => {
    const { id } = req.params;

    const emp = await vw_Empleados.findByPk(id);
    if (emp) {
        res.json(emp);
    } else {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
};

export const POSTEMP = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        // const existe = await Empleados.findOne({
        //   where: {
        //     Nombres: body.Nombres,
        //     Apellidos: body.Apellidos,
        //   },
        // });
        // if (existe) {
        //   return res
        //     .status(400)
        //     .json({ msg: `El Registro ya existe llamado ${body.Nombre}` });
        // }
        const emp = await Empleados.create(body);
        await emp.save();
        res.status(201).json(emp);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar " + err });
    }
};

export const PUTEMP = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const emp = await Empleados.findByPk(id);
        if (!emp) {
            return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
        }
        await emp.update(body);
        res.json(emp).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
};

export const PUTEMPH = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Empleados.findByPk(id).then((emp) => {
            if (!emp) {
                return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
            }
            emp.update({ Habilitado: 1 });
            res.json(emp).status(200);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al habilitar" });
    }
};

//TODO: eliminacion fisica de un registro
export const PUTEMPD = async (req: Request, res: Response) => {
    const { id } = req.params;

    const emp = await Empleados.findByPk(id);
    if (!emp) {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }

    await emp.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await emp.destroy();

    res.json(emp);
};