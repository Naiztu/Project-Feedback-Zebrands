//Conexion a la base de datos

import { createPool } from "mysql2/promise";
import { db } from "../config";

const pool = createPool({
  host: db.host,
  user: db.user,
  password: db.password,
  port: db.port,
  database: db.database,
});

export default pool;

