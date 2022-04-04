import { Empleado } from "../models/empleado.model";

export async function getEmpleado(req, res) {
  const { id_empleado } = req.params;
  const empleado = new Empleado (id_empleado);
  try {
    const data_empleado = await empleado.getDataEmpleado();
    res.send({data_empleado});
    // rows.length === 0
    //   ? res.status(403).send({ err: "No hay ese empleado" })
    //   : res.status(200).send({ empleado: rows[0] });
  } catch (err) {
    res.status(500).send({ err });
  }
}