"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv").config();

function _default(req, res, next) {
  var authorization = req.get('authorization');
  var token = "";

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  var decodedToken;

  try {
    decodedToken = _jsonwebtoken["default"].verify(token, process.env.SECRET);

    if (!decodedToken.id_empleado) {
      return res.status(401).json({
        error: "token missing or invalid"
      });
    }
  } catch (error) {
    return res.status(401).json({
      error: "token missing or invalid"
    });
  }

  if (!token || !decodedToken.id_empleado) {
    return res.status(401).json({
      error: "token missing or invalid"
    });
  }

  var _decodedToken = decodedToken,
      id_empleado = _decodedToken.id_empleado,
      nombre = _decodedToken.nombre,
      apellido_paterno = _decodedToken.apellido_paterno,
      apellido_materno = _decodedToken.apellido_materno,
      nivel_general = _decodedToken.nivel_general,
      nivel_craft = _decodedToken.nivel_craft,
      nivel_business = _decodedToken.nivel_business,
      nivel_people = _decodedToken.nivel_people,
      correo_electronico = _decodedToken.correo_electronico,
      imagen_perfil = _decodedToken.imagen_perfil,
      id_rol = _decodedToken.id_rol;
  req.data = {
    id_empleado: id_empleado,
    nombre: nombre,
    apellido_paterno: apellido_paterno,
    apellido_materno: apellido_materno,
    nivel_general: nivel_general,
    nivel_craft: nivel_craft,
    nivel_business: nivel_business,
    nivel_people: nivel_people,
    correo_electronico: correo_electronico,
    imagen_perfil: imagen_perfil,
    id_rol: id_rol
  };
  next();
}