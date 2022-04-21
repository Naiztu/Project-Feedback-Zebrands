"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllEvaluar = getAllEvaluar;
exports.getEvaluarPendiente = getEvaluarPendiente;
exports.postAsignarCompaniero = postAsignarCompaniero;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _evaluar = require("../models/evaluar.model");

function getEvaluarPendiente(_x, _x2) {
  return _getEvaluarPendiente.apply(this, arguments);
}

function _getEvaluarPendiente() {
  _getEvaluarPendiente = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$params, id_user, id_periodo, evalua, data_evalua;

    return _regenerator["default"].wrap(function _callee$(_context) {
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
  _getAllEvaluar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$params2, id_user, id_periodo, evalua, data_evalua;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
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
  _postAsignarCompaniero = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, lista_id_empleado_evaluador, id_empleado_evaluado, id_periodo, post_evalua, data_post_evalua;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
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