"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllEmpleado = getAllEmpleado;
exports.getCurrentEmpleado = getCurrentEmpleado;
exports.getEmpleado = getEmpleado;
exports.getEmpleadoToAsignar = getEmpleadoToAsignar;
exports.getSearchEmpleado = getSearchEmpleado;
exports.postEmpleado = postEmpleado;
exports.updateCMasCL = updateCMasCL;
exports.updateChapterMember = updateChapterMember;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _empleado = require("../models/empleado.model");

function getEmpleado(_x, _x2) {
  return _getEmpleado.apply(this, arguments);
}

function _getEmpleado() {
  _getEmpleado = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id_empleado, empleado, data_empleado;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_empleado = req.params.id_empleado;
            empleado = new _empleado.Empleado(id_empleado);
            _context.prev = 2;
            _context.next = 5;
            return empleado.getDataEmpleado();

          case 5:
            data_empleado = _context.sent;
            res.send({
              data_empleado: data_empleado
            }); // rows.length === 0
            //   ? res.status(403).send({ err: "No hay ese empleado" })
            //   : res.status(200).send({ empleado: rows[0] });

            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            res.status(500).send({
              err: _context.t0
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));
  return _getEmpleado.apply(this, arguments);
}

function getCurrentEmpleado(_x3, _x4) {
  return _getCurrentEmpleado.apply(this, arguments);
}

function _getCurrentEmpleado() {
  _getCurrentEmpleado = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id_empleado, user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_empleado = req.data.id_empleado;
            _context2.prev = 1;
            _context2.next = 4;
            return _empleado.Empleado.findId(id_empleado);

          case 4:
            user = _context2.sent;
            res.status(200).send({
              user: user
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(401).send(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getCurrentEmpleado.apply(this, arguments);
}

function getAllEmpleado(_x5, _x6) {
  return _getAllEmpleado.apply(this, arguments);
}

function _getAllEmpleado() {
  _getAllEmpleado = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var data_empleados;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _empleado.Empleado.getAllDataEmpleado();

          case 3:
            data_empleados = _context3.sent;
            res.status(200).send({
              data_empleados: data_empleados
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            res.status(500).send({
              err: _context3.t0
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getAllEmpleado.apply(this, arguments);
}

function getEmpleadoToAsignar(_x7, _x8) {
  return _getEmpleadoToAsignar.apply(this, arguments);
}

function _getEmpleadoToAsignar() {
  _getEmpleadoToAsignar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var data_empleados;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _empleado.Empleado.getAllDataEmpleado();

          case 3:
            data_empleados = _context4.sent;
            res.status(200).send({
              data_empleados: data_empleados
            });
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(500).send({
              err: _context4.t0
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _getEmpleadoToAsignar.apply(this, arguments);
}

function getSearchEmpleado(_x9, _x10) {
  return _getSearchEmpleado.apply(this, arguments);
}

function _getSearchEmpleado() {
  _getSearchEmpleado = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$params, page, filterName, id_periodo, id_empleado, data_empleados;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$params = req.params, page = _req$params.page, filterName = _req$params.filterName, id_periodo = _req$params.id_periodo;
            id_empleado = req.data.id_empleado;
            _context5.prev = 2;
            _context5.next = 5;
            return _empleado.Empleado.getSearchDataEmpleado2(page, filterName, id_periodo, id_empleado);

          case 5:
            data_empleados = _context5.sent;
            res.status(200).send({
              data_empleados: data_empleados
            });
            _context5.next = 13;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            console.log({
              err: _context5.t0
            });
            res.status(500).send({
              err: _context5.t0
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return _getSearchEmpleado.apply(this, arguments);
}

function postEmpleado(_x11, _x12) {
  return _postEmpleado.apply(this, arguments);
}

function _postEmpleado() {
  _postEmpleado = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people, correo_electronico, equipo, id_chapter, imagen_perfil, password, empleado, data_post_empleado;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, apellido_paterno = _req$body.apellido_paterno, apellido_materno = _req$body.apellido_materno, nivel_general = _req$body.nivel_general, nivel_craft = _req$body.nivel_craft, nivel_business = _req$body.nivel_business, nivel_people = _req$body.nivel_people, correo_electronico = _req$body.correo_electronico, equipo = _req$body.equipo, id_chapter = _req$body.id_chapter, imagen_perfil = _req$body.imagen_perfil, password = _req$body.password;
            empleado = new _empleado.Empleado(0, nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people, 1, correo_electronico, password, equipo, id_chapter, imagen_perfil, 3);
            _context6.prev = 2;
            _context6.next = 5;
            return empleado.generatorPass();

          case 5:
            console.log(empleado);
            _context6.next = 8;
            return empleado.postEmpleado();

          case 8:
            data_post_empleado = _context6.sent;
            console.log({
              data_post_empleado: data_post_empleado
            });
            res.send({
              data_post_empleado: data_post_empleado
            });
            _context6.next = 16;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](2);
            res.status(500).send({
              err: _context6.t0
            });

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 13]]);
  }));
  return _postEmpleado.apply(this, arguments);
}

function updateChapterMember(_x13, _x14) {
  return _updateChapterMember.apply(this, arguments);
}

function _updateChapterMember() {
  _updateChapterMember = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _req$body2, password, imagen_perfil, id_empleado, nueva_informacion, data;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, password = _req$body2.password, imagen_perfil = _req$body2.imagen_perfil, id_empleado = _req$body2.id_empleado;
            nueva_informacion = new _empleado.Empleado(id_empleado, "", "", "", 0, 0, 0, 0, 1, "", password, "", 0, imagen_perfil, 0);

            try {
              data = nueva_informacion.updateChapterMember();
              console.log(data);
              res.status(200).send({
                message: "correct update"
              });
            } catch (err) {
              res.status(500).send({
                err: err
              });
            }

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _updateChapterMember.apply(this, arguments);
}

function updateCMasCL(_x15, _x16) {
  return _updateCMasCL.apply(this, arguments);
}

function _updateCMasCL() {
  _updateCMasCL = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var _req$body3, nombre, apellido_paterno, apellido_materno, activo, equipo, id_empleado, nueva_informacion_lead, datas;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _req$body3 = req.body, nombre = _req$body3.nombre, apellido_paterno = _req$body3.apellido_paterno, apellido_materno = _req$body3.apellido_materno, activo = _req$body3.activo, equipo = _req$body3.equipo, id_empleado = _req$body3.id_empleado;
            nueva_informacion_lead = new _empleado.Empleado(id_empleado, nombre, apellido_paterno, apellido_materno, 0, 0, 0, 0, activo, "", "", equipo, 0, "", 0);

            try {
              datas = nueva_informacion_lead.updateCMasCL();
              console.log(datas);
              res.status(200).send({
                message: "correct update"
              });
            } catch (err) {
              res.status(500).send({
                err: err
              });
            }

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _updateCMasCL.apply(this, arguments);
}