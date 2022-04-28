import { Assistant } from "../models/assistant.model"

//Obtener lista de assitant
export async function getAssistantList(req, res) {
  const { id_assistant } = req.params;
  try {
    const data_members = await Assistant.getDataListAssitant(id_assistant);
    res.send({ data_members });
  } catch (err) {
    console.log(err)
    res.status(500).send({ err });
  }
}
