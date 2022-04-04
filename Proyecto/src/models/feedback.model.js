const pool = require("../db");

class Feedback {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(nuevo_id_user, nueva_id_periodo) {
    this.id_user = nuevo_id_user;
    this.id_periodo = nueva_id_periodo;
  }

  constructor(u_calificacion_craft,
    u_calificacion_personal,
    u_calificacion_business,
    u_calificacion_promedio,
    u_comentario_craft,
    u_comentario_personal,
    u_comentario_business,
    u_comentario_general,
    u_id_empleado_member,
    u_id_empleado_assistant,
    u_id_periodo) {
      this.calificacion_craft=u_calificacion_craft;
      this.calificacion_personal=u_calificacion_personal;
      this.calificacion_business=u_calificacion_business;
      this.calificacion_promedio=u_calificacion_promedio;
      this.comentario_craft=u_comentario_craft;
      this.comentario_personal=u_comentario_personal;
      this.comentario_business=u_comentario_business;
      this.comentario_general=u_comentario_general;
      this.id_empleado_member=u_id_empleado_member;
      this.id_empleado_assistant=u_id_empleado_assistant;
      this.id_periodo=u_id_periodo;
  }
  

  getOne(){
    return pool
    .execute(
      `SELECT * FROM feedback WHERE id_empleado_member = ${this.id_user} AND id_periodo = ${this.id_periodo}`
    )
  }

  save(){
    return pool
    .execute(
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
            ${this.this.calificacion_personal},
            ${this.calificacion_business},
            ${this.calificacion_promedio},
           '${this.comentario_craft}',
            '${this.comentario_personal}',
            '${this.comentario_business}',
            '${this.comentario_general}',
            ${this.id_member},
            ${this.id_assistant},
            ${this.id_periodo}        
        );`)
  }

  static fetchAll() {
    return pool
    .execute(
      `SELECT imagen_perfil, nombre, apellido_paterno, id_periodo, calificacion_promedio 
      FROM feedback F INNER JOIN empleado E ON F.id_empleado_member = E.id_empleado;`
    )
  }
 
  static getHistorial(id_user) {
   return pool
    .execute(
      `SELECT E2.imagen_perfil, E2.nombre, E2.apellido_paterno, F.id_periodo, F.calificacion_promedio, P.nombre_periodo
      FROM feedback F, empleado E1, empleado E2, periodo P
      WHERE F.id_empleado_member = E1.id_empleado AND F.id_empleado_assistant = E2.id_empleado AND F.id_periodo = P.id_periodo AND E1.id_empleado = ${id_user};`
    )
  }

}




module.exports = { Feedback };