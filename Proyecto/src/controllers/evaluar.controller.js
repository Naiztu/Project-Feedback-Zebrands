const pool = require("../database/db");

//Obtener feedback
async function getEvaluarPendiente(req, res) {
  const { id_user, id_periodo } = req.params;

  pool
    .execute(
      `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil FROM empleado
      where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E 
        WHERE id_periodo = ${id_periodo} AND id_empleado_evaluador = ${id_user} 
        AND estatus = "No Contestado");`
    )
    .then(([rows, fieldData]) => {
      res.status(200).send({ pendientes: rows });
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
}

async function postAsignarCompaniero(req, res) {
  //const id_user = req.params.id_user;
  const { lista_id_empleado_evaluador, id_empleado_evaluado, id_periodo } =
    req.body;

  pool
    .execute(
      `${generateQuery(
        lista_id_empleado_evaluador,
        id_empleado_evaluado,
        id_periodo
      )}`
    )

    .then(() => {
      console.log("Si jala asignar compa");
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
}

// Función para automatizar los POST de la función
function generateQuery(lista_id_empleado_evaluador, id_evaluado, id_periodo) {
  let s = `INSERT INTO evaluacion (
      id_empleado_evaluador,
      id_empleado_evaluado,
      id_periodo,
      estatus,
      fecha_realizacion
      )
      VALUES`;
  for (let i of lista_id_empleado_evaluador) {
    s +=
      "(" +
      i +
      "," +
      id_evaluado +
      "," +
      id_periodo +
      "," +
      "'No Contestado'" +
      "," +
      "NULL" +
      "),";
  }
  const query = s.slice(0, -1);

  return query;
}

module.exports = { getEvaluarPendiente, postAsignarCompaniero };
