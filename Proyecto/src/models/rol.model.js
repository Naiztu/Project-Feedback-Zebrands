import pool from "../database/db";

export class Rol {
  constructor() {}

  static async postAsignacion(id_assistant, id_member) {
    let conn = null;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();

      const [data1] = await conn.query(
        `SELECT * FROM empleado_rol WHERE id_empleado= ${id_assistant} AND 
        fecha_rol=(SELECT MAX(e2.fecha_rol) 
        FROM empleado_rol e2 WHERE e2.id_empleado= ${id_assistant});`
      );
      const rol_assistant = data1[0].id_rol;

      const [data2] = await conn.query(
        `SELECT * FROM empleado_rol WHERE id_empleado= ${id_member} AND 
        fecha_rol=(SELECT MAX(e2.fecha_rol) 
        FROM empleado_rol e2 WHERE e2.id_empleado= ${id_member});`
      );
      const rol_member = data2[0].id_rol;
    
      if (rol_assistant >= rol_member) {
        return { msg: "Inconsistencia en la jerarquia de roles" };
      }

      await conn.query(`
      INSERT INTO asignacion (id_empleado_member, id_empleado_assistant) 
      VALUES ( 
        ${id_member},
        ${id_assistant}
        );
        `);

      await conn.commit();
      await conn.release();
    } catch (error) {
      if (conn) {
        await conn.rollback();
        await conn.release();
      }
      throw error;
    }
  }

  static async getRol(id_empleado) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT * FROM empleado_rol WHERE id_empleado= ${id_empleado} AND 
            fecha_rol=(SELECT MAX(e2.fecha_rol) 
            FROM empleado_rol e2 WHERE e2.id_empleado= ${id_empleado});`
      );
      return rows[0];
    } catch (err) {
      throw { err };
    }
  }
}
