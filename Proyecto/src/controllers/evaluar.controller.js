import pool from "../database/db";
import { queryPostSolicitarEvaluaciones } from "../util/query";

//Obtener feedback
export async function getEvaluarPendiente(req, res) {
  const { id_user, id_periodo } = req.params;

  try {
    const [rows, fields] = await pool.execute(
      `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil FROM empleado
      where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E 
        WHERE id_periodo = ${id_periodo} AND id_empleado_evaluador = ${id_user} 
        AND estatus = "No Contestado");`
    );
    res.status(200).send({ pendientes: rows });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function postAsignarCompaniero(req, res) {
  const { lista_id_empleado_evaluador, id_empleado_evaluado, id_periodo } =
    req.body;

  try {
    const [rows, fields] = pool.execute(
      `${queryPostSolicitarEvaluaciones(
        lista_id_empleado_evaluador,
        id_empleado_evaluado,
        id_periodo
      )}`
    );
    res.status(200).end();
  } catch (err) {
    res.status(500).send({ err });
  }
}
