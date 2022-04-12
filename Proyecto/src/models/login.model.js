import pool from "../database/db";

export class Login {
  constructor() {
  }

    static async getLogin(correo, password) {
        let conn = null;
        try {
          conn = await pool.getConnection();
          await conn.beginTransaction();
    
          const [id_empleado] =await conn.query(`
          SELECT id_empleado FROM empleado WHERE 
          correo_electronico= '${correo}' AND
              password='${password}'
            `);
       
    
          await conn.commit();
          await conn.release();
          console.log("el id es:"+id_empleado[0].id_empleado);

            return id_empleado[0].id_empleado;
        } catch (error) {
            console.log(error);
          if (conn) {
            await conn.rollback();
            await conn.release();
          }
          throw error;
        }
    }
}
