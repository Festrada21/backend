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
exports.PUTCIED = exports.PUTCIEH = exports.PUTCIE = exports.POSTCIE = exports.GETCIE = exports.GETCIES = void 0;
const CatalogoIdentificacionEmpleado_1 = __importDefault(require("../models/CatalogoIdentificacionEmpleado"));
//TODO: crear los controladores
const GETCIES = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cie = yield CatalogoIdentificacionEmpleado_1.default.findAll({
        where: {
            Habilitado: true,
        },
    });
    const habilitados = yield CatalogoIdentificacionEmpleado_1.default.count({
        where: {
            Habilitado: true,
        },
    });
    const deshabilitados = yield CatalogoIdentificacionEmpleado_1.default.count({
        where: {
            Habilitado: false,
        },
    });
    res.json({ cie, habilitados, deshabilitados });
});
exports.GETCIES = GETCIES;
const GETCIE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cie = yield CatalogoIdentificacionEmpleado_1.default.findByPk(id);
    if (cie) {
        res.json(cie);
    }
    else {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
});
exports.GETCIE = GETCIE;
const POSTCIE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield CatalogoIdentificacionEmpleado_1.default.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El Registro ya existe llamado ${body.Nombre}` });
        }
        const cie = yield CatalogoIdentificacionEmpleado_1.default.create(body);
        yield cie.save();
        res.status(201).json(cie);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.POSTCIE = POSTCIE;
const PUTCIE = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const cie = yield CatalogoIdentificacionEmpleado_1.default.findByPk(id);
        if (!cie) {
            return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
        }
        yield cie.update(body);
        res.json(cie).status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.PUTCIE = PUTCIE;
const PUTCIEH = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield CatalogoIdentificacionEmpleado_1.default.findByPk(id).then((cie) => {
            if (!cie) {
                return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
            }
            cie.update({ Habilitado: 1 });
            res.json(cie).status(200);
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al habilitar" });
    }
});
exports.PUTCIEH = PUTCIEH;
//TODO: eliminacion fisica de un registro
const PUTCIED = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cie = yield CatalogoIdentificacionEmpleado_1.default.findByPk(id);
    if (!cie) {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
    yield cie.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await cie.destroy();
    res.json(cie);
});
exports.PUTCIED = PUTCIED;
//# sourceMappingURL=CatalogoIdentificacionEmpleado.js.map