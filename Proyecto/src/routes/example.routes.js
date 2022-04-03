//Ejemplo de la estructura de las rutas

const { Router } = require("express");
const {
  getExample,
  updateExample,
} = require("../controllers/example.controller");

const router = Router();

router.get("/", getExample);

router.put("/", updateExample);

export default router;
