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
exports.PUTCGED = exports.PUTCGEH = exports.PUTCGE = exports.POSTCGE = exports.GETCGE = exports.GETCGES = void 0;
const CatalogoGeneroEmpleado_1 = __importDefault(require("../models/CatalogoGeneroEmpleado"));
//TODO: crear los controladores
const GETCGES = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cge = yield CatalogoGeneroEmpleado_1.default.findAll({
        where: {
            Habilitado: true,
        },
    });
    const habilitados = yield CatalogoGeneroEmpleado_1.default.count({
        where: {
            Habilitado: true,
        },
    });
    const deshabilitados = yield CatalogoGeneroEmpleado_1.default.count({
        where: {
            Habilitado: false,
        },
    });
    res.json({ cge, habilitados, deshabilitados });
});
exports.GETCGES = GETCGES;
const GETCGE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cge = yield CatalogoGeneroEmpleado_1.default.findByPk(id);
    if (cge) {
        res.json(cge);
    }
    else {
        return res.status(404).json({ msg: `GeneroEmpleado no encontrado, id ${id}` });
    }
});
exports.GETCGE = GETCGE;
const POSTCGE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield CatalogoGeneroEmpleado_1.default.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El GeneroEmpleado ya existe llamado ${body.Nombre}` });
        }
        const cge = yield CatalogoGeneroEmpleado_1.default.create(body);
        yield cge.save();
        res.status(201).json(cge);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.POSTCGE = POSTCGE;
const PUTCGE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cge = yield CatalogoGeneroEmpleado_1.default.findByPk(id);
        if (!cge) {
            return res.status(404).json({ msg: `GeneroEmpleado no encontrado, id ${id}` });
        }
        yield cge.update(body);
        res.json(cge).status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.PUTCGE = PUTCGE;
const PUTCGEH = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield CatalogoGeneroEmpleado_1.default.findByPk(id).then((cge) => {
            if (!cge) {
                return res.status(404).json({ msg: `GeneroEmpleado no encontrado, id ${id}` });
            }
            cge.update({ Habilitado: 1 });
            res.json(cge).status(200);
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al habilitar" });
    }
});
exports.PUTCGEH = PUTCGEH;
//TODO: eliminacion fisica de un registro
const PUTCGED = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cge = yield CatalogoGeneroEmpleado_1.default.findByPk(id);
    if (!cge) {
        return res.status(404).json({ msg: `GeneroEmpleado no encontrado, id ${id}` });
    }
    yield cge.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await cge.destroy();
    res.json(cge);
});
exports.PUTCGED = PUTCGED;
//# sourceMappingURL=CatalogoGeneroEmpleado.js.map