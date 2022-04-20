"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empleado = void 0;

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

var bcrypt = require("bcrypt");

require("dotenv").config();

var Empleado = /*#__PURE__*/function () {
  function Empleado(id_empleado, nombre, apellido_paterno, apellido_materno, nivel_general, nivel_craft, nivel_business, nivel_people, activo, _correo_electronico, password, equipo, id_chapter, imagen_perfil, id_rol) {
    _classCallCheck(this, Empleado);

    this.id_empleado = id_empleado;
    this.nombre = nombre;
    this.apellido_paterno = apellido_paterno;
    this.apellido_materno = apellido_materno;
    this.nivel_general = nivel_general;
    this.nivel_craft = nivel_craft;
    this.nivel_business = nivel_business;
    this.nivel_people = nivel_people;
    this.activo = activo;
    this.correo_electronico = _correo_electronico;
    this.password = password;
    this.equipo = equipo;
    this.id_chapter = id_chapter;
    this.imagen_perfil = imagen_perfil;
    this.id_rol = id_rol;
  }

  _createClass(Empleado, [{
    key: "generatorPass",
    value: function () {
      var _generatorPass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var salt;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return bcrypt.genSalt(parseInt(process.env.SALT));

              case 2:
                salt = _context.sent;
                _context.next = 5;
                return bcrypt.hash(this.password, salt);

              case 5:
                this.password = _context.sent;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function generatorPass() {
        return _generatorPass.apply(this, arguments);
      }

      return generatorPass;
    }()
  }, {
    key: "getDataEmpleado",
    value: function () {
      var _getDataEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("SELECT id_empleado, nombre, apellido_paterno, imagen_perfil, nivel_business, nivel_craft, nivel_people  \n                FROM empleado WHERE id_empleado = ".concat(this.id_empleado));

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
        }, _callee2, this, [[0, 10]]);
      }));

      function getDataEmpleado() {
        return _getDataEmpleado.apply(this, arguments);
      }

      return getDataEmpleado;
    }()
  }, {
    key: "getAllDataEmpleado",
    value: function () {
      var _getAllDataEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _db["default"].execute("SELECT id_empleado, nombre, apellido_paterno, imagen_perfil\n                FROM empleado LIMIT 0, 8");

              case 3:
                _yield$pool$execute3 = _context3.sent;
                _yield$pool$execute4 = _slicedToArray(_yield$pool$execute3, 2);
                rows = _yield$pool$execute4[0];
                fields = _yield$pool$execute4[1];
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
        }, _callee3, null, [[0, 10]]);
      }));

      function getAllDataEmpleado() {
        return _getAllDataEmpleado.apply(this, arguments);
      }

      return getAllDataEmpleado;
    }()
  }, {
    key: "postEmpleado",
    value: function () {
      var _postEmpleado = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var conn, _yield$conn$query, _yield$conn$query2, rows, fields;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                conn = null;
                _context4.prev = 1;
                _context4.next = 4;
                return _db["default"].getConnection();

              case 4:
                conn = _context4.sent;
                _context4.next = 7;
                return conn.beginTransaction();

              case 7:
                _context4.next = 9;
                return conn.query("\n      INSERT INTO empleado (\n              nombre, \n              apellido_paterno, \n              apellido_materno, \n              nivel_general, \n              nivel_craft, \n              nivel_business, \n              nivel_people, \n              activo, \n              correo_electronico, \n              password, \n              equipo, \n              id_chapter, \n              imagen_perfil)\n      VALUES (\n          '".concat(this.nombre, "',\n          '").concat(this.apellido_paterno, "',\n          '").concat(this.apellido_materno, "',\n          ").concat(this.nivel_general, ",\n          ").concat(this.nivel_craft, ",\n          ").concat(this.nivel_business, ",\n          ").concat(this.nivel_people, ",\n          1,\n          '").concat(this.correo_electronico, "',\n          '").concat(this.password, "',\n          '").concat(this.equipo, "',\n          ").concat(this.id_chapter, ",\n          '").concat(this.imagen_perfil, "'\n      );\n        "));

              case 9:
                _yield$conn$query = _context4.sent;
                _yield$conn$query2 = _slicedToArray(_yield$conn$query, 2);
                rows = _yield$conn$query2[0];
                fields = _yield$conn$query2[1];
                _context4.next = 15;
                return conn.query("\n      INSERT INTO empleado_rol (id_empleado, id_rol) \n      VALUES (\n        (SELECT id_empleado from empleado WHERE correo_electronico='".concat(this.correo_electronico, "'),\n        3\n        );"));

              case 15:
                _context4.next = 17;
                return conn.commit();

              case 17:
                _context4.next = 19;
                return conn.release();

              case 19:
                _context4.next = 30;
                break;

              case 21:
                _context4.prev = 21;
                _context4.t0 = _context4["catch"](1);
                console.log(_context4.t0);

                if (!conn) {
                  _context4.next = 29;
                  break;
                }

                _context4.next = 27;
                return conn.rollback();

              case 27:
                _context4.next = 29;
                return conn.release();

              case 29:
                throw _context4.t0;

              case 30:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 21]]);
      }));

      function postEmpleado() {
        return _postEmpleado.apply(this, arguments);
      }

      return postEmpleado;
    }()
  }, {
    key: "updateChapterMember",
    value: function () {
      var _updateChapterMember = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _yield$pool$execute5, _yield$pool$execute6, rows, fields;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _db["default"].execute("\n        UPDATE empleado SET empleado.password = '".concat(this.password, "', empleado.imagen_perfil = '").concat(this.imagen_perfil, "' \n        WHERE empleado.id_empleado = ").concat(this.id_empleado, ";\n      "));

              case 3:
                _yield$pool$execute5 = _context5.sent;
                _yield$pool$execute6 = _slicedToArray(_yield$pool$execute5, 2);
                rows = _yield$pool$execute6[0];
                fields = _yield$pool$execute6[1];
                return _context5.abrupt("return", rows);

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                throw {
                  err: _context5.t0
                };

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      function updateChapterMember() {
        return _updateChapterMember.apply(this, arguments);
      }

      return updateChapterMember;
    }()
  }, {
    key: "updateCMasCL",
    value: function () {
      var _updateCMasCL = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _yield$pool$execute7, _yield$pool$execute8, rows, fields;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _db["default"].execute("\n        UPDATE empleado SET empleado.nombre = '".concat(this.nombre, "', empleado.apellido_paterno = '").concat(this.apellido_paterno, "', \n        empleado.apellido_materno = '").concat(this.apellido_materno, "', empleado.activo = ").concat(this.activo, ", empleado.equipo = '").concat(this.equipo, "'\n        WHERE empleado.id_empleado = ").concat(this.id_empleado, ";\n      "));

              case 3:
                _yield$pool$execute7 = _context6.sent;
                _yield$pool$execute8 = _slicedToArray(_yield$pool$execute7, 2);
                rows = _yield$pool$execute8[0];
                fields = _yield$pool$execute8[1];
                return _context6.abrupt("return", rows);

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](0);
                throw {
                  err: _context6.t0
                };

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 10]]);
      }));

      function updateCMasCL() {
        return _updateCMasCL.apply(this, arguments);
      }

      return updateCMasCL;
    }()
  }], [{
    key: "generatorPassNew",
    value: function () {
      var _generatorPassNew = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(pass) {
        var salt, newPass;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return bcrypt.genSalt(parseInt(process.env.SALT));

              case 2:
                salt = _context7.sent;
                _context7.next = 5;
                return bcrypt.hash(pass, salt);

              case 5:
                newPass = _context7.sent;
                return _context7.abrupt("return", newPass);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function generatorPassNew(_x) {
        return _generatorPassNew.apply(this, arguments);
      }

      return generatorPassNew;
    }()
  }, {
    key: "updatePass",
    value: function () {
      var _updatePass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(passwords) {
        var _yield$pool$execute9, _yield$pool$execute10, rows, fields;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _db["default"].execute((0, _query.queryUpdatePass)(passwords));

              case 2:
                _yield$pool$execute9 = _context8.sent;
                _yield$pool$execute10 = _slicedToArray(_yield$pool$execute9, 2);
                rows = _yield$pool$execute10[0];
                fields = _yield$pool$execute10[1];

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function updatePass(_x2) {
        return _updatePass.apply(this, arguments);
      }

      return updatePass;
    }()
  }, {
    key: "findEmail",
    value: function () {
      var _findEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(correo) {
        var _yield$pool$execute11, _yield$pool$execute12, rows, fields;

        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _db["default"].execute("SELECT e.id_empleado, e.nombre,  e.apellido_paterno,  e.apellido_materno, e.imagen_perfil,  \n        e.nivel_general, e.nivel_craft, e.nivel_business, e.nivel_people, e.correo_electronico, \n        e.password, r.id_rol\n        FROM empleado e, empleado_rol r\n        WHERE e.activo = true AND\n          e.correo_electronico = '".concat(correo, "' \n          AND r.id_empleado = e.id_empleado \n        ORDER BY r.fecha_rol DESC\n        LIMIT 1;"));

              case 3:
                _yield$pool$execute11 = _context9.sent;
                _yield$pool$execute12 = _slicedToArray(_yield$pool$execute11, 2);
                rows = _yield$pool$execute12[0];
                fields = _yield$pool$execute12[1];
                return _context9.abrupt("return", rows[0] || null);

              case 10:
                _context9.prev = 10;
                _context9.t0 = _context9["catch"](0);
                return _context9.abrupt("return", null);

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 10]]);
      }));

      function findEmail(_x3) {
        return _findEmail.apply(this, arguments);
      }

      return findEmail;
    }()
  }]);

  return Empleado;
}();

exports.Empleado = Empleado;