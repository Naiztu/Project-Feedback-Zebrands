"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPerfil = getPerfil;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _perfil = require("../models/perfil.model");

function getPerfil(_x, _x2) {
  return _getPerfil.apply(this, arguments);
}

function _getPerfil() {
  _getPerfil = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id_empleado, perfil, data_perfil;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_empleado = req.params.id_empleado;
            perfil = new _perfil.Perfil(id_empleado);
            _context.prev = 2;
            _context.next = 5;
            return perfil.getDataPerfil();

          case 5:
            data_perfil = _context.sent;
            res.send({
              data_perfil: data_perfil
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
  return _getPerfil.apply(this, arguments);
}