import { Evaluar } from "../models/evaluar.model";
import { queryPostSolicitarEvaluaciones } from "../util/query";

//Obtener feedback
export async function getEvaluarPendiente(req, res) {
  const { id_user, id_periodo } = req.params;
  const evalua = new Evaluar (id_user, id_periodo);
  try {
    const data_evalua = await evalua.getDataEvaluarPendiente();
    res.send({data_evalua});
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function postAsignarCompaniero(req, res) {
  const { lista_id_empleado_evaluador, id_empleado_evaluado, id_periodo } =
    req.body;

  try {
    const [rows, fields] = pool.execute(
      `${queryPostSolicitarEvaluaciones(
        lista_id_empleado_evaluador,
        id_empleado_evaluado,
        id_periodo
      )}`
    );
    res.status(200).end();
  } catch (err) {
    res.status(500).send({ err });
  }
}
