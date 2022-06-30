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
exports.PUTRUTAD = exports.PUTRUTAH = exports.PUTRUTA = exports.POSTRUTA = exports.GETRUTA = exports.GETRUTAS = void 0;
const CatalogoRutas_1 = __importDefault(require("../models/CatalogoRutas"));
//TODO: crear los controladores
const GETRUTAS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ruta = yield CatalogoRutas_1.default.findAll();
    const habilitados = yield CatalogoRutas_1.default.count();
    const deshabilitados = yield CatalogoRutas_1.default.count();
    res.json({ ruta, habilitados, deshabilitados });
});
exports.GETRUTAS = GETRUTAS;
const GETRUTA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ruta = yield CatalogoRutas_1.default.findByPk(id);
    if (ruta) {
        res.json(ruta);
    }
    else {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
});
exports.GETRUTA = GETRUTA;
const POSTRUTA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield CatalogoRutas_1.default.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El Registro ya existe llamado ${body.Nombre}` });
        }
        const ruta = yield CatalogoRutas_1.default.create(body);
        yield ruta.save();
        res.status(201).json(ruta);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.POSTRUTA = POSTRUTA;
const PUTRUTA = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const ruta = yield CatalogoRutas_1.default.findByPk(id);
        if (!ruta) {
            return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
        }
        yield ruta.update(body);
        res.json(ruta).status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.PUTRUTA = PUTRUTA;
const PUTRUTAH = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield CatalogoRutas_1.default.findByPk(id).then((ruta) => {
            if (!ruta) {
                return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
            }
            ruta.update({ Habilitado: 1 });
            res.json(ruta).status(200);
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al habilitar" });
    }
});
exports.PUTRUTAH = PUTRUTAH;
//TODO: eliminacion fisica de un registro
const PUTRUTAD = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ruta = yield CatalogoRutas_1.default.findByPk(id);
    if (!ruta) {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
    yield ruta.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await ruta.destroy();
    res.json(ruta);
});
exports.PUTRUTAD = PUTRUTAD;
//# sourceMappingURL=CatalogoRutas.js.map