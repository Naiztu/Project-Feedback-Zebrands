export function queryPostSolicitarEvaluaciones(
  lista_id_empleado_evaluador,
  id_periodo,
  id_evaluado
) {
  let s = `INSERT INTO evaluacion (
        id_empleado_evaluador,
        id_periodo,
        id_empleado_evaluado,
        estatus,
        fecha_realizacion
        )
        VALUES`;
  for (let i of lista_id_empleado_evaluador) {
    s +=
      "(" +
      i +
      "," +
      id_periodo +
      "," +
      id_evaluado +
      "," +
      "'No Contestado'" +
      "," +
      "NULL" +
      "),";
  }
  const query = s.slice(0, -1);
  return query;
}
