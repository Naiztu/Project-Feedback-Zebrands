"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllEmpleado = getAllEmpleado;
exports.getEmpleado = getEmpleado;

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