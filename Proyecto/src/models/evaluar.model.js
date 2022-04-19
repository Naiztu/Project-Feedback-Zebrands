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
        `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil 
            FROM empleado
                where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E 
                WHERE id_periodo = ${this.id_periodo} AND id_empleado_evaluador = ${this.id_user} 
                AND estatus = "No Contestado");`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  async getDataEvaluar() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT Em.id_empleado, Em.nombre, Em.apellido_paterno, Em.imagen_perfil, E.estatus 
          FROM empleado Em, evaluacion E 
            WHERE Em.id_empleado = E.id_empleado_evaluador AND
            E.id_empleado_evaluado = ${this.id_user} AND
            E.id_periodo = ${this.id_periodo};`
      );
      return rows;
    } catch (err) {
      console.log({ err });
      throw { err };
    }
  }

  async getResumen() {
    const resumen={
      "calificaciones":[],
      "promedios":[]
    };
    let conn = null;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();


      const [evaluadores_data] = await conn.query(`
      SELECT nombre, apellido_paterno,id_empleado_evaluador, estatus FROM	empleado em, evaluacion ev
      WHERE ev.id_empleado_evaluador=em.id_empleado 
      AND id_periodo=${this.id_periodo}
      AND id_empleado_evaluado=${this.id_user};
      `);
      const sum={
        "cont":0,
        "craft":0,
        "people":0,
        "business":0
      }
      const calif={
        "craft":1,
        "people":2,
        "business":3
      }
      for (let i of evaluadores_data) {
        if(i.estatus="No contestado"){
          resumen.calificaciones.push({
            "nombre":"nombre_ejp",
            "craft":0,
            "people":0,
            "business":0,
            "estatus":i.estatus
          })
        }
        else{

      // const [consulta_cal] = await conn.query(`SELECT * FROM respuesta WHERE 
      // id_empleado_evaluador=i.id_empleado_evaluador AND
      // id_empleado_evaluado=${this.id_user} AND
      // id_periodo=${this.id_periodo} AND 
      // tipo_respuesta="calificacion"
      // `);

          resumen.calificaciones.push({
            "nombre":"nombre_ejp",
            "craft":calif.craft,
            "people":calif.people,
            "business":calif.business,
            "estatus":i.estatus
          })
          resumen.sum.cont+=1;
          resumen.sum.craft+=calif.craft;
          resumen.sum.people+=calif.people;
          resumen.sum.business+=calif.business;
        }
        console.log(i);
        console.log("evaluador "+i.id_empleado_evaluador)
        console.log("estatus "+i.estatus)
      }
      
    
      await conn.commit();
      await conn.release();
      //return consulta_cal
      //return resumen
      return evaluadores_data;
    } catch (error) {
      console.log(error);
      if (conn) {
        await conn.rollback();
        await conn.release();
      }
      throw error;
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
