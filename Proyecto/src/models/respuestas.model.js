import pool from "../database/db";
import { queryPostRespuestas } from "../util/query";

export class Respuesta {
  static async getRes(id_evaluado, id_evaluador, id_periodo) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT * FROM respuesta
        WHERE id_empleado_evaluado=${id_evaluado}
        AND id_empleado_evaluador=${id_evaluador}
        AND id_periodo=${id_periodo}
        ORDER BY id_respuesta ASC;`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }
}

export class pstRespuesta {
  constructor(
    _id_empleado_evaluador,
    _id_empleado_evaluado,
    _id_periodo,
    _lista_preguntas
  ) {
    this.id_empleado_evaluador = _id_empleado_evaluador;
    this.id_empleado_evaluado = _id_empleado_evaluado;
    this.id_periodo = _id_periodo;
    this.lista_preguntas = _lista_preguntas;
  }

  async postRespuestas() {
    let conn = null;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();
      const [rows, fields] = await conn.query(`
        ${queryPostRespuestas(
          this.id_empleado_evaluador,
          this.id_empleado_evaluado,
          this.id_periodo,
          this.lista_preguntas
        )}
        `);

      await conn.query(`
        UPDATE evaluacion SET estatus = 'Contestado' WHERE evaluacion.id_empleado_evaluador = ${this.id_empleado_evaluador} 
        AND evaluacion.id_empleado_evaluado = ${this.id_empleado_evaluado} AND evaluacion.id_periodo = ${this.id_periodo}
        `);

      await conn.commit();
      await conn.release();
      return rows;
    } catch (error) {
      if (conn) {
        await conn.rollback();
        await conn.release();
      }
      throw error;
    }
  }
}
