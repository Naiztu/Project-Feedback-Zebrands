"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _promise = require("mysql2/promise");

var _config = require("../config");

//Conexion a la base de datos
var pool = (0, _promise.createPool)({
  host: _config.db.host,
  user: _config.db.user,
  password: _config.db.password,
  port: _config.db.port,
  database: _config.db.database
});
var _default = pool;
exports["default"] = _default;