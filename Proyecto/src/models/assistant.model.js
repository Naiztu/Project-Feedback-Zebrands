import pool from "../database/db";


export class Assistant {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(_id_assistant) {
      this.id_assistant =_id_assistant;
    }

    static async getDataListAssitant(id_assistant){
        try {
            const [rows, fields] = await pool.execute(
                `SELECT id_empleado,nombre, apellido_materno, apellido_paterno, imagen_perfil FROM empleado
                  WHERE id_empleado IN (SELECT a.id_empleado_member FROM asignacion a
                  WHERE a.fecha_asignacion IN (SELECT max(a2.fecha_asignacion) 
                  FROM asignacion a2 WHERE a2.id_empleado_member=a.id_empleado_member) 
                  AND id_empleado_assistant=${id_assistant});`
              );
              console.log(rows)
            return rows;
          } catch (err) {
            console.log(err)
            throw { err };
          }
    }
  
  }

