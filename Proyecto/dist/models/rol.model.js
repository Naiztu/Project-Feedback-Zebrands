"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rol = void 0;

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

var Rol = /*#__PURE__*/function () {
  function Rol() {
    _classCallCheck(this, Rol);
  }

  _createClass(Rol, null, [{
    key: "postAsignacion",
    value: function () {
      var _postAsignacion = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id_assistant, id_member) {
        var conn, msg;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                conn = null;
                _context.prev = 1;
                _context.next = 4;
                return _db["default"].getConnection();

              case 4:
                conn = _context.sent;
                _context.next = 7;
                return conn.beginTransaction();

              case 7:
                _context.next = 9;
                return conn.query("\n      INSERT INTO asignacion (id_empleado_member, id_empleado_assistant) \n      VALUES ( \n        ".concat(id_member, ",\n        ").concat(id_assistant, "\n        );\n    \n        "));

              case 9:
                _context.next = 11;
                return conn.query("\n        INSERT INTO empleado_rol (id_empleado, id_rol) \n        VALUES ( \n          ".concat(id_member, ",\n          ", 2, "\n          );"));

              case 11:
                msg = _context.sent;
                console.log(msg);
                _context.next = 15;
                return conn.commit();

              case 15:
                _context.next = 17;
                return conn.release();

              case 17:
                _context.next = 28;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

                if (!conn) {
                  _context.next = 27;
                  break;
                }

                _context.next = 25;
                return conn.rollback();

              case 25:
                _context.next = 27;
                return conn.release();

              case 27:
                throw _context.t0;

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 19]]);
      }));

      function postAsignacion(_x, _x2) {
        return _postAsignacion.apply(this, arguments);
      }

      return postAsignacion;
    }()
  }, {
    key: "getRol",
    value: function () {
      var _getRol = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id_empleado) {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("SELECT * FROM empleado_rol WHERE id_empleado= ".concat(id_empleado, " AND \n            fecha_rol=(SELECT MAX(e2.fecha_rol) \n            FROM empleado_rol e2 WHERE e2.id_empleado= ").concat(id_empleado, ");"));

              case 3:
                _yield$pool$execute = _context2.sent;
                _yield$pool$execute2 = _slicedToArray(_yield$pool$execute, 2);
                rows = _yield$pool$execute2[0];
                fields = _yield$pool$execute2[1];
                return _context2.abrupt("return", rows[0]);

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

      function getRol(_x3) {
        return _getRol.apply(this, arguments);
      }

      return getRol;
    }()
  }]);

  return Rol;
}();

exports.Rol = Rol;