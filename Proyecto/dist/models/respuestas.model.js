"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pstRespuesta = exports.Respuesta = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

var _query = require("../util/query");

var Respuesta = /*#__PURE__*/function () {
  function Respuesta() {
    (0, _classCallCheck2["default"])(this, Respuesta);
  }

  (0, _createClass2["default"])(Respuesta, null, [{
    key: "getRes",
    value: function () {
      var _getRes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id_evaluado, id_evaluador, id_periodo) {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("SELECT * FROM respuesta\n        WHERE id_empleado_evaluado=".concat(id_evaluado, "\n        AND id_empleado_evaluador=").concat(id_evaluador, "\n        AND id_periodo=").concat(id_periodo, "\n        ORDER BY id_respuesta ASC;"));

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
        }, _callee, null, [[0, 10]]);
      }));

      function getRes(_x, _x2, _x3) {
        return _getRes.apply(this, arguments);
      }

      return getRes;
    }()
  }]);
  return Respuesta;
}();

exports.Respuesta = Respuesta;

var pstRespuesta = /*#__PURE__*/function () {
  function pstRespuesta(_id_empleado_evaluador, _id_empleado_evaluado, _id_periodo, _lista_preguntas) {
    (0, _classCallCheck2["default"])(this, pstRespuesta);
    this.id_empleado_evaluador = _id_empleado_evaluador;
    this.id_empleado_evaluado = _id_empleado_evaluado;
    this.id_periodo = _id_periodo;
    this.lista_preguntas = _lista_preguntas;
  }

  (0, _createClass2["default"])(pstRespuesta, [{
    key: "postRespuestas",
    value: function () {
      var _postRespuestas = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var conn, _yield$conn$query, _yield$conn$query2, rows, fields;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                conn = null;
                _context2.prev = 1;
                _context2.next = 4;
                return _db["default"].getConnection();

              case 4:
                conn = _context2.sent;
                _context2.next = 7;
                return conn.beginTransaction();

              case 7:
                _context2.next = 9;
                return conn.query("\n        ".concat((0, _query.queryPostRespuestas)(this.id_empleado_evaluador, this.id_empleado_evaluado, this.id_periodo, this.lista_preguntas), "\n        "));

              case 9:
                _yield$conn$query = _context2.sent;
                _yield$conn$query2 = (0, _slicedToArray2["default"])(_yield$conn$query, 2);
                rows = _yield$conn$query2[0];
                fields = _yield$conn$query2[1];
                _context2.next = 15;
                return conn.query("\n        UPDATE evaluacion SET estatus = 'Contestado' WHERE evaluacion.id_empleado_evaluador = ".concat(this.id_empleado_evaluador, " \n        AND evaluacion.id_empleado_evaluado = ").concat(this.id_empleado_evaluado, " AND evaluacion.id_periodo = ").concat(this.id_periodo, "\n        "));

              case 15:
                _context2.next = 17;
                return conn.commit();

              case 17:
                _context2.next = 19;
                return conn.release();

              case 19:
                _context2.next = 29;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](1);

                if (!conn) {
                  _context2.next = 28;
                  break;
                }

                _context2.next = 26;
                return conn.rollback();

              case 26:
                _context2.next = 28;
                return conn.release();

              case 28:
                throw _context2.t0;

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 21]]);
      }));

      function postRespuestas() {
        return _postRespuestas.apply(this, arguments);
      }

      return postRespuestas;
    }()
  }]);
  return pstRespuesta;
}();

exports.pstRespuesta = pstRespuesta;