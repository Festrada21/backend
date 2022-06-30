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
exports.PUTEMPD = exports.PUTEMPH = exports.PUTEMP = exports.POSTEMP = exports.GETEMP = exports.GETEMPS = void 0;
const vw_Empleados_1 = __importDefault(require("../views/vw_Empleados"));
const Empleados_1 = __importDefault(require("../models/Empleados"));
//TODO: crear los controladores
const GETEMPS = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const emp = yield vw_Empleados_1.default.findAll();
    res.json({ emp });
});
exports.GETEMPS = GETEMPS;
const GETEMP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const emp = yield vw_Empleados_1.default.findByPk(id);
    if (emp) {
        res.json(emp);
    }
    else {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
});
exports.GETEMP = GETEMP;
const POSTEMP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const emp = yield Empleados_1.default.create(body);
        yield emp.save();
        res.status(201).json(emp);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar " + err });
    }
});
exports.POSTEMP = POSTEMP;
const PUTEMP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const emp = yield Empleados_1.default.findByPk(id);
        if (!emp) {
            return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
        }
        yield emp.update(body);
        res.json(emp).status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.PUTEMP = PUTEMP;
const PUTEMPH = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield Empleados_1.default.findByPk(id).then((emp) => {
            if (!emp) {
                return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
            }
            emp.update({ Habilitado: 1 });
            res.json(emp).status(200);
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al habilitar" });
    }
});
exports.PUTEMPH = PUTEMPH;
//TODO: eliminacion fisica de un registro
const PUTEMPD = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const emp = yield Empleados_1.default.findByPk(id);
    if (!emp) {
        return res.status(404).json({ msg: `Registro no encontrado, id ${id}` });
    }
    yield emp.update({ Habilitado: 0 });
    //TODO: eliminar el registro fisico
    //await emp.destroy();
    res.json(emp);
});
exports.PUTEMPD = PUTEMPD;
//# sourceMappingURL=Empleados.js.map