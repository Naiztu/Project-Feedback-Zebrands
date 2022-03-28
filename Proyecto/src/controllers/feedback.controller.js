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
      if (rows.length == 0) res.status(404).send({ feedback: rows[0] });
      else res.status(200).send({ feedback: rows[0] });
    })
    .catch((err) => {
      res.status(500);
      res.send({ err });
    });
}
module.exports = { getFeedback };
