import {Pregunta} from "../models/preguntas.model";

//Obtener preguntas
export async function getPreguntas(req, res) {
  const { nivel } = req.params;
 

  try {
    const preguntas = await Pregunta.fetchAllToNivel(nivel);
    res.status(200).send({ preguntas });
  } catch (err) {
    res.status(500).send({ err });
  }
}
export async function getPreguntasDimension(req, res) {
  const { nivel, dimension } = req.params;

  try {
    const preguntas = await Pregunta.fetchAllToNivelWithDimension(nivel,dimension);
    res.status(200).send({ preguntas });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function registraPregunta(req, res) {
  const {
    pregunta,
    nivel_pregunta,
    dimension_pregunta,
    tipo_pregunta,
    id_chapter
  } = req.body;

  const nueva_pregunta = new Pregunta(0, pregunta,
    nivel_pregunta,
    dimension_pregunta,
    tipo_pregunta,
    id_chapter);


  console.log(nueva_pregunta);
  try{
  const data = await nueva_pregunta.post_pregunta();
    res.status(200).send({ message: data });
  } catch (err) {
    res.status(500).send({ err });
  }

}

export async function eliminaPregunta(req, res) {
  const { id_pregunta } = req.params;

  try {
   Pregunta.deletePregunta(id_pregunta);
    res.status(200).send({ message: "delete correct" });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function cambiaIndex(req, res) {
  const { 

    id_pregunta_origen,
    id_pregunta_destino

  } = req.body;

  try {
   Pregunta.changeIndex(id_pregunta_origen,id_pregunta_destino);
    res.status(200).send({ message: "correct update index" });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function updatePregunta(req, res) {
  const { 

    id_pregunta,
    pregunta,
    tipo_pregunta

  } = req.body;

  const nueva_pregunta = new Pregunta(id_pregunta, pregunta,
    0,
   "",
    tipo_pregunta,
    0);

  try {
    const data=nueva_pregunta.update_Pregunta();
    console.log(data);
    res.status(200).send({ message: "correct update pregunta" });
  } catch (err) {
    res.status(500).send({ err });
  }
}
