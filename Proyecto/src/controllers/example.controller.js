//Controlador que relaciona con la base de datos
const dotenv = require("dotenv").config();

const getExample = (req, res) => {
  res.json({ mensaje: "peticion get" });
};
const updateExample = (req, res) => {
  const message = req.body.mensaje || "No hubo mensaje";
  res.json({ mensaje: message });
};

module.exports = {
  getExample,
  updateExample,
};
