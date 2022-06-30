"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../libs/validateToken"));
const CatalogoGeneroEmpleado_1 = require("../controllers/CatalogoGeneroEmpleado");
const routercge = (0, express_1.Router)();
routercge.get("/", validateToken_1.default, CatalogoGeneroEmpleado_1.GETCGES);
routercge.get("/:id", validateToken_1.default, CatalogoGeneroEmpleado_1.GETCGE);
routercge.post("/", validateToken_1.default, CatalogoGeneroEmpleado_1.POSTCGE);
routercge.put("/:id", validateToken_1.default, CatalogoGeneroEmpleado_1.PUTCGE);
routercge.put("/D/:id", validateToken_1.default, CatalogoGeneroEmpleado_1.PUTCGED);
routercge.put("/H/:id", validateToken_1.default, CatalogoGeneroEmpleado_1.PUTCGEH);
exports.default = routercge;
//# sourceMappingURL=CatalogoGeneroEmpleado.js.map