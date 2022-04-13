import { Perfil } from "../models/perfil.model";

export async function getPerfil(req, res) {
    const { id_empleado } = req.params;
    const perfil = new Perfil(id_empleado);
    try {
      const data_perfil = await perfil.getDataPerfil();
      res.send({ data_perfil });
      // rows.length === 0
      //   ? res.status(403).send({ err: "No hay ese empleado" })
      //   : res.status(200).send({ empleado: rows[0] });
    } catch (err) {
      res.status(500).send({ err });
    }
  }