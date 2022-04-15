import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Empleado } from "../models/empleado.model";
require("dotenv").config();

export const loginRouter = async (req, res) => {
  const { email, password } = req.body;
  let user = null
  try {
    user = await Empleado.findEmail(email);
    console.log(user)
  } catch (error) {
    console.log({ error })
  }


  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!(user && passwordCorrect)) {
    res.status(401).send({
      error: "invalid user or password",
    });
  }

  const userForToken = {
    id: user.id_empleado,
    nombre: user.nombre,
    apellido_paterno: user.apellido_paterno,
    imagen_perfil: user.imagen_perfil,
    nivel_business: user.nivel_business,
    nivel_craft: user.nivel_craft,
    nivel_people: user.nivel_people,
  };

  const token = jwt.sign(userForToken, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 7,
  });

  res.send({
    user,
    token,
  });
};
