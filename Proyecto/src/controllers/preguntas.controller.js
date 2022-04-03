import pool from "../database/db";
import Pregunta from "../models/preguntas.model";

//Obtener preguntas
export async function getPreguntas(req, res) {
  const { nivel } = req.params;
  const baseNivel = new Pregunta(0, nivel);

  try {
    const preguntas = await baseNivel.fetchAllToNivel();
    res.status(200).send({ preguntas });
  } catch (err) {
    res.status(500).send({ err });
  }
}
export async function getPreguntasDimension(req, res) {
  const { nivel, dimension } = req.params;
  const baseNivel = new Pregunta(0, nivel, dimension);

  try {
    const preguntas = await baseNivel.fetchAllToNivelWithDimension();
    res.status(200).send({ preguntas });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function registraPregunta(req, res) {
  const {
    pregunta,
    index_pregunta,
    nivel_pregunta,
    dimension_pregunta,
    tipo_pregunta,
    id_chapter,
  } = req.body;

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
         '${pregunta}',
         (SELECT MAX(b2.index_pregunta)+1 
          FROM banco_preguntas b2
          WHERE b2.id_chapter=${id_chapter} AND b2.nivel_pregunta=${nivel_pregunta} 
          AND b2.dimension_pregunta='${dimension_pregunta}'),
         ${nivel_pregunta},
         '${dimension_pregunta}',
         '${tipo_pregunta}',
         ${id_chapter}
  )`
    );
    res.status(200).send({ message: "post correct" });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function eliminaPregunta(req, res) {
  const { id_pregunta } = req.params;

  try {
    const [rows, fields] = await pool.execute(
      `DELETE FROM banco_preguntas WHERE id_pregunta=${id_pregunta};`
    );

    res.status(200).send({ message: "delete correct" });
  } catch (err) {
    res.status(500).send({ err });
  }
}
