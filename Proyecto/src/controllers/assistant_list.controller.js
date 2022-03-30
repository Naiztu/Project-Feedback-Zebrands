const pool = require("../db");

//Obtener feedback
async function getAssistantList(req, res) {
  const id_assistant = req.params.id_assistant;
  pool
    .execute(
        `SELECT id_empleado,nombre, apellido_materno, apellido_paterno, imagen_perfil FROM empleado
        WHERE id_empleado IN (SELECT a.id_empleado_member FROM asignacion a
        WHERE a.fecha_asignacion IN (SELECT max(a2.fecha_asignacion) 
        FROM asignacion a2 WHERE a2.id_empleado_member=a.id_empleado_member) 
        AND id_empleado_assistant=${id_assistant});`

    )
    .then(([rows, fieldData]) => {
      console.log({ members: rows });
      res.send({ members: rows });
    })
    .catch((err) => {
      res.status(500);
      res.send({ err });
    });
}
module.exports = { getAssistantList };
