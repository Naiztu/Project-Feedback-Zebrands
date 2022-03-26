//Conexion a la base de datos

const { createPool } = require("mysql2");
const { db } = require("./config");

const pool = createPool({
  host: db.host,
  user: db.user,
  password: db.password,
  port: db.port,
  database: db.database,
});

module.exports = pool.promise();
