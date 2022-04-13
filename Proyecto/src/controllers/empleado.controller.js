import { Empleado } from "../models/empleado.model";

export async function getEmpleado(req, res) {
  const { id_empleado } = req.params;
  const empleado = new Empleado(id_empleado);
  try {
    const data_empleado = await empleado.getDataEmpleado();
    res.send({ data_empleado });
    // rows.length === 0
    //   ? res.status(403).send({ err: "No hay ese empleado" })
    //   : res.status(200).send({ empleado: rows[0] });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getAllEmpleado(req, res) {
  const empleado = new Empleado(0);
  try {
    const data_empleados = await empleado.getAllDataEmpleado();
    res.send({ data_empleados });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function postEmpleado(req, res){
  const { nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people,  correo_electronico, equipo, id_chapter, imagen_perfil } = req.body;
  const empleado = new Empleado (0, nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people, 1, correo_electronico, "", equipo, id_chapter, imagen_perfil, 3); 
  try{
    console.log(empleado);
    const data_post_empleado = await empleado.postEmpleado();
    res.send({data_post_empleado});
  }catch (err){
    res.status(500).send({err});
  }
}

export async function updateChapterMember (req, res) {
  const { 

    password,
    imagen_perfil, 
    id_empleado

  } = req.body;

  const nueva_informacion = new Empleado(id_empleado, "", "", "", 0, 0, 0, 0, 1, "", password, "", 0, imagen_perfil, 0);

  try {
    const data=nueva_informacion.updateChapterMember();
    console.log(data);
    res.status(200).send({ message: "correct update" });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function updateCMasCL (req, res) {
  const { 

    nombre,
    apellido_paterno,
    apellido_materno,
    activo,
    equipo,
    id_empleado

  } = req.body;

  const nueva_informacion_lead = new Empleado(id_empleado, nombre, apellido_paterno, apellido_materno, 0, 0, 0, 0, activo, "", "", equipo, 0, "", 0);

  try {
    const datas=nueva_informacion_lead.updateCMasCL();
    console.log(datas);
    res.status(200).send({ message: "correct update" });
  } catch (err) {
    res.status(500).send({ err });
  }
}