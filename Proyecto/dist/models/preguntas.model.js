"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pregunta = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

//Cambio minusculo
var Pregunta = /*#__PURE__*/function () {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  function Pregunta(_id_pregunta, _pregunta, _nivel_pregunta, _dimension_pregunta, _tipo_pregunta, _id_chapter) {
    (0, _classCallCheck2["default"])(this, Pregunta);
    this.id_pregunta = _id_pregunta;
    this.pregunta = _pregunta;
    this.nivel_pregunta = _nivel_pregunta;
    this.dimension_pregunta = _dimension_pregunta;
    this.tipo_pregunta = _tipo_pregunta;
    this.id_chapter = _id_chapter;
  }

  (0, _createClass2["default"])(Pregunta, [{
    key: "post_pregunta",
    value: function () {
      var _post_pregunta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("INSERT INTO banco_preguntas (\n        pregunta,\n        index_pregunta,\n        nivel_pregunta,\n        dimension_pregunta,\n        tipo_pregunta,\n        id_chapter\n        )\n        VALUES (\n           '".concat(this.pregunta, "',\n           (SELECT MAX(b2.index_pregunta)+1 \n            FROM banco_preguntas b2\n            WHERE b2.id_chapter=").concat(this.id_chapter, " AND b2.nivel_pregunta=").concat(this.nivel_pregunta, " \n            AND b2.dimension_pregunta='").concat(this.dimension_pregunta, "'),\n           ").concat(this.nivel_pregunta, ",\n           '").concat(this.dimension_pregunta, "',\n           '").concat(this.tipo_pregunta, "',\n           ").concat(this.id_chapter, "\n    )"));

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

      function post_pregunta() {
        return _post_pregunta.apply(this, arguments);
      }

      return post_pregunta;
    }()
  }, {
    key: "update_Pregunta",
    value: function () {
      var _update_Pregunta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("\n      UPDATE banco_preguntas \n      SET pregunta = '".concat(this.pregunta, "', tipo_pregunta = '").concat(this.tipo_pregunta, "' \n      WHERE banco_preguntas.id_pregunta = ").concat(this.id_pregunta, "\n      "));

              case 3:
                _yield$pool$execute3 = _context2.sent;
                _yield$pool$execute4 = (0, _slicedToArray2["default"])(_yield$pool$execute3, 2);
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
      var _fetchAllToNivel = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(nivel) {
        var _yield$pool$execute5, _yield$pool$execute6, rows, fields;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _db["default"].execute("SELECT * FROM banco_preguntas WHERE nivel_pregunta = ".concat(nivel));

              case 3:
                _yield$pool$execute5 = _context3.sent;
                _yield$pool$execute6 = (0, _slicedToArray2["default"])(_yield$pool$execute5, 2);
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
      var _fetchAllToNivelWithDimension = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(nivel, dimension) {
        var _yield$pool$execute7, _yield$pool$execute8, rows, fields;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _db["default"].execute("SELECT * FROM banco_preguntas WHERE nivel_pregunta = ".concat(nivel, " AND dimension_pregunta = '").concat(dimension, "';"));

              case 3:
                _yield$pool$execute7 = _context4.sent;
                _yield$pool$execute8 = (0, _slicedToArray2["default"])(_yield$pool$execute7, 2);
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
      var _deletePregunta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id_pregunta) {
        var _yield$pool$execute9, _yield$pool$execute10, rows, fields;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _db["default"].execute("DELETE FROM banco_preguntas WHERE id_pregunta=".concat(id_pregunta, ";"));

              case 3:
                _yield$pool$execute9 = _context5.sent;
                _yield$pool$execute10 = (0, _slicedToArray2["default"])(_yield$pool$execute9, 2);
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
      var _changeIndex = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id_pregunta_origen, id_pregunta_destino) {
        var _yield$pool$execute11, _yield$pool$execute12, rows, fields;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _db["default"].execute("\n        CALL cambioIndex (".concat(id_pregunta_origen, ", ").concat(id_pregunta_destino, ")\n      "));

              case 3:
                _yield$pool$execute11 = _context6.sent;
                _yield$pool$execute12 = (0, _slicedToArray2["default"])(_yield$pool$execute11, 2);
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