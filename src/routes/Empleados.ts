import { Router } from "express";
import TokenValidation from "../libs/validateToken";
import {
  GETEMP,
  GETEMPS,
  POSTEMP,
  PUTEMP,
  PUTEMPD,
  PUTEMPH,
} from "../controllers/Empleados";

const routerEMP = Router();

routerEMP.get("/", TokenValidation,GETEMPS);
routerEMP.get("/:id",TokenValidation, GETEMP);
routerEMP.post("/",TokenValidation, POSTEMP);
routerEMP.put("/:id",TokenValidation, PUTEMP);
routerEMP.put("/D/:id",TokenValidation, PUTEMPD);
routerEMP.put("/H/:id",TokenValidation, PUTEMPH);

export default routerEMP;