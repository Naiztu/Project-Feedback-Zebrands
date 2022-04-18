"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRespuestas = getRespuestas;
exports.postRespuestas = postRespuestas;

var _respuestas = require("../models/respuestas.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getRespuestas(_x, _x2) {
  return _getRespuestas.apply(this, arguments);
}

function _getRespuestas() {
  _getRespuestas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$params, id_evaluado, id_evaluador, id_periodo, data_res;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, id_evaluado = _req$params.id_evaluado, id_evaluador = _req$params.id_evaluador, id_periodo = _req$params.id_periodo;
            _context.prev = 1;
            _context.next = 4;
            return _respuestas.Respuesta.getRes(id_evaluado, id_evaluador, id_periodo);

          case 4:
            data_res = _context.sent;
            res.send({
              data_res: data_res
            });
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
  return _getRespuestas.apply(this, arguments);
}

function postRespuestas(_x3, _x4) {
  return _postRespuestas.apply(this, arguments);
}

function _postRespuestas() {
  _postRespuestas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, id_empleado_evaluador, id_empleado_evaluado, id_periodo, lista_preguntas, post_res, data_post_res;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, id_empleado_evaluador = _req$body.id_empleado_evaluador, id_empleado_evaluado = _req$body.id_empleado_evaluado, id_periodo = _req$body.id_periodo, lista_preguntas = _req$body.lista_preguntas;
            post_res = new _respuestas.pstRespuesta(id_empleado_evaluador, id_empleado_evaluado, id_periodo, lista_preguntas);
            _context2.prev = 2;
            _context2.next = 5;
            return post_res.postRespuestas();

          case 5:
            data_post_res = _context2.sent;
            res.send({
              data_post_res: data_post_res
            });
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            res.status(500).send({
              err: _context2.t0
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _postRespuestas.apply(this, arguments);
}