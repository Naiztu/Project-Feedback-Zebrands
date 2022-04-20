"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPerfil = getPerfil;

var _perfil = require("../models/perfil.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPerfil(_x, _x2) {
  return _getPerfil.apply(this, arguments);
}

function _getPerfil() {
  _getPerfil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id_empleado, perfil, data_perfil;
    return regeneratorRuntime.wrap(function _callee$(_context) {
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