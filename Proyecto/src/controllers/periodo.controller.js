import { Periodo } from "../models/periodo.model";
const bcrypt = require("bcrypt");

export async function postPeriodo(req, res) {
  const {
    nombre_periodo,
    fecha_inicio,
    fecha_fin,
    estatus_periodo,
    id_chapter,
  } = req.body;
  try {
    const data = await Periodo.postPeriodo(
      nombre_periodo,
      fecha_inicio,
      fecha_fin,
      estatus_periodo,
      id_chapter
    );
    res.send({ data });
    // rows.length === 0
    //   ? res.status(403).send({ err: "No hay ese empleado" })
    //   : res.status(200).send({ empleado: rows[0] });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function cambiaPeriodo(req, res) {
  const { id_periodo, fecha_inicio, fecha_fin } = req.body;

  try {
    Periodo.changeDate(id_periodo, fecha_inicio, fecha_fin);
    res.status(200).send({ message: "correct update date" });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getCurrentPeriodo(req, res) {
  const { id_chapter } = req.params;
  try {
    const data = await Periodo.getCurrentPeriodo(id_chapter);
    res.send({ data });
  } catch (err) {
    res.status(500).send({ err });
  }
}
