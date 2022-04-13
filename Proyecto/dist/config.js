"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

//Configuracion de la base de datos
require("dotenv").config();

var db = {
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  host: process.env.MYSQL_ADDON_HOST,
  port: process.env.MYSQL_ADDON_PORT,
  database: process.env.MYSQL_ADDON_DB
};
exports.db = db;