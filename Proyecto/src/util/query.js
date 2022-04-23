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

export function queryUpdatePass(
  items
) {
  let s = ""

  items.forEach(element => {
    s += `UPDATE empleado SET ` + "`" + `password` + "`" + ` = '${element.password}' WHERE id_empleado = ${element.id_empleado};`
  });
  console.log(s)
  return s;
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

export function pag(pagina,elementos) {
  return `LIMIT ${(pagina-1)*elementos}, ${elementos}`
}

export function orderBy(campo,tipo) {
  if(campo===""){
    return ""
  }
  else{
    return `ORDER BY ${campo} ${tipo}`
}
  }

  export function filter(campo,value) {
    if(value==="0"){
      return `${campo} LIKE '%'`
    }
    else{
      return `${campo} LIKE '${value}%'`
  }
    }

