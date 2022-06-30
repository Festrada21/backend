"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../libs/validateToken"));
const CatalogoIdentificacionEmpleado_1 = require("../controllers/CatalogoIdentificacionEmpleado");
const routerCIE = (0, express_1.Router)();
routerCIE.get("/", validateToken_1.default, CatalogoIdentificacionEmpleado_1.GETCIES);
routerCIE.get("/:id", validateToken_1.default, CatalogoIdentificacionEmpleado_1.GETCIE);
routerCIE.post("/", validateToken_1.default, CatalogoIdentificacionEmpleado_1.POSTCIE);
routerCIE.put("/:id", validateToken_1.default, CatalogoIdentificacionEmpleado_1.PUTCIE);
routerCIE.put("/D/:id", validateToken_1.default, CatalogoIdentificacionEmpleado_1.PUTCIED);
routerCIE.put("/H/:id", validateToken_1.default, CatalogoIdentificacionEmpleado_1.PUTCIEH);
exports.default = routerCIE;
//# sourceMappingURL=CatalogoIdentificacionEmpleado.js.map