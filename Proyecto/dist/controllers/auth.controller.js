"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginRouter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _empleado = require("../models/empleado.model");

require("dotenv").config();

var loginRouter = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, password, user, passwordCorrect, _ref2, id_empleado, nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people, correo_electronico, imagen_perfil, id_rol, userForToken, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            user = null;
            _context.prev = 2;
            _context.next = 5;
            return _empleado.Empleado.findEmail(email);

          case 5:
            user = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            console.log({
              error: _context.t0
            });

          case 11:
            if (!(user === null)) {
              _context.next = 15;
              break;
            }

            _context.t1 = false;
            _context.next = 18;
            break;

          case 15:
            _context.next = 17;
            return _bcrypt["default"].compare(password, user.password);

          case 17:
            _context.t1 = _context.sent;

          case 18:
            passwordCorrect = _context.t1;

            if (!(user && passwordCorrect)) {
              res.status(401).send({
                error: "invalid user or password"
              });
            } else {
              _ref2 = user || {}, id_empleado = _ref2.id_empleado, nombre = _ref2.nombre, apellido_paterno = _ref2.apellido_paterno, apellido_materno = _ref2.apellido_materno, nivel_general = _ref2.nivel_general, nivel_craft = _ref2.nivel_craft, nivel_business = _ref2.nivel_business, nivel_people = _ref2.nivel_people, correo_electronico = _ref2.correo_electronico, imagen_perfil = _ref2.imagen_perfil, id_rol = _ref2.id_rol;
              userForToken = {
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
              token = _jsonwebtoken["default"].sign(userForToken, process.env.SECRET, {
                expiresIn: 60 * 60 * 24 * 7
              });
              res.send({
                user: userForToken,
                token: token
              });
            }

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));

  return function loginRouter(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.loginRouter = loginRouter;