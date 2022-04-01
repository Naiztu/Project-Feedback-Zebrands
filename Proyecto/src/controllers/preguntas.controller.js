const pool = require("../db");

//Obtener preguntas
async function getPreguntas(req, res) {
  const nivel = req.params.nivel;
  const dimension = req.params.dimension;
  console.log(nivel);
  console.log(dimension);

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
    id_chapter
  } = req.body


pool
  .execute(
    `
    INSERT INTO banco_preguntas (
      pregunta,
      index_pregunta,
      nivel_pregunta,
      dimension_pregunta,
      tipo_pregunta,
      id_chapter
      )
      VALUES (
         '${pregunta}',
         (SELECT MAX(b2.index_pregunta)+1 
  FROM banco_preguntas b2
  WHERE b2.id_chapter=${id_chapter} AND b2.nivel_pregunta=${nivel_pregunta} AND b2.dimension_pregunta='${dimension_pregunta}'),
         ${nivel_pregunta},
         '${dimension_pregunta}',
         '${tipo_pregunta}',
         ${id_chapter}
  )`
  )
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


pool
  .execute(
    `DELETE FROM banco_preguntas WHERE id_pregunta=${id_pregunta};`
  )
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
