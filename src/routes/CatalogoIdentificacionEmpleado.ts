import { Router } from "express";
import TokenValidation from "../libs/validateToken";
import {
  GETCIE,
  GETCIES,
  POSTCIE,
  PUTCIE,
  PUTCIED,
  PUTCIEH,
} from "../controllers/CatalogoIdentificacionEmpleado";

const routerCIE = Router();

routerCIE.get("/", TokenValidation,GETCIES);
routerCIE.get("/:id",TokenValidation, GETCIE);
routerCIE.post("/",TokenValidation, POSTCIE);
routerCIE.put("/:id",TokenValidation, PUTCIE);
routerCIE.put("/D/:id",TokenValidation, PUTCIED);
routerCIE.put("/H/:id",TokenValidation, PUTCIEH);

export default routerCIE;