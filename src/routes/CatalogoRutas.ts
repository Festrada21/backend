import { Router } from "express";
import TokenValidation from "../libs/validateToken";
import {
  GETRUTA,
  GETRUTAS,
  POSTRUTA,
  PUTRUTA,
  PUTRUTAD,
  PUTRUTAH,
} from "../controllers/CatalogoRutas";

const routerRUTA = Router();

routerRUTA.get("/", TokenValidation,GETRUTAS);
routerRUTA.get("/:id",TokenValidation, GETRUTA);
routerRUTA.post("/",TokenValidation, POSTRUTA);
routerRUTA.put("/:id",TokenValidation, PUTRUTA);
routerRUTA.put("/D/:id",TokenValidation, PUTRUTAD);
routerRUTA.put("/H/:id",TokenValidation, PUTRUTAH);

export default routerRUTA;