"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../libs/validateToken"));
const CatalogoEstadoEmpleado_1 = require("../controllers/CatalogoEstadoEmpleado");
const routercee = (0, express_1.Router)();
routercee.get("/", validateToken_1.default, CatalogoEstadoEmpleado_1.GETCEES);
routercee.get("/:id", validateToken_1.default, CatalogoEstadoEmpleado_1.GETCEE);
routercee.post("/", validateToken_1.default, CatalogoEstadoEmpleado_1.POSTCEE);
routercee.put("/:id", validateToken_1.default, CatalogoEstadoEmpleado_1.PUTCEE);
routercee.put("/D/:id", validateToken_1.default, CatalogoEstadoEmpleado_1.PUTCEED);
routercee.put("/H/:id", validateToken_1.default, CatalogoEstadoEmpleado_1.PUTCEEH);
exports.default = routercee;
//# sourceMappingURL=CatalogoEstadoEmpleado.js.map