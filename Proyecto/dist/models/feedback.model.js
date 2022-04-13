"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post_Feedback = exports.Feedback = void 0;

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

var Feedback = /*#__PURE__*/function () {
  function Feedback(_calificacion_craft, _calificacion_personal, _calificacion_business, _calificacion_promedio, _comentario_craft, _comentario_personal, _comentario_business, _comentario_general, _id_member, _id_assistant, _id_periodo) {
    _classCallCheck(this, Feedback);

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

  _createClass(Feedback, [{
    key: "postDataFeedback",
    value: function () {
      var _postDataFeedback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("INSERT INTO feedback (\n                calificacion_craft,\n                calificacion_personal,\n                calificacion_business,\n                calificacion_promedio,\n                comentario_craft,\n                comentario_personal,\n                comentario_business,\n                comentario_general,\n                id_empleado_member,\n                id_empleado_assistant,\n                id_periodo\n                )\n                VALUES (\n                    ".concat(this.calificacion_craft, ",\n                    ").concat(this.calificacion_personal, ",\n                    ").concat(this.calificacion_business, ",\n                    ").concat(this.calificacion_promedio, ",\n                    '").concat(this.comentario_craft, "',\n                    '").concat(this.comentario_personal, "',\n                    '").concat(this.comentario_business, "',\n                    '").concat(this.comentario_general, "',\n                    ").concat(this.id_member, ",\n                    ").concat(this.id_assistant, ",\n                    ").concat(this.id_periodo, "        \n                )"));

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

      function postDataFeedback() {
        return _postDataFeedback.apply(this, arguments);
      }

      return postDataFeedback;
    }()
  }], [{
    key: "getDataFeedback",
    value: function () {
      var _getDataFeedback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id_member, id_periodo) {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("SELECT * FROM feedback WHERE id_empleado_member = ".concat(id_member, " AND id_periodo = ").concat(id_periodo));

              case 3:
                _yield$pool$execute3 = _context2.sent;
                _yield$pool$execute4 = _slicedToArray(_yield$pool$execute3, 2);
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
      var _getDataHistoryFeedback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id_member) {
        var _yield$pool$execute5, _yield$pool$execute6, rows, fields;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _db["default"].execute("SELECT E2.imagen_perfil, E2.nombre, E2.apellido_paterno, \n                F.id_periodo, F.calificacion_promedio, P.nombre_periodo\n                FROM feedback F, empleado E1, empleado E2, periodo P\n                WHERE F.id_empleado_member = E1.id_empleado AND \n                F.id_empleado_assistant = E2.id_empleado AND \n                F.id_periodo = P.id_periodo AND E1.id_empleado = ".concat(id_member, ";"));

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

      function getDataHistoryFeedback(_x3) {
        return _getDataHistoryFeedback.apply(this, arguments);
      }

      return getDataHistoryFeedback;
    }()
  }, {
    key: "getDataAllFeedback",
    value: function () {
      var _getDataAllFeedback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var _yield$pool$execute7, _yield$pool$execute8, rows, fields;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _db["default"].execute("SELECT imagen_perfil, nombre, apellido_paterno, id_periodo, calificacion_promedio \n                FROM feedback F INNER JOIN empleado E ON F.id_empleado_member = E.id_empleado");

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

      function getDataAllFeedback() {
        return _getDataAllFeedback.apply(this, arguments);
      }

      return getDataAllFeedback;
    }()
  }]);

  return Feedback;
}();

exports.Feedback = Feedback;

var post_Feedback = /*#__PURE__*/function () {
  function post_Feedback(_calificacion_craft, _calificacion_personal, _calificacion_business, _calificacion_promedio, _comentario_craft, _comentario_personal, _comentario_business, _comentario_general, _id_member, _id_assistant, _id_periodo) {
    _classCallCheck(this, post_Feedback);

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

  _createClass(post_Feedback, [{
    key: "postDataFeedback",
    value: function () {
      var _postDataFeedback2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _yield$pool$execute9, _yield$pool$execute10, rows, fields;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _db["default"].execute("INSERT INTO feedback (\n                calificacion_craft,\n                calificacion_personal,\n                calificacion_business,\n                calificacion_promedio,\n                comentario_craft,\n                comentario_personal,\n                comentario_business,\n                comentario_general,\n                id_empleado_member,\n                id_empleado_assistant,\n                id_periodo\n                )\n                VALUES (\n                    ".concat(this.calificacion_craft, ",\n                    ").concat(this.calificacion_personal, ",\n                    ").concat(this.calificacion_business, ",\n                    ").concat(this.calificacion_promedio, ",\n                    '").concat(this.comentario_craft, "',\n                    '").concat(this.comentario_personal, "',\n                    '").concat(this.comentario_business, "',\n                    '").concat(this.comentario_general, "',\n                    ").concat(this.id_member, ",\n                    ").concat(this.id_assistant, ",\n                    ").concat(this.id_periodo, "        \n                )"));

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
        }, _callee5, this, [[0, 10]]);
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