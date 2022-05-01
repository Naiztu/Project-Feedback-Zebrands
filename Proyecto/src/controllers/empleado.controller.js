import { Empleado } from "../models/empleado.model";
import bcrypt from "bcrypt";

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
export async function getCurrentEmpleado(req, res) {
  const { id_empleado } = req.data;
  try {
    const user = await Empleado.findId(id_empleado);
    res.status(200).send({ user });
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
}

export async function getAllEmpleado(req, res) {
  try {
    const data_empleados = await Empleado.getAllDataEmpleado();
    res.status(200).send({ data_empleados });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getEmpleadoToAsignar(req, res) {
  try {
    const data_empleados = await Empleado.getAllDataEmpleado();
    res.status(200).send({ data_empleados });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function getSearchEmpleado(req, res) {
  const { page, filterName } = req.params;
  try {
    const data_empleados = await Empleado.getSearchDataEmpleado(
      page,
      filterName
    );
    res.status(200).send({ data_empleados });
  } catch (err) {
    console.log({ err });
    res.status(500).send({ err });
  }
}

export async function getNotRequested(req, res) {
  const { page, filterName, id_periodo } = req.params;
  const { id_empleado } = req.data;
  try {
    const data_empleados = await Empleado.getNotRequested(
      page,
      filterName,
      id_periodo,
      id_empleado
    );
    res.status(200).send({ data_empleados });
  } catch (err) {
    console.log({ err });
    res.status(500).send({ err });
  }
}

export async function postEmpleado(req, res) {
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    nivel_general,
    nivel_craft,
    nivel_business,
    nivel_people,
    correo_electronico,
    equipo,
    id_chapter,
    imagen_perfil,
    password,
  } = req.body;
  const empleado = new Empleado(
    0,
    nombre,
    apellido_paterno,
    apellido_materno,
    nivel_general,
    nivel_craft,
    nivel_business,
    nivel_people,
    1,
    correo_electronico,
    "password",
    equipo,
    id_chapter,
    'http://localhost:8080/img/user_default.png',
    3
  );

  try {
    await empleado.generatorPass();
    console.log(empleado);
    const data_post_empleado = await empleado.postEmpleado();
    console.log({ data_post_empleado });
    res.send({ data_post_empleado });
  } catch (err) {
    res.status(500).send({ err });
  }
}
 
export async function updatePass(req, res) {
  const { id_empleado} = req.data;
  const { password, newPassword } = req.body;
  let user = null;
  try {
    user = await Empleado.findPass(id_empleado);
    console.log(user)
  } catch (error) {
    console.log({ error });
  }

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      res.status(401).send({
        error: "invalid password",
      });
    } else {
      const crypPass =await Empleado.generatorPassNew(newPassword)
      try {
        await Empleado.updatePass(crypPass, id_empleado)
        res.status(200).send({ message: "password update"})
      } catch (err) {
        res.status(401).send({
          error: "password update failure",
        });
      }
    }
  } 

export async function updateCMasCL(req, res) {
  const {
    nombre,
    apellido_paterno,
    apellido_materno,
    activo,
    equipo,
    id_empleado,
  } = req.body;

  const nueva_informacion_lead = new Empleado(
    id_empleado,
    nombre,
    apellido_paterno,
    apellido_materno,
    0,
    0,
    0,
    0,
    activo,
    "",
    "",
    equipo,
    0,
    "",
    0
  );

  try {
    const datas = nueva_informacion_lead.updateCMasCL();
    console.log(datas);
    res.status(200).send({ message: "correct update" });
  } catch (err) {
    res.status(403).send({ err });
  }
}

export async function getNotAssigned(req, res) {
  const { page, filterName } = req.params;
  try {
    const data_empleados = await Empleado.getNotAssigned(page,filterName);
    res.status(200).send({ data_empleados });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function updateActivo(req, res) {
  const { id_empleado} = req.body;
  try {
    const data_activo = await Empleado.updateNotActivo(id_empleado);
    console.log(data_activo);
    res.status(200).send({ data_activo});
  } catch (err) {
    res.status(403).send({ err });
  }
}
