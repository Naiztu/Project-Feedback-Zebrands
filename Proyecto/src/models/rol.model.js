import pool from "../database/db";

export class Rol {
  constructor() {
  }

  static async postAsignacion(id_assistant, id_member) {
    let conn = null;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();

      
     await conn.query(`
      INSERT INTO asignacion (id_empleado_member, id_empleado_assistant) 
      VALUES ( 
        ${id_member},
        ${id_assistant}
        );
    
        `);


       const msg = await conn.query(`
        INSERT INTO empleado_rol (id_empleado, id_rol) 
        VALUES ( 
          ${id_member},
          ${2}
          );`
          );
          console.log(msg);

      await conn.commit();
      await conn.release();
    } catch (error) {
        console.log(error)
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
