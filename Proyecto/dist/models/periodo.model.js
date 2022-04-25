"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Periodo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

var Periodo = /*#__PURE__*/function () {
  function Periodo() {
    (0, _classCallCheck2["default"])(this, Periodo);
  }

  (0, _createClass2["default"])(Periodo, null, [{
    key: "postPeriodo",
    value: function () {
      var _postPeriodo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(nombre_periodo, fecha_inicio, fecha_fin, estatus_periodo, id_chapter) {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute(" INSERT INTO periodo ( nombre_periodo, fecha_inicio, fecha_fin, estatus_periodo, id_chapter)\n     VALUES (  \n         '".concat(nombre_periodo, "',\n         '").concat(fecha_inicio, "',\n         '").concat(fecha_fin, "',\n         '").concat(estatus_periodo, "',\n         ").concat(id_chapter, "\n        ) "));

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
        }, _callee, null, [[0, 10]]);
      }));

      function postPeriodo(_x, _x2, _x3, _x4, _x5) {
        return _postPeriodo.apply(this, arguments);
      }

      return postPeriodo;
    }()
  }, {
    key: "changeDate",
    value: function () {
      var _changeDate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(fecha_inicio, fecha_fin, id_periodo) {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("\n        UPDATE periodo\n        SET fecha_inicio='".concat(fecha_inicio, "', fecha_fin='").concat(fecha_fin, "' \n        WHERE periodo.id_periodo= ").concat(id_periodo, "\n                "));

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
        }, _callee2, null, [[0, 10]]);
      }));

      function changeDate(_x6, _x7, _x8) {
        return _changeDate.apply(this, arguments);
      }

      return changeDate;
    }()
  }, {
    key: "getPeriodo",
    value: function () {
      var _getPeriodo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _yield$pool$execute5, _yield$pool$execute6, rows, fields;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _db["default"].execute(" SELECT nombre_periodo, fecha_inicio, fecha_fin, estatus_periodo FROM periodo \n    order BY fecha_fin DESC\n    ");

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

      function getPeriodo() {
        return _getPeriodo.apply(this, arguments);
      }

      return getPeriodo;
    }()
  }]);
  return Periodo;
}();

exports.Periodo = Periodo;