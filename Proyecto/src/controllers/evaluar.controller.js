const pool = require("../db");

//Obtener feedback
async function getEvaluarPendiente(req, res) {
    const id_user = req.params.id_user;
    const id_periodo = req.params.id_periodo;

  pool
    .execute(
      `SELECT id_empleado,nombre, apellido_materno, apellido_paterno from empleado
      where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E WHERE id_periodo = ${id_periodo} AND id_empleado_evaluador = ${id_user} AND estatus = "No Contestado");`
    )
    .then(([rows, fieldData]) => {
      if (rows.length == 0) res.status(404).send({ feedback: rows[0] });
      else res.status(200).send({ feedback: rows[0] });
    })
    .catch((err) => {
      res.status(500);
      res.send({ err });
    });
}
module.exports = { getEvaluarPendiente };
