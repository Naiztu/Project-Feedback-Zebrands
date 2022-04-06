export function queryPostSolicitarEvaluaciones(
  lista_id_empleado_evaluador,
  id_evaluado,
  id_periodo
) {
  let s = `INSERT INTO evaluacion (
        id_empleado_evaluador,
        id_empleado_evaluado,
        id_periodo,
        estatus,
        fecha_realizacion
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
      "'No Contestado'" +
      "," +
      "NULL" +
      "),";
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
        dimension_respuesta,
        id_periodo
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
      "'" + i.dimension_respuesta + "'" +
      "," +
      id_periodo +
      "),";
  }
  const query = s.slice(0, -1);
  return query;
}
