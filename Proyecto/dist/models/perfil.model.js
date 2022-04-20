"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Perfil = void 0;

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

var Perfil = /*#__PURE__*/function () {
  function Perfil(id_empleado) {
    _classCallCheck(this, Perfil);

    this.id_empleado = id_empleado;
  }

  _createClass(Perfil, [{
    key: "getDataPerfil",
    value: function () {
      var _getDataPerfil = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("\n            SELECT E.nombre as \"Nombre Member\", E.apellido_paterno as \"Paterno Member\", E.apellido_materno as \"Materno Member\", E.imagen_perfil, E.nivel_business, E.nivel_craft, E.nivel_people, E.activo, E.correo_electronico, E.password, E.equipo, C.nombre_chapter, R.nombre_rol, E1.nombre as \"Nombre Assistant\", E1.apellido_paterno as \"Paterno Assistant\", E1.apellido_materno as \"Materno Assistant\"\n            FROM empleado E, empleado E1, asignacion A, empleado_rol ER, chapter C, rol R WHERE E.id_chapter = C.id_chapter AND E.id_empleado = A.id_empleado_member AND E.id_empleado = ER.id_empleado AND ER.id_rol = R.id_rol AND E.id_empleado = E.id_empleado AND E1.id_empleado = A.id_empleado_assistant AND E.id_empleado = ".concat(this.id_empleado, ";\n            "));

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

      function getDataPerfil() {
        return _getDataPerfil.apply(this, arguments);
      }

      return getDataPerfil;
    }()
  }]);

  return Perfil;
}();

exports.Perfil = Perfil;