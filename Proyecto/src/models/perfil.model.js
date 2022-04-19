import pool from "../database/db";

export class Perfil {
    constructor(id_empleado) {
      this.id_empleado = id_empleado;
    }
  
    async getDataPerfil() {
      try {
        const [rows, fields] = await pool.execute(
            `
            SELECT E.nombre as "Nombre Member", E.apellido_paterno as "Paterno Member", E.apellido_materno as "Materno Member", E.imagen_perfil, E.nivel_business, E.nivel_craft, E.nivel_people, E.activo, E.correo_electronico, E.password, E.equipo, C.nombre_chapter, R.nombre_rol, E1.nombre as "Nombre Assistant", E1.apellido_paterno as "Paterno Assistant", E1.apellido_materno as "Materno Assistant"
            FROM empleado E, empleado E1, asignacion A, empleado_rol ER, chapter C, rol R WHERE E.id_chapter = C.id_chapter AND E.id_empleado = A.id_empleado_member AND E.id_empleado = ER.id_empleado AND ER.id_rol = R.id_rol AND E.id_empleado = E.id_empleado AND E1.id_empleado = A.id_empleado_assistant AND E.id_empleado = ${this.id_empleado};
            `
        );
        return rows[0];
      } catch (err) {
        throw { err };
      }
    }
}
  