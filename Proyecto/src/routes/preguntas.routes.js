const { Router } = require("express");

const { getPreguntas, registraPregunta} = require("../controllers/preguntas.controller");


const router = Router();

router.get("/:nivel/:dimension", getPreguntas);

router.post("/registra", registraPregunta);


module.exports = router;
