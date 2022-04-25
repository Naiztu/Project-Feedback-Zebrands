"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cambiaPeriodo = cambiaPeriodo;
exports.getCurrentPeriodo = getCurrentPeriodo;
exports.postPeriodo = postPeriodo;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _periodo = require("../models/periodo.model");

function postPeriodo(_x, _x2) {
  return _postPeriodo.apply(this, arguments);
}

function _postPeriodo() {
  _postPeriodo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre_periodo, fecha_inicio, fecha_fin, estatus_periodo, id_chapter, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre_periodo = _req$body.nombre_periodo, fecha_inicio = _req$body.fecha_inicio, fecha_fin = _req$body.fecha_fin, estatus_periodo = _req$body.estatus_periodo, id_chapter = _req$body.id_chapter;
            _context.prev = 1;
            _context.next = 4;
            return _periodo.Periodo.postPeriodo(nombre_periodo, fecha_inicio, fecha_fin, estatus_periodo, id_chapter);

          case 4:
            data = _context.sent;
            res.send({
              data: data
            }); // rows.length === 0
            //   ? res.status(403).send({ err: "No hay ese empleado" })
            //   : res.status(200).send({ empleado: rows[0] });

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).send({
              err: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _postPeriodo.apply(this, arguments);
}

function cambiaPeriodo(_x3, _x4) {
  return _cambiaPeriodo.apply(this, arguments);
}

function _cambiaPeriodo() {
  _cambiaPeriodo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, id_periodo, fecha_inicio, fecha_fin;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, id_periodo = _req$body2.id_periodo, fecha_inicio = _req$body2.fecha_inicio, fecha_fin = _req$body2.fecha_fin;

            try {
              _periodo.Periodo.changeDate(id_periodo, fecha_inicio, fecha_fin);

              res.status(200).send({
                message: "correct update date"
              });
            } catch (err) {
              res.status(500).send({
                err: err
              });
            }

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _cambiaPeriodo.apply(this, arguments);
}

function getCurrentPeriodo(_x5, _x6) {
  return _getCurrentPeriodo.apply(this, arguments);
}

function _getCurrentPeriodo() {
  _getCurrentPeriodo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _objectDestructuringEmpty2["default"])(req.body);
            _context3.prev = 1;
            _context3.next = 4;
            return _periodo.Periodo.getCurrentPeriodo();

          case 4:
            data = _context3.sent;
            res.send({
              data: data
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(500).send({
              err: _context3.t0
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getCurrentPeriodo.apply(this, arguments);
}