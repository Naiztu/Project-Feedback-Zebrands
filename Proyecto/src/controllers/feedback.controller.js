import pool from "../database/db";

//Obtener feedback
export async function getFeedback(req, res) {
  const { id_user, id_periodo } = req.params;

  try {
    const [rows, fields] = await pool.execute(
      `SELECT * FROM feedback WHERE id_empleado_member = ${id_user} AND id_periodo = ${id_periodo}`
    );
    rows.length === 0
      ? res.status(403).send({ feedback: rows[0] })
      : res.status(200).send({ feedback: rows[0] });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getFeedbackHistory(req, res) {
  const { id_user } = req.params;
  try {
    const [rows] = await pool.execute(
      `SELECT E2.imagen_perfil, E2.nombre, E2.apellido_paterno, 
      F.id_periodo, F.calificacion_promedio, P.nombre_periodo
      FROM feedback F, empleado E1, empleado E2, periodo P
      WHERE F.id_empleado_member = E1.id_empleado AND 
      F.id_empleado_assistant = E2.id_empleado AND 
      F.id_periodo = P.id_periodo AND E1.id_empleado = ${id_user};`
    );
    res.status(200).send({ feedbacks: rows });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getAllFeedbacks(req, res) {
  try {
    const [rows, fields] = await pool.execute(
      `SELECT imagen_perfil, nombre, apellido_paterno, id_periodo, calificacion_promedio 
      FROM feedback F INNER JOIN empleado E ON F.id_empleado_member = E.id_empleado`
    );
    res.status(200).send({ feedbacks: rows });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function postFeedback(req, res) {
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

  try {
    const [rows, fields] = await pool.execute(
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
    );
    res.status(200).send({ message: "post correct" });
  } catch (err) {
    res.status(500).send({ err });
  }
}
