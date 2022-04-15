import jwt from "jsonwebtoken";
require("dotenv").config();

export default function (req, res, next) {
  const authorization = req.get('authorization');
  let token = "";

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const {
    id_empleado,
    nombre,
    apellido_paterno,
    imagen_perfil,
    nivel_business,
    nivel_craft,
    nivel_people,
  } = decodedToken;

  req.data = {
    id_empleado,
    nombre,
    apellido_paterno,
    imagen_perfil,
    nivel_business,
    nivel_craft,
    nivel_people,
  };

  next();
}
