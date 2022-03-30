//Configuracion de la base de datos

module.exports = {
  db: {
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    host: process.env.MYSQL_ADDON_HOST,
    port: process.env.MYSQL_ADDON_PORT,
    database: process.env.MYSQL_ADDON_DB,
  },
};
