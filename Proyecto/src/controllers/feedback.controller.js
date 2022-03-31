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

async function getFeedbackHistory(req, res) {
  const { id_user } = req.params;
  pool
    .execute(
      `SELECT imagen_perfil, nombre, apellido_paterno, id_periodo, calificacion_promedio FROM feedback F
      INNER JOIN empleado E ON F.id_empleado_member = E.id_empleado WHERE id_empleado_member = ${id_user};`
    )
    .then(([rows, fieldData]) => {
      res.status(200).send({ feedbacks: rows });
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
}

async function postFeedback(req, res) {
  const { id_assistant, id_member } = req.params;
  const {
    calificacion_craft,
    calificacion_personal,
    calificacion_business,
    calificacion_promedio,
    comentario_craft,
    comentario_personal,
    comentario_business,
    comentario_general,
    id_periodo,
  } = req.body;

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
            ${calificacion_craft},
            ${calificacion_personal},
            ${calificacion_business},
            ${calificacion_promedio},
           '${comentario_craft}',
            '${comentario_personal}',
            '${comentario_business}',
            '${comentario_general}',
            ${id_member},
            ${id_assistant},
            ${id_periodo}        
        )`
    )
    .then(() => {
      console.log("Si jala");
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
}

module.exports = { getFeedback, getFeedbackHistory, postFeedback };
