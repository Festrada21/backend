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
exports.profile = exports.singIn = exports.singUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuarios_1 = __importDefault(require("../models/usuarios"));
const key = "aa123456,./;'[][023678999751312+_+)&*^$*#~`";
const secretKey = process.env.KEY_SECRET;
const singUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existe = yield usuarios_1.default.findOne({
            where: {
                usuario: body.usuario,
            },
        });
        if (existe) {
            return res
                .status(400)
                .json({ msg: `El usuario ${body.usuario} ya existe!.` });
        }
        const pkey = secretKey || key;
        const usuario = yield usuarios_1.default.create({
            empleadoId: body.empleadoId,
            usuario: body.usuario,
            email: body.email,
            contraseña: body.contraseña,
            Habilitado: 1,
        });
        const token = jsonwebtoken_1.default.sign({ usuario }, pkey, { expiresIn: "1h" });
        yield usuario.save();
        res.status(201).header('auth_token', token).json(usuario);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Error al insertar" });
    }
});
exports.singUp = singUp;
const singIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userid = usuarios_1.default.findOne({
        where: {
            usuario: req.body.usuario,
            habilitado: 1,
        },
    });
    usuarios_1.default.findOne({
        where: {
            usuario: req.body.usuario,
            habilitado: 1,
        },
    }).then((Usuario) => {
        if (!Usuario) {
            return res.status(404).json({ msg: "Credenciales erroneas o usuario no habilitado" });
        }
        if (!Usuario.validPassword(req.body.contraseña)) {
            return res.status(401).json({ msg: "Contraseña incorrecta" });
        }
        const pkey = secretKey || key;
        const userId = Usuario.usuarioId;
        console.log(userId);
        const token = jsonwebtoken_1.default.sign({ _id: userId }, pkey, { expiresIn: 60 * 60 * 24 });
        res.status(200).header('auth_token', token).json(Usuario);
    });
});
exports.singIn = singIn;
const profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield usuarios_1.default.findByPk(req.userid);
    if (!user)
        return res.status(404).json({ msg: "Usuario no encontrado" });
    const user2 = usuarios_1.default.build({ contraseña: '0' });
    console.log(user); // '7cfc84b8ea898bb72462e78b4643cfccd77e9f05678ec2ce78754147ba947acc'
    res.json({ user2, user });
});
exports.profile = profile;
//# sourceMappingURL=Auth.js.map