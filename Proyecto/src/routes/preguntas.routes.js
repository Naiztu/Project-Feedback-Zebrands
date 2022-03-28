const { Router } = require("express");

const { getPreguntas} = require("../controllers/preguntas.controller");


const router = Router();

router.get("/:nivel/:dimension", getPreguntas);



module.exports = router;
