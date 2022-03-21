//Ejemplo de la estructura de las rutas

const { Router } = require("express");
const {
  getExample,
  updateExample,
} = require("../controllers/example.controller");

const router = Router();

router.get("/example", getExample);

router.put("/example", updateExample);

module.exports = router;
