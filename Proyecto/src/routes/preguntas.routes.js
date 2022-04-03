const { Router } = require("express");

const { getPreguntas, registraPregunta, eliminaPregunta, cambioLugar } = require("../controllers/preguntas.controller");


const router = Router();

router.get("/:nivel/:dimension", getPreguntas);

router.post("/registra", registraPregunta);

router.delete("/:id_pregunta", eliminaPregunta);

router.post("/cambio", cambioLugar);


module.exports = router;
