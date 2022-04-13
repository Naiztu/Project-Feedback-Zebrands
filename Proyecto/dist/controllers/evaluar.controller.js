"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllEvaluar = getAllEvaluar;
exports.getEvaluarPendiente = getEvaluarPendiente;
exports.postAsignarCompaniero = postAsignarCompaniero;

var _evaluar = require("../models/evaluar.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getEvaluarPendiente(_x, _x2) {
  return _getEvaluarPendiente.apply(this, arguments);
}

function _getEvaluarPendiente() {
  _getEvaluarPendiente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$params, id_user, id_periodo, evalua, data_evalua;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, id_user = _req$params.id_user, id_periodo = _req$params.id_periodo;
            evalua = new _evaluar.getEvaluar(id_user, id_periodo);
            _context.prev = 2;
            _context.next = 5;
            return evalua.getDataEvaluarPendiente();

          case 5:
            data_evalua = _context.sent;
            res.send({
              data_evalua: data_evalua
            });
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
  return _getEvaluarPendiente.apply(this, arguments);
}

function getAllEvaluar(_x3, _x4) {
  return _getAllEvaluar.apply(this, arguments);
}

function _getAllEvaluar() {
  _getAllEvaluar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$params2, id_user, id_periodo, evalua, data_evalua;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params2 = req.params, id_user = _req$params2.id_user, id_periodo = _req$params2.id_periodo;
            evalua = new _evaluar.getEvaluar(id_user, id_periodo);
            _context2.prev = 2;
            _context2.next = 5;
            return evalua.getDataEvaluar();

          case 5:
            data_evalua = _context2.sent;
            res.send({
              data_evalua: data_evalua
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            res.status(500).send({
              err: _context2.t0
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _getAllEvaluar.apply(this, arguments);
}

function postAsignarCompaniero(_x5, _x6) {
  return _postAsignarCompaniero.apply(this, arguments);
}

function _postAsignarCompaniero() {
  _postAsignarCompaniero = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, lista_id_empleado_evaluador, id_empleado_evaluado, id_periodo, post_evalua, data_post_evalua;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, lista_id_empleado_evaluador = _req$body.lista_id_empleado_evaluador, id_empleado_evaluado = _req$body.id_empleado_evaluado, id_periodo = _req$body.id_periodo;
            post_evalua = new _evaluar.postEvaluar(lista_id_empleado_evaluador, id_empleado_evaluado, id_periodo);
            console.log(post_evalua);
            _context3.prev = 3;
            _context3.next = 6;
            return post_evalua.postDataAsignarCompaniero();

          case 6:
            data_post_evalua = _context3.sent;
            res.send({
              data_post_evalua: data_post_evalua
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            res.status(500).send({
              err: _context3.t0
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return _postAsignarCompaniero.apply(this, arguments);
}