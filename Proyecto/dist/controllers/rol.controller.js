"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRol = getRol;
exports.postAsignacion = postAsignacion;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _rol = require("../models/rol.model");

function postAsignacion(_x, _x2) {
  return _postAsignacion.apply(this, arguments);
}

function _postAsignacion() {
  _postAsignacion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, id_assistant, id_member, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
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
  _getRol = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id_empleado, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
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