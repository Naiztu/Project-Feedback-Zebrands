import { Rol } from "../models/rol.model";
import { Assistant } from "../models/assistant.model";

const isLead = (id_rol) => {
  return id_rol === 1;
};

const isMyAssistant = async (id_empleado, id_user) => {
  try {
    const { id_empleado_assistant } = await Assistant.getMyAssistantID(id_user);
    if (id_empleado_assistant === id_empleado) return true;
  } catch (err) {
    return false;
  }
};

const amI = (id_empleado, id_user) => {
  return id_empleado === id_user;
};

//id empleado= quien solicita
//id user= de quien se solicita
export default async function (req, res, next) {
  const { id_empleado } = req.data;
  const { id_user } = req.params;
  const { id_rol } = await Rol.getRol(id_empleado);

  if (
    amI(id_empleado, parseInt(id_user)) ||
    isLead(id_rol) ||
    (await isMyAssistant(id_empleado, id_user))
  ) {
    next();
  } else {
    res.status(403).send({ message: "No estás autorizado" });
  }
}
