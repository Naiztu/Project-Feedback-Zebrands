const pool = require("../db");

//Obtener preguntas
async function getPreguntas(req, res) {
  const nivel = req.params.nivel;
  const dimension = req.params.dimension;

  pool
    .execute(
      `SELECT * FROM banco_preguntas WHERE dimension_pregunta='${dimension}' and nivel_pregunta=${nivel};`
    )
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
    index_pregunta,
    nivel_pregunta,
    dimension_pregunta,
    tipo_pregunta,
    id_chapter,
  } = req.body;

  pool
    .execute(
      `INSERT INTO banco_preguntas (
      pregunta,
      index_pregunta,
      nivel_pregunta,
      dimension_pregunta,
       tipo_pregunta,
      id_chapter
      )
      VALUES (
         '${pregunta}',
         ${index_pregunta},
         ${nivel_pregunta},
         '${dimension_pregunta}',
         '${tipo_pregunta}',
         ${id_chapter}
  )`
    )
    .then(() => {
      console.log("Si jala registrar");
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500);
      res.send({ err });
    });
}

async function eliminaPregunta(req, res) {
  const id_pregunta = req.params.id_pregunta;

  pool
    .execute(`DELETE FROM banco_preguntas WHERE id_pregunta=${id_pregunta};`)
    .then(() => {
      console.log("Si jala eliminar");
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500);
      res.send({ err });
    });
}

module.exports = { getPreguntas, registraPregunta, eliminaPregunta };
