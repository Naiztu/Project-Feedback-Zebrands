import pool from "../database/db";
import {pag,orderBy } from "../util/query";
export class Feedback {
  constructor(
    _calificacion_craft,
    _calificacion_personal,
    _calificacion_business,
    _calificacion_promedio,
    _comentario_craft,
    _comentario_personal,
    _comentario_business,
    _comentario_general,
    _id_member,
    _id_assistant,
    _id_periodo,
    dimension,
  ) {
    this.calificacion_craft = _calificacion_craft;
    this.calificacion_personal = _calificacion_personal;
    this.calificacion_business = _calificacion_business;
    this.calificacion_promedio = _calificacion_promedio;
    this.comentario_craft = _comentario_craft;
    this.comentario_personal = _comentario_personal;
    this.comentario_business = _comentario_business;
    this.comentario_general = _comentario_general;
    this.id_member = _id_member;
    this.id_assistant = _id_assistant;
    this.id_periodo = _id_periodo;
  }

  static async getDataFeedback(id_member, id_periodo) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT * FROM feedback 
        WHERE id_empleado_member = ${id_member} 
        AND id_periodo = ${id_periodo}`
      );
      return rows[0];
    } catch (err) {
      throw { err };
    }
  }

  static async getDataFeedbackGraph(id_member) {

    try {
      const [rows, fields] = await pool.execute(
        `SELECT calificacion_promedio,calificacion_business, calificacion_personal, calificacion_craft,  id_periodo, id_feedback, id_empleado_member
        FROM feedback
        WHERE id_empleado_member = ${id_member}
        ORDER by id_periodo
        DESC LIMIT 5        
        `


      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async getDataAllGraph() {

    try {
      const [rows, fields] = await pool.execute(
        `SELECT AVG(calificacion_craft), AVG(calificacion_personal), AVG(calificacion_business), AVG(calificacion_promedio), id_periodo
        FROM feedback
        GROUP BY id_periodo
                `
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }




  static async getDataHistoryFeedback(id_member) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT E2.imagen_perfil, E2.nombre, E2.apellido_paterno, 
                F.id_periodo, F.calificacion_promedio, P.nombre_periodo
                FROM feedback F, empleado E1, empleado E2, periodo P
                WHERE F.id_empleado_member = E1.id_empleado AND 
                F.id_empleado_assistant = E2.id_empleado AND 
                F.id_periodo = P.id_periodo AND E1.id_empleado = ${id_member};`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async getDataAllFeedback() {
   
    try {
      const [rows, fields] = await pool.execute(
        `SELECT imagen_perfil, nombre, apellido_paterno, id_periodo, calificacion_promedio 
          FROM feedback F INNER JOIN empleado E ON F.id_empleado_member = E.id_empleado 
          ${orderBy("id_periodo","DESC")}
          ${pag(1,15)}`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  async postDataFeedback() {
    try {
      const [rows, fields] = await pool.execute(
        `INSERT INTO feedback (
                calificacion_craft,
                calificacion_personal,
                calificacion_business,
                calificacion_promedio,
                comentario_craft,
                comentario_personal,
                comentario_business,
                comentario_general,
                id_empleado_member,
                id_empleado_assistant,
                id_periodo
                )
                VALUES (
                    ${this.calificacion_craft},
                    ${this.calificacion_personal},
                    ${this.calificacion_business},
                    ${this.calificacion_promedio},
                    '${this.comentario_craft}',
                    '${this.comentario_personal}',
                    '${this.comentario_business}',
                    '${this.comentario_general}',
                    ${this.id_member},
                    ${this.id_assistant},
                    ${this.id_periodo}        
                )`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }


}

export class post_Feedback {
  constructor(
    _calificacion_craft,
    _calificacion_personal,
    _calificacion_business,
    _calificacion_promedio,
    _comentario_craft,
    _comentario_personal,
    _comentario_business,
    _comentario_general,
    _id_member,
    _id_assistant,
    _id_periodo
  ) {
    this.calificacion_craft = _calificacion_craft;
    this.calificacion_personal = _calificacion_personal;
    this.calificacion_business = _calificacion_business;
    this.calificacion_promedio = _calificacion_promedio;
    this.comentario_craft = _comentario_craft;
    this.comentario_personal = _comentario_personal;
    this.comentario_business = _comentario_business;
    this.comentario_general = _comentario_general;
    this.id_member = _id_member;
    this.id_assistant = _id_assistant;
    this.id_periodo = _id_periodo;
  }

  async postDataFeedback() {
    try {
      const [rows, fields] = await pool.execute(
        `INSERT INTO feedback (
                calificacion_craft,
                calificacion_personal,
                calificacion_business,
                calificacion_promedio,
                comentario_craft,
                comentario_personal,
                comentario_business,
                comentario_general,
                id_empleado_member,
                id_empleado_assistant,
                id_periodo
                )
                VALUES (
                    ${this.calificacion_craft},
                    ${this.calificacion_personal},
                    ${this.calificacion_business},
                    ${this.calificacion_promedio},
                    '${this.comentario_craft}',
                    '${this.comentario_personal}',
                    '${this.comentario_business}',
                    '${this.comentario_general}',
                    ${this.id_member},
                    ${this.id_assistant},
                    ${this.id_periodo}        
                )`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }
}
