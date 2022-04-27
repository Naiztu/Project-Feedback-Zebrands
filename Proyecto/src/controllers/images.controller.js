import { Empleado } from "../models/empleado.model";

export async function postImages(req, res) {
  const { filename } = req.file;
  const { id_empleado } = req.data;
  Empleado.updateImageProfile(
    id_empleado,
    "http://localhost:8080/img/" + filename
  );
  res.send("http://localhost:8080/img/" + filename);
}
