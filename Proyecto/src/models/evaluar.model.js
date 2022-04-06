import pool from "../database/db";
import { queryPostSolicitarEvaluaciones } from "../util/query";

export class getEvaluar {
  constructor(_id_user, _id_periodo) {
    this.id_user = _id_user;
    this.id_periodo = _id_periodo;
  }

  async getDataEvaluarPendiente() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil FROM empleado
                where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E 
                WHERE id_periodo = ${this.id_periodo} AND id_empleado_evaluador = ${this.id_user} 
                AND estatus = "No Contestado");`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }
}

export class postEvaluar {
  constructor(
    _lista_id_empleado_evaluador,
    _id_empleado_evaluado,
    _id_periodo
  ) {
    this.lista_id_empleado_evaluador = _lista_id_empleado_evaluador;
    this.id_empleado_evaluado = _id_empleado_evaluado;
    this.id_periodo = _id_periodo;
  }

  async postDataAsignarCompaniero() {
    try {
      const [rows, fields] = await pool.execute(
        `${queryPostSolicitarEvaluaciones(
          this.lista_id_empleado_evaluador,
          this.id_empleado_evaluado,
          this.id_periodo
        )}`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }
}
