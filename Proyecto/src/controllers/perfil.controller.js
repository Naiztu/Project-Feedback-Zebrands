import { Empleado } from "../models/empleado.model";
import { Perfil } from "../models/perfil.model";

export async function getPerfil(req, res) {
  const { id_empleado } = req.params;

  try {
    const data_perfil = await Empleado.findId(id_empleado);
    res.send({ data_perfil });
    // rows.length === 0
    //   ? res.status(403).send({ err: "No hay ese empleado" })
    //   : res.status(200).send({ empleado: rows[0] });
  } catch (err) {
  
    res.status(403).send({ err });
  }
}
