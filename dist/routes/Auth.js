"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../libs/validateToken"));
const Auth_1 = require("../controllers/Auth");
const authrouter = (0, express_1.Router)();
authrouter.post('/singup', Auth_1.singUp);
authrouter.post('/singin', Auth_1.singIn);
authrouter.get('/profile', validateToken_1.default, Auth_1.profile);
exports.default = authrouter;
//# sourceMappingURL=Auth.js.map