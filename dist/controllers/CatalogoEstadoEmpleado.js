"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUTCEED = exports.PUTCEEH = exports.PUTCEE = exports.POSTCEE = exports.GETCEE = exports.GETCEES = void 0;
const CatalogoEstadoEmpleado_1 = __importDefault(require("../models/CatalogoEstadoEmpleado"));
//TODO: crear los controladores
const GETCEES = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cee = yield CatalogoEstadoEmpleado_1.default.findAll({
        where: {
            Habilitado: true,
        },
    });
    const habilitados = yield CatalogoEstadoEmpleado_1.default.count({
        where: {
            Habilitado: true,
        },
    });
    const deshabilitados = yield CatalogoEstadoEmpleado_1.default.count({
        where: {
            Habilitado: false,
        },
    });
    res.json({ cee, habilitados, deshabilitados });
});
exports.GETCEES = GETCEES;
const GETCEE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cee = yield CatalogoEstadoEmpleado_1.default.findByPk(id);
    if (cee) {
        res.json(cee);
    }
    else {
        return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
    }
});
exports.GETCEE = GETCEE;
const POSTCEE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield CatalogoEstadoEmpleado_1.default.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El Estado Empleado ya existe llamado ${body.Nombre}` });
        }
        const cee = yield CatalogoEstadoEmpleado_1.default.create(body);
        yield cee.save();
        res.status(201).json(cee);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar " + err });
    }
});
exports.POSTCEE = POSTCEE;
const PUTCEE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cee = yield CatalogoEstadoEmpleado_1.default.findByPk(id);
        if (!cee) {
            return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
        }
        yield cee.update(body);
        res.json(cee).status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.PUTCEE = PUTCEE;
//TODO: eliminacion fisica de un registro
const PUTCEEH = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cee = yield CatalogoEstadoEmpleado_1.default.findByPk(id);
    if (!cee) {
        return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
    }
    yield cee.update({ Habilitado: 1 });
    //TODO: eliminar el registro fisico
    //await cee.destroy();
    res.json(cee);
});
exports.PUTCEEH = PUTCEEH;
const PUTCEED = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cee = yield CatalogoEstadoEmpleado_1.default.findByPk(id);
    if (!cee) {
        return res.status(404).json({ msg: `Estado Empleado no encontrado, id ${id}` });
    }
    yield cee.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await cee.destroy();
    res.json(cee);
});
exports.PUTCEED = PUTCEED;
//# sourceMappingURL=CatalogoEstadoEmpleado.js.map