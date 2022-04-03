//Controlador que relaciona con la base de datos

import Preguntas from "../models/preguntas";

export const getExample = (req, res) => {
  const preguntas = new Preguntas(1.3, 1.4, 1.5);
  console.log("Get example");
  const body = req.body;
  console.log(body);
  res.json(preguntas.fetchAll());
};

export const updateExample = (req, res) => {
  const message = req.body.mensaje || "No hubo mensaje";
  res.json({ mensaje: message });
};
