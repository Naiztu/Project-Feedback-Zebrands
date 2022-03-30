const pool = require("../db");

//Obtener feedback
async function getFeedback(req, res) {
  const id_user = req.params.id_user;
  const id_periodo = req.params.id_periodo;

  pool
    .execute(
      `SELECT * FROM feedback WHERE id_empleado_member = ${id_user} AND id_periodo = ${id_periodo}`
    )
    .then(([rows, fieldData]) => {
      if (rows.length === 0) res.status(404).send({ feedback: rows[0] });
      else res.status(200).send({ feedback: rows[0] });
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
}


async function postFeedback(req, res) {
  const id_assistant = req.params.id_assistant;
  const id_member = req.params.id_member;
  console.log(id_assistant);
  console.log(id_member);


  pool
    .execute(

      `INSERT INTO feedback (
        calificacion_craft,
        calificacion_personal,
        calificacion_business,
        calificacion_promedio,
        comentario_craft,
        comentario_personal,
        comentario_business,
        comentario_general,
        id_empleado_member,
        id_empleado_assistant,
        id_periodo
        )
        VALUES (
            ${req.body.calificacion_craft},
            ${req.body.calificacion_personal},
            ${req.body.calificacion_business},
            ${req.body.calificacion_promedio},
            ${req.body.comentario_craft},
            ${req.body.comentario_personal},
            ${req.body.comentario_business},
            ${req.body.comentario_general},
            ${id_member},
            ${id_assistant},
            ${req.body.id_periodo}        
        )`

    )
    .then(() => {
      console.log ("Si jala");
      res.status(200).end();
  
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
}

module.exports = { getFeedback, postFeedback };



