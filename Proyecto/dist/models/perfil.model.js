"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Perfil = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

var Perfil = /*#__PURE__*/function () {
  function Perfil(id_empleado) {
    (0, _classCallCheck2["default"])(this, Perfil);
    this.id_empleado = id_empleado;
  }

  (0, _createClass2["default"])(Perfil, [{
    key: "getDataPerfil",
    value: function () {
      var _getDataPerfil = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("\n            SELECT E.nombre as \"Nombre Member\", E.apellido_paterno as \"Paterno Member\", E.apellido_materno as \"Materno Member\", E.imagen_perfil, E.nivel_business, E.nivel_craft, E.nivel_people, E.activo, E.correo_electronico, E.password, E.equipo, C.nombre_chapter, R.nombre_rol, E1.nombre as \"Nombre Assistant\", E1.apellido_paterno as \"Paterno Assistant\", E1.apellido_materno as \"Materno Assistant\"\n            FROM empleado E, empleado E1, asignacion A, empleado_rol ER, chapter C, rol R WHERE E.id_chapter = C.id_chapter AND E.id_empleado = A.id_empleado_member AND E.id_empleado = ER.id_empleado AND ER.id_rol = R.id_rol AND E.id_empleado = E.id_empleado AND E1.id_empleado = A.id_empleado_assistant AND E.id_empleado = ".concat(this.id_empleado, ";\n            "));

              case 3:
                _yield$pool$execute = _context.sent;
                _yield$pool$execute2 = (0, _slicedToArray2["default"])(_yield$pool$execute, 2);
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

      function getDataPerfil() {
        return _getDataPerfil.apply(this, arguments);
      }

      return getDataPerfil;
    }()
  }]);
  return Perfil;
}();

exports.Perfil = Perfil;