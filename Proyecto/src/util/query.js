export function queryPostSolicitarEvaluaciones(
  lista_id_empleado_evaluador,
  id_evaluado,
  id_periodo
) {
  let s = `INSERT INTO evaluacion (
        id_empleado_evaluador,
        id_empleado_evaluado,
        id_periodo,
        estatus
        )
        VALUES`;
  for (let i of lista_id_empleado_evaluador) {
    s +=
      "(" +
      i +
      "," +
      id_evaluado +
      "," +
      id_periodo +
      "," +
      "'No Contestado'),";
  }
  const query = s.slice(0, -1);
  return query;
}



export function queryPostRespuestas(
  id_empleado_evaluador,
  id_empleado_evaluado,
  id_periodo,
  lista_preguntas
) {
  let s = `INSERT INTO respuesta (
        pregunta,
        descripcion_respuesta,
        tipo_respuesta,
        id_empleado_evaluador,
        id_empleado_evaluado,
        id_periodo,
        dimension_respuesta        
        )
        VALUES`;
  for (let i of lista_preguntas) {
    s +=
      "(" +
      "'" + i.pregunta + "'" +
      "," +
      "'" + i.descripcion_respuesta + "'" +
      "," +
      "'" + i.tipo_respuesta + "'" +
      "," +
      id_empleado_evaluador +
      "," +
      id_empleado_evaluado +
      "," +
      id_periodo +
      "," +
      "'" + i.dimension_respuesta + "'" +
      "),";
  }
  const query = s.slice(0, -1);
  return query;
}
