import {Assistant} from "../models/assistant.model"

//Obtener lista de assitant
export async function getAssistantList(req, res) {
  const { id_assistant } = req.params;
  const assistant =new Assistant(id_assistant);
  console.log(assistant);
  try {
    const data_members = await assistant.getDataListAssitant();
    res.send({data_members});
  } catch (err) {
    res.status(500).send({ err });
  }
}
