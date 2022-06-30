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
exports.PUTCPD = exports.PUTCPH = exports.PUTCP = exports.POSTCP = exports.GETCP = exports.GETCPS = void 0;
const CatalogoPais_1 = __importDefault(require("../models/CatalogoPais"));
//TODO: crear los controladores
const GETCPS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pais = yield CatalogoPais_1.default.findAll({
        where: {
            Habilitado: true,
        },
    });
    const habilitados = yield CatalogoPais_1.default.count({
        where: {
            Habilitado: true,
        },
    });
    const deshabilitados = yield CatalogoPais_1.default.count({
        where: {
            Habilitado: false,
        },
    });
    res.json({ pais, habilitados, deshabilitados });
});
exports.GETCPS = GETCPS;
const GETCP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pais = yield CatalogoPais_1.default.findByPk(id);
    if (pais) {
        res.json(pais);
    }
    else {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }
});
exports.GETCP = GETCP;
const POSTCP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield CatalogoPais_1.default.findOne({
            where: {
                Nombre: body.Nombre,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El pais ya existe llamado ${body.Nombre}` });
        }
        const pais = yield CatalogoPais_1.default.create(body);
        yield pais.save();
        res.status(201).json(pais);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.POSTCP = POSTCP;
const PUTCP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const pais = yield CatalogoPais_1.default.findByPk(id);
        if (!pais) {
            return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
        }
        yield pais.update(body);
        res.json(pais).status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.PUTCP = PUTCP;
const PUTCPH = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield CatalogoPais_1.default.findByPk(id).then((pais) => {
            if (!pais) {
                return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
            }
            pais.update({ Habilitado: 1 });
            res.json(pais).status(200);
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al habilitar" });
    }
});
exports.PUTCPH = PUTCPH;
//TODO: eliminacion fisica de un registro
const PUTCPD = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pais = yield CatalogoPais_1.default.findByPk(id);
    if (!pais) {
        return res.status(404).json({ msg: `Pais no encontrado, id ${id}` });
    }
    yield pais.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await pais.destroy();
    res.json(pais);
});
exports.PUTCPD = PUTCPD;
//# sourceMappingURL=CatalogoPais.js.map