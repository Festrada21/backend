import { Request, Response } from "express";
import CatalogoIdentificacionEmpleado from "../models/CatalogoIdentificacionEmpleado";


//TODO: crear los controladores
export const GETCIES = async (req: Request, res: Response) => {
  const cie = await CatalogoIdentificacionEmpleado.findAll({
    where: {
      Habilitado: true,
    },
  });
  const habilitados = await CatalogoIdentificacionEmpleado.count({
    where: {
      Habilitado: true,
    },
  });
  const deshabilitados = await CatalogoIdentificacionEmpleado.count({
    where: {
      Habilitado: false,
    },
  });
  res.json({ cie, habilitados, deshabilitados });
};

export const GETCIE = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cie = await CatalogoIdentificacionEmpleado.findByPk(id);
  if (cie) {
    res.json(cie);
  } else {
    return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
  }
};

export const POSTCIE = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existe = await CatalogoIdentificacionEmpleado.findOne({
      where: {
        Nombre: body.Nombre,
      },
    });
    if (existe) {
      return res
        .status(400)
        .json({ msg: `El Registro ya existe llamado ${body.Nombre}` });
    }
    const cie = await CatalogoIdentificacionEmpleado.create(body);
    await cie.save();
    res.status(201).json(cie);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error al insertar" });
  }
};

export const PUTCIE = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const cie = await CatalogoIdentificacionEmpleado.findByPk(id);
    if (!cie) {
      return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
    await cie.update(body);
    res.json(cie).status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error al insertar" });
  }
};

export const PUTCIEH = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await CatalogoIdentificacionEmpleado.findByPk(id).then((cie) => {
      if (!cie) {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
      }
      cie.update({ Habilitado: 1 });
      res.json(cie).status(200);
    }); 
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error al habilitar" });
  }
};

//TODO: eliminacion fisica de un registro
export const PUTCIED= async (req: Request, res: Response) => {
  const { id } = req.params;

  const cie = await CatalogoIdentificacionEmpleado.findByPk(id);
  if (!cie) {
    return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
  }

  await cie.update({ Habilitado: 0 });
  //TODO: eliminar el registro fisico
  //await cie.destroy();

  res.json(cie);
};