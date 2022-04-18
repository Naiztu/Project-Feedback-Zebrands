"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pstRespuesta = exports.Respuesta = void 0;

var _db = _interopRequireDefault(require("../database/db"));

var _query = require("../util/query");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Respuesta = /*#__PURE__*/function () {
  function Respuesta() {
    _classCallCheck(this, Respuesta);
  }

  _createClass(Respuesta, null, [{
    key: "getRes",
    value: function () {
      var _getRes = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id_evaluado, id_evaluador, id_periodo) {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("SELECT * FROM respuesta\n        WHERE id_empleado_evaluado=".concat(id_evaluado, "\n        AND id_empleado_evaluador=").concat(id_evaluador, "\n        AND id_periodo=").concat(id_periodo, "\n        ORDER BY id_respuesta ASC;"));

              case 3:
                _yield$pool$execute = _context.sent;
                _yield$pool$execute2 = _slicedToArray(_yield$pool$execute, 2);
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
    _classCallCheck(this, pstRespuesta);

    this.id_empleado_evaluador = _id_empleado_evaluador;
    this.id_empleado_evaluado = _id_empleado_evaluado;
    this.id_periodo = _id_periodo;
    this.lista_preguntas = _lista_preguntas;
  }

  _createClass(pstRespuesta, [{
    key: "postRespuestas",
    value: function () {
      var _postRespuestas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var conn, _yield$conn$query, _yield$conn$query2, rows, fields;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
                _yield$conn$query2 = _slicedToArray(_yield$conn$query, 2);
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