import pool from "../database/db";
import { pag, orderBy } from "../util/query";
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
    dimension
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
        `SELECT f.calificacion_promedio, f.calificacion_business, f.calificacion_personal, 
        f.calificacion_craft, p.nombre_periodo,  f.id_periodo, f.id_feedback, f.id_empleado_member
        FROM feedback f, periodo p
        WHERE f.id_empleado_member = ${id_member} AND
              f.id_periodo = p.id_periodo
        ORDER by f.id_periodo
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
        `SELECT AVG(calificacion_craft) 'avgc', AVG(calificacion_personal) 'avgpe', AVG(calificacion_business) 'avgb', AVG(calificacion_promedio) 'avgp', id_periodo
        FROM feedback
        GROUP BY id_periodo
        order by id_periodo
      
        desc limit 5
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

  static async getDataLastFeedback(id_member) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT F.id_periodo
                FROM feedback F, empleado E1, empleado E2, periodo P
                WHERE  F.id_empleado_member = ${id_member}
                order by id_periodo desc
                limit 1;`
      );
      return rows[0];
    } catch (err) {
      throw { err };
    }
  }

  static async getDataAllFeedback() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT e.id_empleado AS id_user, e.imagen_perfil, e.nombre, e.apellido_paterno, f.id_periodo, f.calificacion_promedio 
          FROM feedback f INNER JOIN empleado e ON f.id_empleado_member = e.id_empleado 
          ${orderBy("f.id_periodo", "DESC")}
          ${pag(1, 10)}`
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
