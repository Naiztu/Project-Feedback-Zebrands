export const objects = (data) => {
  return [
    {
      //name: "email"0,
      descripcion_respuesta: data.correo_electronico,
      message: "Escribe un correo válido",
    },
    {
      //name: "name"1,
      descripcion_respuesta: data.nombre,
      message: "Escribe un nombre válido",
    },
    {
      //name: "lastn"2,
      descripcion_respuesta: data.apellido_paterno,
      message: "Escribe un apellido válido",
    },
    {
      //name: "lastnm"3,
      descripcion_respuesta: data.apellido_materno,
      message: "Escribe un apellido válido",
    },
    {
      //name: "craft"4,
      descripcion_respuesta: data.nivel_craft,
      message: "*",
    },
    {
      //name: "buss"5,
      descripcion_respuesta: data.nivel_business,
      message: "*",
    },
    {
      //name: "ppl"6,
      descripcion_respuesta: data.nivel_people,
      message: "*",
    },
    {
      //name: "chapter"7,
      descripcion_respuesta: data.id_chapter,
      message: "Selecciona un Chapter válido",
    },
    {
      //name: "rol"8,
      descripcion_respuesta: data.id_rol,
      message: "Selecciona un rol válido",
    },
    {
      //name: "equipo"9,
      descripcion_respuesta: data.equipo,
      message: "Escribe un equipo válido",
    },
  ];
};

export const reg = [
  /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
  /^.{1,45}$/,
  /^.{1,45}$/,
  /^.{0,45}$/,
  /([1-5]+\.?[1-3]*)$/,
  /([1-5]+\.?[1-3]*)$/,
  /([1-5]+\.?[1-3]*)$/,
  /([1-5]+\.?[1-3]*)$/,
  /([1-5]+\.?[1-3]*)$/,
  /^.{1,45}$/,
];
