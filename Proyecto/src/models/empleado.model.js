import pool from "../database/db";

export class Empleado {
  constructor(id_empleado) {
    this.id_empleado = id_empleado;
  }

  async getDataEmpleado() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil, nivel_business, nivel_craft, nivel_people  
                FROM empleado WHERE id_empleado = ${this.id_empleado}`
      );
      return rows[0];
    } catch (err) {
      throw { err };
    }
  }
}
