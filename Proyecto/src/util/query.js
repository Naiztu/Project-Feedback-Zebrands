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
