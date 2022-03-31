const { Router } = require("express");

const { getPreguntas, registraPregunta, eliminaPregunta } = require("../controllers/preguntas.controller");


const router = Router();

router.get("/:nivel/:dimension", getPreguntas);

router.post("/registra", registraPregunta);

router.delete("/:id_pregunta", eliminaPregunta);


module.exports = router;
