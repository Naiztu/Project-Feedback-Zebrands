import pool from "../database/db";

class Preguntas {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(_id, _nivel, _dimension) {
    this.id = _id;
    this.nivel = _nivel;
    this.dimension = _dimension;
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  async fetchAllToNivel() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT * FROM banco_preguntas WHERE nivel_pregunta = ${this.nivel}`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }

  async fetchAllToNivelWithDimension() {
    try {
      const [rows, fields] = await pool.execute(
        `SELECT * FROM banco_preguntas WHERE nivel_pregunta = ${this.nivel} AND dimension_pregunta = '${this.dimension}';`
      );
      return rows;
    } catch (err) {
      throw { err };
    }
  }
}

export default Preguntas;
