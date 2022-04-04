import pool from "../database/db";

export async function getEmpleado(req, res) {
  const { id_empleado } = req.params;
  try {
    const [rows, fields] = await pool.execute(
      `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil 
      FROM empleado WHERE id_empleado = ${id_empleado}`
    );
    rows.length === 0
      ? res.status(403).send({ err: "No hay ese empleado" })
      : res.status(200).send({ empleado: rows[0] });
  } catch (err) {
    res.status(500).send({ err });
  }
}
