import { getEvaluar, postEvaluar } from "../models/evaluar.model";

//Obtener feedback
export async function getEvaluarPendiente(req, res) {
  const { id_user, id_periodo } = req.params;
  const evalua = new getEvaluar (id_user, id_periodo);
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
  const post_evalua = new postEvaluar (lista_id_empleado_evaluador, id_empleado_evaluado, id_periodo);
  console.log(post_evalua);
  try {
    const data_post_evalua = await post_evalua.postDataAsignarCompaniero();
    res.send({data_post_evalua});
  } catch (err) {
    res.status(500).send({ err });
  }
}
