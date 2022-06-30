import { Request, Response } from "express";
import CatalogoGeneroEmpleado from "../models/CatalogoGeneroEmpleado";


//TODO: crear los controladores
export const GETCGES = async (req: Request, res: Response) => {
  const cge = await CatalogoGeneroEmpleado.findAll({
    where: {
      Habilitado: true,
    },
  });
  const habilitados = await CatalogoGeneroEmpleado.count({
    where: {
      Habilitado: true,
    },
  });
  const deshabilitados = await CatalogoGeneroEmpleado.count({
    where: {
      Habilitado: false,
    },
  });
  res.json({ cge, habilitados, deshabilitados });
};

export const GETCGE = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cge = await CatalogoGeneroEmpleado.findByPk(id);
  if (cge) {
    res.json(cge);
  } else {
    return res.status(404).json({ msg: `GeneroEmpleado no encontrado, id ${id}` });
  }
};

export const POSTCGE = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existe = await CatalogoGeneroEmpleado.findOne({
      where: {
        Nombre: body.Nombre,
      },
    });
    if (existe) {
      return res
        .status(400)
        .json({ msg: `El GeneroEmpleado ya existe llamado ${body.Nombre}` });
    }
    const cge = await CatalogoGeneroEmpleado.create(body);
    await cge.save();
    res.status(201).json(cge);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error al insertar" });
  }
};

export const PUTCGE = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const cge = await CatalogoGeneroEmpleado.findByPk(id);
    if (!cge) {
      return res.status(404).json({ msg: `GeneroEmpleado no encontrado, id ${id}` });
    }
    await cge.update(body);
    res.json(cge).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error al insertar" });
  }
};

export const PUTCGEH = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await CatalogoGeneroEmpleado.findByPk(id).then((cge) => {
      if (!cge) {
        return res.status(404).json({ msg: `GeneroEmpleado no encontrado, id ${id}` });
      }
      cge.update({ Habilitado: 1 });
      res.json(cge).status(200);
    }); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error al habilitar" });
  }
};

//TODO: eliminacion fisica de un registro
export const PUTCGED= async (req: Request, res: Response) => {
  const { id } = req.params;

  const cge = await CatalogoGeneroEmpleado.findByPk(id);
  if (!cge) {
    return res.status(404).json({ msg: `GeneroEmpleado no encontrado, id ${id}` });
  }

  await cge.update({ Habilitado: 0 });
  //TODO: eliminar el registro fisico
  //await cge.destroy();

  res.json(cge);
};