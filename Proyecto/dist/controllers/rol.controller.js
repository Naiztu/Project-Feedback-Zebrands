"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRol = getRol;
exports.postAsignacion = postAsignacion;

var _rol = require("../models/rol.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function postAsignacion(_x, _x2) {
  return _postAsignacion.apply(this, arguments);
}

function _postAsignacion() {
  _postAsignacion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, id_assistant, id_member, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id_assistant = _req$body.id_assistant, id_member = _req$body.id_member;
            console.log(req.body);
            _context.prev = 2;
            _context.next = 5;
            return _rol.Rol.postAsignacion(id_assistant, id_member);

          case 5:
            data = _context.sent;
            res.send({
              data: data
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
  return _postAsignacion.apply(this, arguments);
}

function getRol(_x3, _x4) {
  return _getRol.apply(this, arguments);
}

function _getRol() {
  _getRol = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id_empleado, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_empleado = req.params.id_empleado;
            _context2.prev = 1;
            _context2.next = 4;
            return _rol.Rol.getRol(id_empleado);

          case 4:
            data = _context2.sent;
            res.send({
              data: data
            }); // rows.length === 0
            //   ? res.status(403).send({ err: "No hay ese empleado" })
            //   : res.status(200).send({ empleado: rows[0] });

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
  return _getRol.apply(this, arguments);
}