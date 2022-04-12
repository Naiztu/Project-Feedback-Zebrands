import { Login } from "../models/login.model";



export async function getLogin(req, res) {
    const { correo, password  } = req.body;
    try {
      const data = await Login.getLogin(correo, password);
      res.send({ data });
    } catch (err) {
      res.status(500).send({ err });
    }
  }