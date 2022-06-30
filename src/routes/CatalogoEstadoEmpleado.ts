

import { Router } from "express";
import TokenValidation from "../libs/validateToken";
import {
  GETCEE,
  GETCEES,
  POSTCEE,
  PUTCEE,
  PUTCEED,
  PUTCEEH,
} from "../controllers/CatalogoEstadoEmpleado";

const routercee = Router();

routercee.get("/", TokenValidation,GETCEES);
routercee.get("/:id",TokenValidation, GETCEE);
routercee.post("/",TokenValidation, POSTCEE);
routercee.put("/:id",TokenValidation, PUTCEE);
routercee.put("/D/:id",TokenValidation, PUTCEED);
routercee.put("/H/:id",TokenValidation, PUTCEEH);

export default routercee;