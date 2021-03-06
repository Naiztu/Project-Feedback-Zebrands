import { Assistant } from "../models/assistant.model";

//Obtener lista de assitant
export async function getAssistantList(req, res) {
  const { id_assistant } = req.params;
  try {
    const data_members = await Assistant.getDataListAssitant(id_assistant);
    res.send({ data_members });
  } catch (err) {
    res.status(500).send({ err });
  }
}

export async function updateAssistant(req, res) {
  const { id_member } = req.body;
  try {
    const data_assistantValue = await Assistant.updateAssistantR(id_member);
    res.send({ data_assistantValue });
  } catch (err) {
    res.status(304).send({ err });
  }
}

export async function getVigente(req, res) {
  const { id_member } = req.params;
  try {
    const data_vigente = await Assistant.getDataVigente(id_member);
    res.send({ data_vigente });
  } catch (err) {
    res.status(304).send({ err });
  }
}

export async function getMyAssistant(req, res) {
  const { id_member } = req.params;
  try {
    const info_assistant = await Assistant.getAssistantVigente(id_member);
    res.send({ info_assistant });
  } catch (err) {
    res.status(304).send({ err });
  }
}

export async function getMyAssistantID(req, res) {
  const { id_member } = req.params;
  try {
    const data = await Assistant.getMyAssistantID(id_member);
    res.send({ data });
  } catch (err) {
    res.status(304).send({ err });
  }
}
