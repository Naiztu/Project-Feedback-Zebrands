const pool = require("../db");
const {SeccionPreguntas, Pregunta} = require('../models/preguntas.model');

//Obtener preguntas
async function getPreguntas(req, res) {
  const nivel = req.params.nivel;
  const dimension = req.params.dimension;
  console.log(nivel);
  console.log(dimension);

  preguntas=new SeccionPreguntas(nivel,dimension);
  console.log(preguntas);

  preguntas.fetchAll()
    .then(([rows, fieldData]) => {
      //Se envian todas las preguntas en rows

      res.send({ preguntas: rows });
    })
    .catch((err) => {
      res.status(500);
      res.send({ err });
    });
}

async function registraPregunta(req, res) {
  //const id_user = req.params.id_user;
  const {
    pregunta,
    nivel_pregunta,
    dimension_pregunta,
    tipo_pregunta,
    id_chapter
  } = req.body

  nueva_pregunta=new Pregunta( pregunta,
    nivel_pregunta,
    dimension_pregunta,
    tipo_pregunta,
    id_chapter)
    console.log(nueva_pregunta);
  
    nueva_pregunta.save()
  .then(() => {

    console.log ("Si jala registrar");
    res.status(200).end();

  })
  .catch((err) => {
    res.status(500);
    res.send({ err });
  });
}


async function eliminaPregunta(req, res) {
  
  const id_pregunta = req.params.id_pregunta;
  SeccionPreguntas.delete(id_pregunta)
  .then(() => {
    console.log ("Si jala eliminar");
    res.status(200).end();
  })
  .catch((err) => {
    res.status(500);
    res.send({ err });
  });
}


module.exports = { getPreguntas ,registraPregunta, eliminaPregunta };
