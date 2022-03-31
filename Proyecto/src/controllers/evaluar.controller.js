const pool = require("../db");

//Obtener feedback
async function getEvaluarPendiente(req, res) {
  const { id_user, id_periodo } = req.params;

  pool
    .execute(
      `SELECT id_empleado,nombre, apellido_materno, apellido_paterno from empleado
      where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E 
        WHERE id_periodo = ${id_periodo} AND id_empleado_evaluador = ${id_user} 
        AND estatus = "No Contestado");`
    )
    .then(([rows, fieldData]) => {
      res.status(200).send({ feedback: rows });
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
}
module.exports = { getEvaluarPendiente };
