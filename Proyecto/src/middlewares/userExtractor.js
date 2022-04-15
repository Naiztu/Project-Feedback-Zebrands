import jwt from "jsonwebtoken";
require("dotenv").config();

export default function (req, res, next) {
  const authorization = req.get('authorization');
  let token = "";

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.SECRET);
    if (!decodedToken.id_empleado) {
      return res.status(401).json({ error: "token missing or invalid" });
    }
  } catch (error) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  if (!token || !decodedToken.id_empleado) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const {
    id_empleado, nombre, apellido_paterno,
    apellido_materno, nivel_general, nivel_craft,
    nivel_business, nivel_people, correo_electronico, imagen_perfil, id_rol
  } = decodedToken;

  req.data = {
    id_empleado, nombre, apellido_paterno,
    apellido_materno, nivel_general, nivel_craft,
    nivel_business, nivel_people, correo_electronico, imagen_perfil, id_rol
  };

  next();
}
