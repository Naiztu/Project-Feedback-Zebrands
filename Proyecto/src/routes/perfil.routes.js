import { Router } from "express";
import {
  getPerfil,
} from "../controllers/perfil.controller";

const router = Router();

router.get("/:id_empleado", getPerfil);


export default router;