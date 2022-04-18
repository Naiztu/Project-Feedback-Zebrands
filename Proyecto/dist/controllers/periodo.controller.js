"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cambiaPeriodo = cambiaPeriodo;
exports.postPeriodo = postPeriodo;

var _periodo = require("../models/periodo.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function postPeriodo(_x, _x2) {
  return _postPeriodo.apply(this, arguments);
}

function _postPeriodo() {
  _postPeriodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre_periodo, fecha_inicio, fecha_fin, estatus_periodo, id_chapter, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
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
  _cambiaPeriodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, id_periodo, fecha_inicio, fecha_fin;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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