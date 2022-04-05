import pool from "../database/db";

export class get_Feedback{
    constructor(_id_user, _id_periodo){
        this.id_user = _id_user;
        this.id_periodo = _id_periodo;
    }

    async getDataFeedback(){
        try{
            const[rows, fields] = await pool.execute(
                `SELECT * FROM feedback WHERE id_empleado_member = ${this.id_user} AND id_periodo = ${this.id_periodo}`
            );
            return rows;
        } catch(err){
            throw { err };
        }
    }
}

export class get_FeedbackHistory{
    constructor(_id_user){
        this.id_user = _id_user;
    }

    async getDataHistoryFeedback(){
        try{
            const[rows, fields] = await pool.execute(
                `SELECT E2.imagen_perfil, E2.nombre, E2.apellido_paterno, 
                F.id_periodo, F.calificacion_promedio, P.nombre_periodo
                FROM feedback F, empleado E1, empleado E2, periodo P
                WHERE F.id_empleado_member = E1.id_empleado AND 
                F.id_empleado_assistant = E2.id_empleado AND 
                F.id_periodo = P.id_periodo AND E1.id_empleado = ${this.id_user};`
            );
            return rows;
        } catch(err){
            throw { err };
        }
    }
}

export class get_AllFeedbacks{
    static async getDataAllFeedback(){
        try{
            const[rows, fields] = await pool.execute(
                `SELECT imagen_perfil, nombre, apellido_paterno, id_periodo, calificacion_promedio 
                FROM feedback F INNER JOIN empleado E ON F.id_empleado_member = E.id_empleado`
            );
            return rows;
        } catch(err){
            throw { err };
        }
    }
}

export class post_Feedback{
    constructor(_calificacion_craft, _calificacion_personal, _calificacion_business, _calificacion_promedio, _comentario_craft, _comentario_personal, _comentario_business, _comentario_general, _id_member, _id_assistant, _id_periodo,){
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

    async postDataFeedback(){
        try{
            const[rows, fields] = await pool.execute(
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
        } catch(err){
            throw { err };
        }
    }
}