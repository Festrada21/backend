import { Router } from "express";
import TokenValidation from "../libs/validateToken";
import {
  GETCGE,
  GETCGES,
  POSTCGE,
  PUTCGE,
  PUTCGED,
  PUTCGEH,
} from "../controllers/CatalogoGeneroEmpleado";

const routercge = Router();

routercge.get("/", TokenValidation,GETCGES);
routercge.get("/:id",TokenValidation, GETCGE);
routercge.post("/",TokenValidation, POSTCGE);
routercge.put("/:id",TokenValidation, PUTCGE);
routercge.put("/D/:id",TokenValidation, PUTCGED);
routercge.put("/H/:id",TokenValidation, PUTCGEH);

export default routercge;