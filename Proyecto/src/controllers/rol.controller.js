import { Rol } from "../models/rol.model";

export async function postAsignacion(req, res) {
  const { id_assistant, id_member } = req.body;
  console.log(req.body);
  try {
    const data = await Rol.postAsignacion(id_assistant, id_member);
    res.send({ data });
    // rows.length === 0
    //   ? res.status(403).send({ err: "No hay ese empleado" })
    //   : res.status(200).send({ empleado: rows[0] });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getRol(req, res) {
    const { id_empleado } = req.params;
    try {
      const data = await Rol.getRol(id_empleado);
      res.send({ data });
      // rows.length === 0
      //   ? res.status(403).send({ err: "No hay ese empleado" })
      //   : res.status(200).send({ empleado: rows[0] });
    } catch (err) {
      res.status(500).send({ err });
    }
  }