"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post_Feedback = exports.Feedback = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

var _query = require("../util/query");

var Feedback = /*#__PURE__*/function () {
  function Feedback(_calificacion_craft, _calificacion_personal, _calificacion_business, _calificacion_promedio, _comentario_craft, _comentario_personal, _comentario_business, _comentario_general, _id_member, _id_assistant, _id_periodo) {
    (0, _classCallCheck2["default"])(this, Feedback);
    this.calificacion_craft = _calificacion_craft;
    this.calificacion_personal = _calificacion_personal;
    this.calificacion_business = _calificacion_business;
    this.calificacion_promedio = _calificacion_promedio;
    this.comentario_craft = _comentario_craft;
    this.comentario_personal = _comentario_personal;
    this.comentario_business = _comentario_business;
    this.comentario_general = _comentario_general;
    this.id_member = _id_member;
    this.id_assistant = _id_assistant;
    this.id_periodo = _id_periodo;
  }

  (0, _createClass2["default"])(Feedback, [{
    key: "postDataFeedback",
    value: function () {
      var _postDataFeedback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("INSERT INTO feedback (\n                calificacion_craft,\n                calificacion_personal,\n                calificacion_business,\n                calificacion_promedio,\n                comentario_craft,\n                comentario_personal,\n                comentario_business,\n                comentario_general,\n                id_empleado_member,\n                id_empleado_assistant,\n                id_periodo\n                )\n                VALUES (\n                    ".concat(this.calificacion_craft, ",\n                    ").concat(this.calificacion_personal, ",\n                    ").concat(this.calificacion_business, ",\n                    ").concat(this.calificacion_promedio, ",\n                    '").concat(this.comentario_craft, "',\n                    '").concat(this.comentario_personal, "',\n                    '").concat(this.comentario_business, "',\n                    '").concat(this.comentario_general, "',\n                    ").concat(this.id_member, ",\n                    ").concat(this.id_assistant, ",\n                    ").concat(this.id_periodo, "        \n                )"));

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

      function postDataFeedback() {
        return _postDataFeedback.apply(this, arguments);
      }

      return postDataFeedback;
    }()
  }], [{
    key: "getDataFeedback",
    value: function () {
      var _getDataFeedback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id_member, id_periodo) {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("SELECT * FROM feedback WHERE id_empleado_member = ".concat(id_member, " AND id_periodo = ").concat(id_periodo));

              case 3:
                _yield$pool$execute3 = _context2.sent;
                _yield$pool$execute4 = (0, _slicedToArray2["default"])(_yield$pool$execute3, 2);
                rows = _yield$pool$execute4[0];
                fields = _yield$pool$execute4[1];
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

      function getDataFeedback(_x, _x2) {
        return _getDataFeedback.apply(this, arguments);
      }

      return getDataFeedback;
    }()
  }, {
    key: "getDataHistoryFeedback",
    value: function () {
      var _getDataHistoryFeedback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id_member) {
        var _yield$pool$execute5, _yield$pool$execute6, rows, fields;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _db["default"].execute("SELECT E2.imagen_perfil, E2.nombre, E2.apellido_paterno, \n                F.id_periodo, F.calificacion_promedio, P.nombre_periodo\n                FROM feedback F, empleado E1, empleado E2, periodo P\n                WHERE F.id_empleado_member = E1.id_empleado AND \n                F.id_empleado_assistant = E2.id_empleado AND \n                F.id_periodo = P.id_periodo AND E1.id_empleado = ".concat(id_member, ";"));

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

      function getDataHistoryFeedback(_x3) {
        return _getDataHistoryFeedback.apply(this, arguments);
      }

      return getDataHistoryFeedback;
    }()
  }, {
    key: "getDataAllFeedback",
    value: function () {
      var _getDataAllFeedback = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _yield$pool$execute7, _yield$pool$execute8, rows, fields;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _db["default"].execute("SELECT imagen_perfil, nombre, apellido_paterno, id_periodo, calificacion_promedio \n          FROM feedback F INNER JOIN empleado E ON F.id_empleado_member = E.id_empleado \n          ".concat((0, _query.orderBy)("id_periodo", "DESC"), "\n          ").concat((0, _query.pag)(1, 15)));

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

      function getDataAllFeedback() {
        return _getDataAllFeedback.apply(this, arguments);
      }

      return getDataAllFeedback;
    }()
  }, {
    key: "getDataFeedbackGraph",
    value: function () {
      var _getDataFeedbackGraph = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id_user) {
        var _yield$pool$execute9, _yield$pool$execute10, rows, fields;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _db["default"].execute("SELECT calificacion_promedio, id_periodo, id_feedback, id_empleado_member\n        FROM feedback\n        WHERE id_empleado_member = ".concat(id_user, "\n        ORDER by id_periodo\n        DESC LIMIT 5\n        "));

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

      function getDataFeedbackGraph(_x4) {
        return _getDataFeedbackGraph.apply(this, arguments);
      }

      return getDataFeedbackGraph;
    }()
  }]);
  return Feedback;
}();

exports.Feedback = Feedback;

var post_Feedback = /*#__PURE__*/function () {
  function post_Feedback(_calificacion_craft, _calificacion_personal, _calificacion_business, _calificacion_promedio, _comentario_craft, _comentario_personal, _comentario_business, _comentario_general, _id_member, _id_assistant, _id_periodo) {
    (0, _classCallCheck2["default"])(this, post_Feedback);
    this.calificacion_craft = _calificacion_craft;
    this.calificacion_personal = _calificacion_personal;
    this.calificacion_business = _calificacion_business;
    this.calificacion_promedio = _calificacion_promedio;
    this.comentario_craft = _comentario_craft;
    this.comentario_personal = _comentario_personal;
    this.comentario_business = _comentario_business;
    this.comentario_general = _comentario_general;
    this.id_member = _id_member;
    this.id_assistant = _id_assistant;
    this.id_periodo = _id_periodo;
  }

  (0, _createClass2["default"])(post_Feedback, [{
    key: "postDataFeedback",
    value: function () {
      var _postDataFeedback2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var _yield$pool$execute11, _yield$pool$execute12, rows, fields;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _db["default"].execute("INSERT INTO feedback (\n                calificacion_craft,\n                calificacion_personal,\n                calificacion_business,\n                calificacion_promedio,\n                comentario_craft,\n                comentario_personal,\n                comentario_business,\n                comentario_general,\n                id_empleado_member,\n                id_empleado_assistant,\n                id_periodo\n                )\n                VALUES (\n                    ".concat(this.calificacion_craft, ",\n                    ").concat(this.calificacion_personal, ",\n                    ").concat(this.calificacion_business, ",\n                    ").concat(this.calificacion_promedio, ",\n                    '").concat(this.comentario_craft, "',\n                    '").concat(this.comentario_personal, "',\n                    '").concat(this.comentario_business, "',\n                    '").concat(this.comentario_general, "',\n                    ").concat(this.id_member, ",\n                    ").concat(this.id_assistant, ",\n                    ").concat(this.id_periodo, "        \n                )"));

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
        }, _callee6, this, [[0, 10]]);
      }));

      function postDataFeedback() {
        return _postDataFeedback2.apply(this, arguments);
      }

      return postDataFeedback;
    }()
  }]);
  return post_Feedback;
}();

exports.post_Feedback = post_Feedback;