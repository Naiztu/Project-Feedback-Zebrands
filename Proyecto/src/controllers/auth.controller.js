import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Empleado } from "../models/empleado.model";
require("dotenv").config();

export const loginRouter = async (req, res) => {
  const { email, password } = req.body;
  let user = null;
  try {
    user = await Empleado.findEmail(email);
  } catch (error) {
    console.log({ error });
  }

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!(user && passwordCorrect)) {
    res.status(401).send({
      error: "invalid user or password",
    });
  } else {
    const {
      id_empleado,
      nombre,
      apellido_paterno,
      apellido_materno,
      nivel_general,
      nivel_craft,
      nivel_business,
      nivel_people,
      correo_electronico,
      imagen_perfil,
      id_rol,
      id_periodo,
      id_chapter,
      equipo,
    } = user || {};

    const userForToken = {
      id_empleado,
    };

    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 7,
    });

    res.send({
      user: {
        id_empleado,
        nombre,
        apellido_paterno,
        apellido_materno,
        nivel_general,
        nivel_craft,
        nivel_business,
        nivel_people,
        correo_electronico,
        imagen_perfil,
        equipo,
        id_rol,
        id_chapter,
        id_periodo,
      },
      token,
    });
  }
};
