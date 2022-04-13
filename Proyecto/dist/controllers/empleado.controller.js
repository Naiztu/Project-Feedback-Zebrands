"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllEmpleado = getAllEmpleado;
exports.getEmpleado = getEmpleado;
exports.postEmpleado = postEmpleado;
exports.updateCMasCL = updateCMasCL;
exports.updateChapterMember = updateChapterMember;

var _empleado = require("../models/empleado.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getEmpleado(_x, _x2) {
  return _getEmpleado.apply(this, arguments);
}

function _getEmpleado() {
  _getEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id_empleado, empleado, data_empleado;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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

function getAllEmpleado(_x3, _x4) {
  return _getAllEmpleado.apply(this, arguments);
}

function _getAllEmpleado() {
  _getAllEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var empleado, data_empleados;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            empleado = new _empleado.Empleado(0);
            _context2.prev = 1;
            _context2.next = 4;
            return empleado.getAllDataEmpleado();

          case 4:
            data_empleados = _context2.sent;
            res.send({
              data_empleados: data_empleados
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).send({
              err: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getAllEmpleado.apply(this, arguments);
}

function postEmpleado(_x5, _x6) {
  return _postEmpleado.apply(this, arguments);
}

function _postEmpleado() {
  _postEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people, correo_electronico, equipo, id_chapter, imagen_perfil, empleado, data_post_empleado;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, apellido_paterno = _req$body.apellido_paterno, apellido_materno = _req$body.apellido_materno, nivel_general = _req$body.nivel_general, nivel_craft = _req$body.nivel_craft, nivel_business = _req$body.nivel_business, nivel_people = _req$body.nivel_people, correo_electronico = _req$body.correo_electronico, equipo = _req$body.equipo, id_chapter = _req$body.id_chapter, imagen_perfil = _req$body.imagen_perfil;
            empleado = new _empleado.Empleado(0, nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people, 1, correo_electronico, "", equipo, id_chapter, imagen_perfil, 3);
            _context3.prev = 2;
            console.log(empleado);
            _context3.next = 6;
            return empleado.postEmpleado();

          case 6:
            data_post_empleado = _context3.sent;
            res.send({
              data_post_empleado: data_post_empleado
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](2);
            res.status(500).send({
              err: _context3.t0
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 10]]);
  }));
  return _postEmpleado.apply(this, arguments);
}

function updateChapterMember(_x7, _x8) {
  return _updateChapterMember.apply(this, arguments);
}

function _updateChapterMember() {
  _updateChapterMember = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body2, password, imagen_perfil, id_empleado, nueva_informacion, data;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
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
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateChapterMember.apply(this, arguments);
}

function updateCMasCL(_x9, _x10) {
  return _updateCMasCL.apply(this, arguments);
}

function _updateCMasCL() {
  _updateCMasCL = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _req$body3, nombre, apellido_paterno, apellido_materno, activo, equipo, id_empleado, nueva_informacion_lead, datas;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
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
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateCMasCL.apply(this, arguments);
}