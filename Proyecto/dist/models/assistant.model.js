"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Assistant = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

var Assistant = /*#__PURE__*/function () {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  function Assistant(_id_assistant) {
    (0, _classCallCheck2["default"])(this, Assistant);
    this.id_assistant = _id_assistant;
  }

  (0, _createClass2["default"])(Assistant, [{
    key: "getDataListAssitant",
    value: function () {
      var _getDataListAssitant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("SELECT id_empleado,nombre, apellido_materno, apellido_paterno, imagen_perfil FROM empleado\n                  WHERE id_empleado IN (SELECT a.id_empleado_member FROM asignacion a\n                  WHERE a.fecha_asignacion IN (SELECT max(a2.fecha_asignacion) \n                  FROM asignacion a2 WHERE a2.id_empleado_member=a.id_empleado_member) \n                  AND id_empleado_assistant=".concat(this.id_assistant, ");"));

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

      function getDataListAssitant() {
        return _getDataListAssitant.apply(this, arguments);
      }

      return getDataListAssitant;
    }()
  }]);
  return Assistant;
}();

exports.Assistant = Assistant;