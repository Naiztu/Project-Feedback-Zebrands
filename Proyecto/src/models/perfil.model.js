import pool from "../database/db";

export class Perfil {
  constructor(id_empleado) {
    this.id_empleado = id_empleado;
  }

  async getDataPerfil() {
    try {
      const [rows, fields] = await pool.execute(
        `
            SELECT E.nombre as "Nombre_Member", E.apellido_paterno as "Paterno_Member", E.apellido_materno as "Materno_Member", 
                E.imagen_perfil, E.nivel_general, E.nivel_business, E.nivel_craft, E.nivel_people, E.correo_electronico, 
                E.equipo, C.nombre_chapter, R.nombre_rol, E1.nombre as "Nombre_Assistant", E1.apellido_paterno as "Paterno_Assistant",
                E1.apellido_materno as "Materno_Assistant"
            FROM empleado E, empleado E1, asignacion A, empleado_rol ER, chapter C, rol R 
            WHERE E.id_chapter = C.id_chapter AND E.id_empleado = A.id_empleado_member AND 
                E.id_empleado = ER.id_empleado AND ER.id_rol = R.id_rol AND E.id_empleado = E.id_empleado AND
                E1.id_empleado = A.id_empleado_assistant AND E.id_empleado = ${this.id_empleado};
            `
      );

      return rows[0] || null;
    } catch (err) {
      throw { err };
    }
  }
}
