import pool from "../database/db";

export class Periodo {
  constructor() {}

  static async postPeriodo(
    nombre_periodo,
    fecha_inicio,
    fecha_fin,
    estatus_periodo,
    id_chapter
  ) {
    try {
      const [rows, fields] = await pool.execute(
        ` INSERT INTO periodo ( nombre_periodo, fecha_inicio, fecha_fin, estatus_periodo, id_chapter)
     VALUES (  
         '${nombre_periodo}',
         '${fecha_inicio}',
         '${fecha_fin}',
         '${estatus_periodo}',
         ${id_chapter}
        ) `
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }
  static async changeDate(fecha_inicio, fecha_fin, id_periodo) {
    try {
      const [rows, fields] = await pool.execute(
        `
        UPDATE periodo
        SET fecha_inicio='${fecha_inicio}', fecha_fin='${fecha_fin}' 
        WHERE periodo.id_periodo= ${id_periodo}
                `
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async getCurrentPeriodo(id_chapter) {
    try {
      const [rows, fields] = await pool.execute(
        ` SELECT * 
          FROM periodo 
          WHERE estatus_periodo = "Vigente"
                id_chapter=${id_chapter}
          LIMIT 1`
      );
      return rows[0];
    } catch (err) {
      throw { err };
    }
  }
}
