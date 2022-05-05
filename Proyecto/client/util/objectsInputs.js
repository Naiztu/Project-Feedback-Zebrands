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

export const objectsFeed = (data) => {
  return[

    {
      //name: "comentario people"0,
      descripcion_respuesta: data.comentario_personal,
      message: "Escribe un comentario válido",
    },

    {
      //name: "calificacion people"1,
      descripcion_respuesta: data.calificacion_personal,
      message: "Ingrese una calificación válida",
    },

    {
      //name: "comentario craft"2,
      descripcion_respuesta: data.comentario_craft,
      message: "Escribe un comentario válido",
    },
    {
      //name: "calificacion craft"3,
      descripcion_respuesta: data.calificacion_craft,
      message: "Ingrese una calificación válida",
    },
    {
      //name: "comentario business"4,
      descripcion_respuesta: data.comentario_business,
      message: "Escribe un comentario válido",
    },
    {
      //name: "calif business"5,
      descripcion_respuesta: data.calificacion_business,
      message: "Ingrese una calificación válida",
    },
    {
      //name: "comentario general"6,
      descripcion_respuesta: data.comentario_general,
      message: "Escribe un comentario válido",
    }
  ];
};

export const regFeed = [

  /^.{1,1000}$/,
  /^([1-5]{0,1})$/,
  /^.{1,1000}$/,
  /^([1-5]{0,1})$/,
  /^.{1,1000}$/,
  /^([1-5]{0,1})$/,
  /^.{1,1000}$/
  
];
