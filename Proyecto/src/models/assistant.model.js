import pool from "../database/db";

export class Assistant {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(_id_assistant, _id_member) {
    this.id_assistant = _id_assistant;
    this.id_member = _id_member;
  }

  static async getDataListAssitant(id_assistant) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT e.id_empleado,e.nombre, e.apellido_materno, e.apellido_paterno, 
        e.imagen_perfil,
        e.equipo,
        e.nivel_general,e.nivel_craft , e.nivel_business, e.nivel_people,
        lastrol.id_rol  FROM empleado e
                INNER JOIN 
                (SELECT id_empleado, id_rol ,max(fecha_rol)
                FROM empleado_rol
                GROUP BY id_empleado) AS lastrol ON 
                  lastrol.id_empleado = e.id_empleado
                 WHERE e.id_empleado IN 
                 (SELECT a.id_empleado_member FROM asignacion a
                  WHERE vigente=1
                  AND id_empleado_assistant=${id_assistant});`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async updateAssistantR(id_member) {
    try {
      const [rows, fields] = await pool.execute(
        `UPDATE asignacion as a
          SET vigente = 0
          WHERE id_empleado_member = ${id_member}`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async getDataVigente(id_member) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT vigente
            FROM asignacion
            WHERE id_empleado_member = ${id_member} `
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async getAssistantVigente(id_member) {
    try {
      const [rows, fields] = await pool.execute(
        `
        SELECT id_empleado, nombre, apellido_paterno, apellido_materno, correo_electronico
        from empleado
        Where id_empleado IN(
          SELECT id_empleado_assistant
          from asignacion 
          WHERE 
          vigente=1 AND
          id_empleado_member = ${id_member})`
      );
      return rows[0];
    } catch (err) {
      throw { err };
    }
  }

  static async getMyAssistantID(id_member) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado_assistant from asignacion 
        WHERE 
        vigente=1 AND
        id_empleado_member = ${id_member}
        LIMIT 1`
      );
      return rows[0];
    } catch (err) {
      throw { err };
    }
  }
}
