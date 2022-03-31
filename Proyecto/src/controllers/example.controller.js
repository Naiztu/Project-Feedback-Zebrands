//Controlador que relaciona con la base de datos
const dotenv = require("dotenv").config();
const Preguntas = require('../models/preguntas');


const getExample = (req, res) => {
  const preguntas= new Preguntas(1.3, 1.4, 1.5);
  console.log('Get example');
  const body=req.body;
  console.log(body);
  res.json(preguntas.fetchAll());
};
const updateExample = (req, res) => {
  const message = req.body.mensaje || "No hubo mensaje";
  res.json({ mensaje: message });
};

module.exports = {
  getExample,
  updateExample,
};
