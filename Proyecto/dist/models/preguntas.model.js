"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pregunta = void 0;

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

//Cambio minusculo
var Pregunta = /*#__PURE__*/function () {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  function Pregunta(_id_pregunta, _pregunta, _nivel_pregunta, _dimension_pregunta, _tipo_pregunta, _id_chapter) {
    _classCallCheck(this, Pregunta);

    this.id_pregunta = _id_pregunta;
    this.pregunta = _pregunta;
    this.nivel_pregunta = _nivel_pregunta;
    this.dimension_pregunta = _dimension_pregunta;
    this.tipo_pregunta = _tipo_pregunta;
    this.id_chapter = _id_chapter;
  }

  _createClass(Pregunta, [{
    key: "post_pregunta",
    value: function () {
      var _post_pregunta = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("INSERT INTO banco_preguntas (\n        pregunta,\n        index_pregunta,\n        nivel_pregunta,\n        dimension_pregunta,\n        tipo_pregunta,\n        id_chapter\n        )\n        VALUES (\n           '".concat(this.pregunta, "',\n           (SELECT MAX(b2.index_pregunta)+1 \n            FROM banco_preguntas b2\n            WHERE b2.id_chapter=").concat(this.id_chapter, " AND b2.nivel_pregunta=").concat(this.nivel_pregunta, " \n            AND b2.dimension_pregunta='").concat(this.dimension_pregunta, "'),\n           ").concat(this.nivel_pregunta, ",\n           '").concat(this.dimension_pregunta, "',\n           '").concat(this.tipo_pregunta, "',\n           ").concat(this.id_chapter, "\n    )"));

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
        }, _callee, this, [[0, 10]]);
      }));

      function post_pregunta() {
        return _post_pregunta.apply(this, arguments);
      }

      return post_pregunta;
    }()
  }, {
    key: "update_Pregunta",
    value: function () {
      var _update_Pregunta = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("\n      UPDATE banco_preguntas \n      SET pregunta = '".concat(this.pregunta, "', tipo_pregunta = '").concat(this.tipo_pregunta, "' \n      WHERE banco_preguntas.id_pregunta = ").concat(this.id_pregunta, "\n      "));

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
        }, _callee2, this, [[0, 10]]);
      }));

      function update_Pregunta() {
        return _update_Pregunta.apply(this, arguments);
      }

      return update_Pregunta;
    }()
  }], [{
    key: "fetchAllToNivel",
    value: function () {
      var _fetchAllToNivel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(nivel) {
        var _yield$pool$execute5, _yield$pool$execute6, rows, fields;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _db["default"].execute("SELECT * FROM banco_preguntas WHERE nivel_pregunta = ".concat(nivel));

              case 3:
                _yield$pool$execute5 = _context3.sent;
                _yield$pool$execute6 = _slicedToArray(_yield$pool$execute5, 2);
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
        }, _callee3, null, [[0, 10]]);
      }));

      function fetchAllToNivel(_x) {
        return _fetchAllToNivel.apply(this, arguments);
      }

      return fetchAllToNivel;
    }()
  }, {
    key: "fetchAllToNivelWithDimension",
    value: function () {
      var _fetchAllToNivelWithDimension = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(nivel, dimension) {
        var _yield$pool$execute7, _yield$pool$execute8, rows, fields;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _db["default"].execute("SELECT * FROM banco_preguntas WHERE nivel_pregunta = ".concat(nivel, " AND dimension_pregunta = '").concat(dimension, "';"));

              case 3:
                _yield$pool$execute7 = _context4.sent;
                _yield$pool$execute8 = _slicedToArray(_yield$pool$execute7, 2);
                rows = _yield$pool$execute8[0];
                fields = _yield$pool$execute8[1];
                return _context4.abrupt("return", rows);

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                throw {
                  err: _context4.t0
                };

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10]]);
      }));

      function fetchAllToNivelWithDimension(_x2, _x3) {
        return _fetchAllToNivelWithDimension.apply(this, arguments);
      }

      return fetchAllToNivelWithDimension;
    }()
  }, {
    key: "deletePregunta",
    value: function () {
      var _deletePregunta = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id_pregunta) {
        var _yield$pool$execute9, _yield$pool$execute10, rows, fields;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _db["default"].execute("DELETE FROM banco_preguntas WHERE id_pregunta=".concat(id_pregunta, ";"));

              case 3:
                _yield$pool$execute9 = _context5.sent;
                _yield$pool$execute10 = _slicedToArray(_yield$pool$execute9, 2);
                rows = _yield$pool$execute10[0];
                fields = _yield$pool$execute10[1];
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
        }, _callee5, null, [[0, 10]]);
      }));

      function deletePregunta(_x4) {
        return _deletePregunta.apply(this, arguments);
      }

      return deletePregunta;
    }()
  }, {
    key: "changeIndex",
    value: function () {
      var _changeIndex = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id_pregunta_origen, id_pregunta_destino) {
        var _yield$pool$execute11, _yield$pool$execute12, rows, fields;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _db["default"].execute("\n        CALL cambioIndex (".concat(id_pregunta_origen, ", ").concat(id_pregunta_destino, ")\n      "));

              case 3:
                _yield$pool$execute11 = _context6.sent;
                _yield$pool$execute12 = _slicedToArray(_yield$pool$execute11, 2);
                rows = _yield$pool$execute12[0];
                fields = _yield$pool$execute12[1];
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
        }, _callee6, null, [[0, 10]]);
      }));

      function changeIndex(_x5, _x6) {
        return _changeIndex.apply(this, arguments);
      }

      return changeIndex;
    }()
  }]);

  return Pregunta;
}();

exports.Pregunta = Pregunta;