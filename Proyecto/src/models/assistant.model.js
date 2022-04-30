import pool from "../database/db";


export class Assistant {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(_id_assistant) {
      this.id_assistant =_id_assistant;
    }

    static async getDataListAssitant(id_assistant){
        try {
            const [rows, fields] = await pool.execute(
                `SELECT e.id_empleado,e.nombre, e.apellido_materno, e.apellido_paterno, e.imagen_perfil, lastrol.id_rol  FROM empleado e
                INNER JOIN 
                (SELECT id_empleado, id_rol ,max(fecha_rol)
                FROM empleado_rol
                GROUP BY id_empleado) AS lastrol ON 
                  lastrol.id_empleado = e.id_empleado
                 WHERE e.id_empleado IN 
                 (SELECT a.id_empleado_member FROM asignacion a
                  WHERE vigente=1
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

