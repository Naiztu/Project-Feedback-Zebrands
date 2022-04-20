"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rol = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

var Rol = /*#__PURE__*/function () {
  function Rol() {
    (0, _classCallCheck2["default"])(this, Rol);
  }

  (0, _createClass2["default"])(Rol, null, [{
    key: "postAsignacion",
    value: function () {
      var _postAsignacion = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id_assistant, id_member) {
        var conn, _yield$conn$query, _yield$conn$query2, data1, rol_assistant, _yield$conn$query3, _yield$conn$query4, data2, rol_member;

        return _regenerator["default"].wrap(function _callee$(_context) {
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
                return conn.query("SELECT * FROM empleado_rol WHERE id_empleado= ".concat(id_assistant, " AND \n        fecha_rol=(SELECT MAX(e2.fecha_rol) \n        FROM empleado_rol e2 WHERE e2.id_empleado= ").concat(id_assistant, ");"));

              case 9:
                _yield$conn$query = _context.sent;
                _yield$conn$query2 = (0, _slicedToArray2["default"])(_yield$conn$query, 1);
                data1 = _yield$conn$query2[0];
                rol_assistant = data1[0].id_rol;
                _context.next = 15;
                return conn.query("SELECT * FROM empleado_rol WHERE id_empleado= ".concat(id_member, " AND \n        fecha_rol=(SELECT MAX(e2.fecha_rol) \n        FROM empleado_rol e2 WHERE e2.id_empleado= ").concat(id_member, ");"));

              case 15:
                _yield$conn$query3 = _context.sent;
                _yield$conn$query4 = (0, _slicedToArray2["default"])(_yield$conn$query3, 1);
                data2 = _yield$conn$query4[0];
                rol_member = data2[0].id_rol; //console.log("rol_assistant:"+rol_assistant)
                //console.log("rol_member:"+rol_member)

                if (!(rol_assistant >= rol_member)) {
                  _context.next = 22;
                  break;
                }

                console.log("Inconsistencia en la jerarquia de roles");
                return _context.abrupt("return", {
                  msg: "Inconsistencia en la jerarquia de roles"
                });

              case 22:
                _context.next = 24;
                return conn.query("\n      INSERT INTO asignacion (id_empleado_member, id_empleado_assistant) \n      VALUES ( \n        ".concat(id_member, ",\n        ").concat(id_assistant, "\n        );\n        "));

              case 24:
                if (!(rol_assistant == 1)) {
                  _context.next = 27;
                  break;
                }

                _context.next = 27;
                return conn.query("\n        INSERT INTO empleado_rol (id_empleado, id_rol) \n        VALUES ( \n          ".concat(id_member, ",\n          ", 2, "\n          );"));

              case 27:
                _context.next = 29;
                return conn.commit();

              case 29:
                _context.next = 31;
                return conn.release();

              case 31:
                _context.next = 42;
                break;

              case 33:
                _context.prev = 33;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

                if (!conn) {
                  _context.next = 41;
                  break;
                }

                _context.next = 39;
                return conn.rollback();

              case 39:
                _context.next = 41;
                return conn.release();

              case 41:
                throw _context.t0;

              case 42:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 33]]);
      }));

      function postAsignacion(_x, _x2) {
        return _postAsignacion.apply(this, arguments);
      }

      return postAsignacion;
    }()
  }, {
    key: "getRol",
    value: function () {
      var _getRol = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id_empleado) {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("SELECT * FROM empleado_rol WHERE id_empleado= ".concat(id_empleado, " AND \n            fecha_rol=(SELECT MAX(e2.fecha_rol) \n            FROM empleado_rol e2 WHERE e2.id_empleado= ").concat(id_empleado, ");"));

              case 3:
                _yield$pool$execute = _context2.sent;
                _yield$pool$execute2 = (0, _slicedToArray2["default"])(_yield$pool$execute, 2);
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