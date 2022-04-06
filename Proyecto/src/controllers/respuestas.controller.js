import {Respuesta, pstRespuesta} from "../models/respuestas.model";

export async function getRespuestas(req, res){
  const{ id_evaluado, id_evaluador, id_periodo } = req.params;
  try{
    const data_res = await Respuesta.getRes(id_evaluado, id_evaluador, id_periodo );
    res.send({data_res});
  }catch (err) {
    res.status(500).send({err});
  }
}

export async function postRespuestas(req, res) {
    const { id_empleado_evaluador, id_empleado_evaluado, id_periodo, lista_preguntas } =
      req.body;
    const post_res = new pstRespuesta ( id_empleado_evaluador, id_empleado_evaluado, id_periodo, lista_preguntas );
    console.log(post_res);
    try {
      const data_post_res = await post_res.postRespuestas();
      res.send({data_post_res});
    } catch (err) {
      res.status(500).send({ err });
    }
  }

  