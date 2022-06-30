"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../libs/validateToken"));
const CatalogoRutas_1 = require("../controllers/CatalogoRutas");
const routerRUTA = (0, express_1.Router)();
routerRUTA.get("/", validateToken_1.default, CatalogoRutas_1.GETRUTAS);
routerRUTA.get("/:id", validateToken_1.default, CatalogoRutas_1.GETRUTA);
routerRUTA.post("/", validateToken_1.default, CatalogoRutas_1.POSTRUTA);
routerRUTA.put("/:id", validateToken_1.default, CatalogoRutas_1.PUTRUTA);
routerRUTA.put("/D/:id", validateToken_1.default, CatalogoRutas_1.PUTRUTAD);
routerRUTA.put("/H/:id", validateToken_1.default, CatalogoRutas_1.PUTRUTAH);
exports.default = routerRUTA;
//# sourceMappingURL=CatalogoRutas.js.map