import pool from "../database/db";
import { queryPostSolicitarEvaluaciones } from "../util/query";


export class Evaluar{
    constructor(_lista_id_empleado_evaluador, _id_periodo, _id_empleado_evaluado){
        this.lista_id_empleado_evaluador = _lista_id_empleado_evaluador;
        this.id_periodo = _id_periodo;
        this.id_empleado_evaluado = _id_empleado_evaluado;
    }

    async getDataEvaluarPendiente(){
        console.log("xd")
        try{
            const[rows, fields] = await pool.execute(
                `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil FROM empleado
                where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E 
                WHERE id_periodo = ${this.id_periodo} AND id_empleado_evaluador = ${this.lista_id_empleado_evaluador} 
                AND estatus = "No Contestado");`
            );
            return rows;
        } catch(err){
            throw { err };
        }
    }

    async postDataAsignarCompaniero(){
        console.log(queryPostSolicitarEvaluaciones(this.lista_id_empleado_evaluador,
            this.id_periodo,
            this.id_empleado_evaluado
            ));
        try{
            const[rows, fields] = await pool.execute(
                `${queryPostSolicitarEvaluaciones(
                    this.lista_id_empleado_evaluador,
                    this.id_periodo,
                    this.id_empleado_evaluado
                    
                  )}`
            );
            return rows;
        } catch(err){
            throw { err };
        }
    }
}