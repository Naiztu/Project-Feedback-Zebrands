import { Empleado } from "../models/empleado.model";
require("dotenv").config();

export async function postImages(req, res) {
  const { filename } = req.file;
  const { id_empleado } = req.data;
  Empleado.updateImageProfile(
    id_empleado,
    process.env.HOST + "/img/" + filename
  );
  res.send(process.env.HOST + "/img/" + filename);
}
