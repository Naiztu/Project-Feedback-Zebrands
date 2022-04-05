import pool from "../database/db";
//Cambio minusculo

export class Pregunta {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(_id_pregunta,
    _pregunta,
    _nivel_pregunta,
    _dimension_pregunta,
    _tipo_pregunta,
    _id_chapter) 
    {
    this.id_pregunta=_id_pregunta;
    this.pregunta = _pregunta;
    this.nivel_pregunta=_nivel_pregunta;
    this.dimension_pregunta=_dimension_pregunta;
    this.tipo_pregunta=_tipo_pregunta;
    this.id_chapter=_id_chapter;
  }

  static async fetchAllToNivel(nivel) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT * FROM banco_preguntas WHERE nivel_pregunta = ${nivel}`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async fetchAllToNivelWithDimension(nivel,dimension) {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT * FROM banco_preguntas WHERE nivel_pregunta = ${nivel} AND dimension_pregunta = '${dimension}';`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }


  async post_pregunta() {
    try {
      const [rows, fields] = await pool.execute(
        `INSERT INTO banco_preguntas (
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
            WHERE b2.id_chapter=${this.id_chapter} AND b2.nivel_pregunta=${this.nivel_pregunta} 
            AND b2.dimension_pregunta='${this.dimension_pregunta}'),
           ${this.nivel_pregunta},
           '${this.dimension_pregunta}',
           '${this.tipo_pregunta}',
           ${this.id_chapter}
    )`);
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async deletePregunta(id_pregunta){
    try {
      const [rows, fields] = await pool.execute(
        `DELETE FROM banco_preguntas WHERE id_pregunta=${id_pregunta};`
        );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  static async changeIndex( id_pregunta_origen,id_pregunta_destino){
    try {
      const [rows, fields] = await pool.execute(
        `
        CALL cambioIndex (${id_pregunta_origen}, ${id_pregunta_destino})
      `
        );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  async update_Pregunta(){
    try {
      const [rows, fields] = await pool.execute(
        `
      UPDATE banco_preguntas 
      SET pregunta = '${this.pregunta}', tipo_pregunta = '${this.tipo_pregunta}' 
      WHERE banco_preguntas.id_pregunta = ${this.id_pregunta}
      `
        );
      return rows;
    } catch (err) {
      throw { err };
    }
  }
  

}

