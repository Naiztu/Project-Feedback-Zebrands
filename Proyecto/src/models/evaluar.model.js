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
      throw { err };
    }
  }

  async getResumen() {


    let conn = null;
    try {
      conn = await pool.getConnection();
      await conn.beginTransaction();
      const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

      const [evaluadores_data] = await conn.query(`
      SELECT CONCAT(nombre,' ',apellido_paterno) as nombre,id_empleado_evaluador, imagen_perfil, estatus FROM	empleado em, evaluacion ev
      WHERE ev.id_empleado_evaluador=em.id_empleado 
      AND id_periodo=${this.id_periodo}
      AND id_empleado_evaluado=${this.id_user};
      `);
      const [calif] = await conn.query(`
      SELECT  id_empleado_evaluador, dimension_respuesta, descripcion_respuesta 
      FROM respuesta 
      WHERE id_empleado_evaluado=${this.id_user} 
      AND tipo_respuesta='calificacion'
      AND id_periodo=${this.id_periodo};
  `);;
 

      const calificaciones_por_evaluador= evaluadores_data.map( (element)=> {
        if(element.estatus==="Contestado"){
         
          return {
            "id_evaluador":element.id_empleado_evaluador,
            "nombre":element.nombre,
            "apellido_paterno":element.apellido_paterno,
            "imagen":element.imagen_perfil,
            "estatus":element.estatus,
            "cal_business": arrAvg(calif.filter((cal)=>{
              return cal.id_empleado_evaluador===element.id_empleado_evaluador &&
              cal.dimension_respuesta==="business";
            }).map((ob)=>{
              return parseInt(ob.descripcion_respuesta);
            })),
            "cal_craft": arrAvg(calif.filter((cal)=>{
              return cal.id_empleado_evaluador===element.id_empleado_evaluador &&
              cal.dimension_respuesta==="craft";
            }).map((ob)=>{
              return parseInt(ob.descripcion_respuesta);
            })),
            "cal_people":  arrAvg(calif.filter((cal)=>{
              return cal.id_empleado_evaluador===element.id_empleado_evaluador &&
              cal.dimension_respuesta==="people";
            }).map((ob)=>{
              return parseInt(ob.descripcion_respuesta);
            })),
            "cal_prom":  arrAvg(calif.filter((cal)=>{
              return cal.id_empleado_evaluador===element.id_empleado_evaluador;
            }).map((ob)=>{
              return parseInt(ob.descripcion_respuesta);
            }))
          }
        }
        else{
          return{
            "id_evaluador":element.id_empleado_evaluador,
            "nombre":element.nombre,
            "apellido_paterno":element.apellido_paterno,
            "imagen":element.imagen_perfil,
            "estatus":element.estatus
          }
        }
        
      })
      
      
      await conn.commit();
      await conn.release();
      const contestados=calificaciones_por_evaluador.filter((cal)=>{
        return cal.estatus==="Contestado";
      })

      const promedios=[
        parseFloat(arrAvg(contestados.map((ob)=>{
          return ob.cal_craft;
        })).toFixed(1)), 
        parseFloat(arrAvg(contestados.map((ob)=>{
          return ob.cal_people;
        })).toFixed(1)), 
        parseFloat(arrAvg(contestados.map((ob)=>{
          return ob.cal_business;
        })).toFixed(1))
      ]

      const resumen={
        "calificaciones": calificaciones_por_evaluador,
        "prom":{"prom_craft": promedios[0],
        "prom_people":promedios[1],
        "prom_business": promedios[2],
        "prom_gen":arrAvg(promedios)}
      }
  
      return resumen;
    } catch (error) {
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
