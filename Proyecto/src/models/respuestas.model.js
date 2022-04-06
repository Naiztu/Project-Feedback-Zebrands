import pool from "../database/db";
import { queryPostRespuestas } from "../util/query";

export class Respuesta {
  constructor(
    _pregunta,
    _descripcion_respuesta,
    _tipo_respuesta,
    _id_empleado_evaluador,
    _id_empleado_evaluado,
    _dimension_respuesta,
    _id_periodo
  ) {
    this.pregunta = _pregunta;
    this.descripcion_respuesta = _descripcion_respuesta;
    this.tipo_respuesta = _tipo_respuesta;
    this.id_empleado_evaluador = _id_empleado_evaluador;
    this.id_empleado_evaluado = _id_empleado_evaluado;
    this.dimension_respuesta = _dimension_respuesta;
    this.id_periodo = _id_periodo;
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
    try {
      const [rows, fields] = await pool.execute(
        `
                ${queryPostRespuestas(
                  this.id_empleado_evaluador,
                  this.id_empleado_evaluado,
                  this.id_periodo,
                  this.lista_preguntas
                )}
                `
      );
      return rows;
    } catch (err) {
      console.log(err);
      throw { err };
    }
  }
}
