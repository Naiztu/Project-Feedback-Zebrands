"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empleado = void 0;

var _db = _interopRequireDefault(require("../database/db"));

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

var Empleado = /*#__PURE__*/function () {
  function Empleado(id_empleado) {
    _classCallCheck(this, Empleado);

    this.id_empleado = id_empleado;
  }

  _createClass(Empleado, [{
    key: "getDataEmpleado",
    value: function () {
      var _getDataEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("SELECT id_empleado, nombre, apellido_paterno, imagen_perfil, nivel_business, nivel_craft, nivel_people  \n                FROM empleado WHERE id_empleado = ".concat(this.id_empleado));

              case 3:
                _yield$pool$execute = _context.sent;
                _yield$pool$execute2 = _slicedToArray(_yield$pool$execute, 2);
                rows = _yield$pool$execute2[0];
                fields = _yield$pool$execute2[1];
                return _context.abrupt("return", rows[0]);

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

      function getDataEmpleado() {
        return _getDataEmpleado.apply(this, arguments);
      }

      return getDataEmpleado;
    }()
  }, {
    key: "getAllDataEmpleado",
    value: function () {
      var _getAllDataEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("SELECT id_empleado, nombre, apellido_paterno, imagen_perfil\n                FROM empleado LIMIT 7,6;");

              case 3:
                _yield$pool$execute3 = _context2.sent;
                _yield$pool$execute4 = _slicedToArray(_yield$pool$execute3, 2);
                rows = _yield$pool$execute4[0];
                fields = _yield$pool$execute4[1];
                return _context2.abrupt("return", rows);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                throw {
                  err: _context2.t0
                };

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 10]]);
      }));

      function getAllDataEmpleado() {
        return _getAllDataEmpleado.apply(this, arguments);
      }

      return getAllDataEmpleado;
    }()
  }]);

  return Empleado;
}();

exports.Empleado = Empleado;