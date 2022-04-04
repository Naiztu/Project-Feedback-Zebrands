import pool from "../database/db";


export class Evaluar{
    constructor(id_user, id_periodo){
        this.id_user = id_user;
        this.id_periodo = id_periodo;
    }

    async getDataEvaluarPendiente(){
        try{
            const[rows, fields] = await pool.execute(
                `SELECT id_empleado, nombre, apellido_paterno, imagen_perfil FROM empleado
                where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E 
                WHERE id_periodo = ${id_periodo} AND id_empleado_evaluador = ${id_user} 
                AND estatus = "No Contestado");`
            );
            return rows;
        } catch(err){
            throw { err };
        }
    }
}