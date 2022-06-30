"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const key = "aa123456,./;'[][023678999751312+_+)&*^$*#~`";
const secretKey = process.env.KEY_SECRET;
const TokenValidation = (req, res, next) => {
    const token = req.header('auth_token');
    if (!token) {
        return res.status(401).json({ msg: 'Acceso denegado' });
    }
    const pkey = secretKey || key;
    const payload = jsonwebtoken_1.default.verify(token, pkey);
    // req.userId=payload._id;
    next();
};
exports.default = TokenValidation;
//# sourceMappingURL=validateToken.js.map