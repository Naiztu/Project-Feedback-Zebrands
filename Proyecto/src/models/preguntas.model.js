const pool = require("../db");

class SeccionPreguntas {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(nuevo_nivel, nueva_dimension) {
    this.nivel = nuevo_nivel;
    this.dimension = nueva_dimension;
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  fetchAll() {
    return pool.execute(
      `SELECT * FROM banco_preguntas WHERE dimension_pregunta='${this.dimension}' and nivel_pregunta=${this.nivel};`
    )
  }
  static delete(id_pregunta) {
   return pool.execute(
    `DELETE FROM banco_preguntas WHERE id_pregunta=${id_pregunta};`
  )
  }

}


class Pregunta {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(
    nueva_pregunta,
    nuevo_nivel_pregunta,
    nueva_dimension_pregunta,
    nuevo_tipo_pregunta,
    nuevo_id_chapter) {
    this.pregunta = nueva_pregunta;
    this.nivel_pregunta = nuevo_nivel_pregunta;
    this.dimension_pregunta = nueva_dimension_pregunta;
    this.tipo_pregunta = nuevo_tipo_pregunta;
    this.id_chapter = nuevo_id_chapter
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  save() {

    return pool.execute(
      `
        INSERT INTO banco_preguntas (
          pregunta,
          index_pregunta,
          nivel_pregunta,
          dimension_pregunta,
          tipo_pregunta,
          id_chapter
          )
          VALUES (
             '${this.pregunta}',
             (SELECT MAX(b2.index_pregunta)+1 
      FROM banco_preguntas b2
      WHERE b2.id_chapter=${this.id_chapter} AND b2.nivel_pregunta=${this.nivel_pregunta} AND b2.dimension_pregunta='${this.dimension_pregunta}'),
             ${this.nivel_pregunta},
             '${this.dimension_pregunta}',
             '${this.tipo_pregunta}',
             ${this.id_chapter}
      );`
    )
  }
  
}


module.exports = { SeccionPreguntas, Pregunta };