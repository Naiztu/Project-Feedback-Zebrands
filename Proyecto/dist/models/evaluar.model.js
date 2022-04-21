"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postEvaluar = exports.getEvaluar = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

var _query = require("../util/query");

var getEvaluar = /*#__PURE__*/function () {
  function getEvaluar(_id_user, _id_periodo) {
    (0, _classCallCheck2["default"])(this, getEvaluar);
    this.id_user = _id_user;
    this.id_periodo = _id_periodo;
  }

  (0, _createClass2["default"])(getEvaluar, [{
    key: "getDataEvaluarPendiente",
    value: function () {
      var _getDataEvaluarPendiente = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("SELECT id_empleado, nombre, apellido_paterno, imagen_perfil \n            FROM empleado\n                where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E \n                WHERE id_periodo = ".concat(this.id_periodo, " AND id_empleado_evaluador = ").concat(this.id_user, " \n                AND estatus = \"No Contestado\");"));

              case 3:
                _yield$pool$execute = _context.sent;
                _yield$pool$execute2 = (0, _slicedToArray2["default"])(_yield$pool$execute, 2);
                rows = _yield$pool$execute2[0];
                fields = _yield$pool$execute2[1];
                return _context.abrupt("return", rows);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                throw {
                  err: _context.t0
                };

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function getDataEvaluarPendiente() {
        return _getDataEvaluarPendiente.apply(this, arguments);
      }

      return getDataEvaluarPendiente;
    }()
  }, {
    key: "getDataEvaluar",
    value: function () {
      var _getDataEvaluar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("SELECT Em.id_empleado, Em.nombre, Em.apellido_paterno, Em.imagen_perfil, E.estatus \n          FROM empleado Em, evaluacion E \n            WHERE Em.id_empleado = E.id_empleado_evaluador AND\n            E.id_empleado_evaluado = ".concat(this.id_user, " AND\n            E.id_periodo = ").concat(this.id_periodo, ";"));

              case 3:
                _yield$pool$execute3 = _context2.sent;
                _yield$pool$execute4 = (0, _slicedToArray2["default"])(_yield$pool$execute3, 2);
                rows = _yield$pool$execute4[0];
                fields = _yield$pool$execute4[1];
                return _context2.abrupt("return", rows);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.log({
                  err: _context2.t0
                });
                throw {
                  err: _context2.t0
                };

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function getDataEvaluar() {
        return _getDataEvaluar.apply(this, arguments);
      }

      return getDataEvaluar;
    }()
  }]);
  return getEvaluar;
}();

exports.getEvaluar = getEvaluar;

var postEvaluar = /*#__PURE__*/function () {
  function postEvaluar(_lista_id_empleado_evaluador, _id_empleado_evaluado, _id_periodo) {
    (0, _classCallCheck2["default"])(this, postEvaluar);
    this.lista_id_empleado_evaluador = _lista_id_empleado_evaluador;
    this.id_empleado_evaluado = _id_empleado_evaluado;
    this.id_periodo = _id_periodo;
  }

  (0, _createClass2["default"])(postEvaluar, [{
    key: "postDataAsignarCompaniero",
    value: function () {
      var _postDataAsignarCompaniero = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _yield$pool$execute5, _yield$pool$execute6, rows, fields;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _db["default"].execute("".concat((0, _query.queryPostSolicitarEvaluaciones)(this.lista_id_empleado_evaluador, this.id_empleado_evaluado, this.id_periodo)));

              case 3:
                _yield$pool$execute5 = _context3.sent;
                _yield$pool$execute6 = (0, _slicedToArray2["default"])(_yield$pool$execute5, 2);
                rows = _yield$pool$execute6[0];
                fields = _yield$pool$execute6[1];
                return _context3.abrupt("return", rows);

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                throw {
                  err: _context3.t0
                };

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 10]]);
      }));

      function postDataAsignarCompaniero() {
        return _postDataAsignarCompaniero.apply(this, arguments);
      }

      return postDataAsignarCompaniero;
    }()
  }]);
  return postEvaluar;
}();

exports.postEvaluar = postEvaluar;