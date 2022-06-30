"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../libs/validateToken"));
const Empleados_1 = require("../controllers/Empleados");
const routerEMP = (0, express_1.Router)();
routerEMP.get("/", validateToken_1.default, Empleados_1.GETEMPS);
routerEMP.get("/:id", validateToken_1.default, Empleados_1.GETEMP);
routerEMP.post("/", validateToken_1.default, Empleados_1.POSTEMP);
routerEMP.put("/:id", validateToken_1.default, Empleados_1.PUTEMP);
routerEMP.put("/D/:id", validateToken_1.default, Empleados_1.PUTEMPD);
routerEMP.put("/H/:id", validateToken_1.default, Empleados_1.PUTEMPH);
exports.default = routerEMP;
//# sourceMappingURL=Empleados.js.map