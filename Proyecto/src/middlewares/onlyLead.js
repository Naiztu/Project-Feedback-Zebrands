import { Rol } from "../models/rol.model";

export default async function (req, res, next) {
  const { id_empleado } = req.data;
  const { id_rol } = await Rol.getRol(id_empleado);
  console.log(id_rol);
  if (id_rol != 1) res.status(403).send({ message: "No estas autorizado" });
  else next();
}
