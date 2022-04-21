"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssistantList = getAssistantList;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _assistant = require("../models/assistant.model");

//Obtener lista de assitant
function getAssistantList(_x, _x2) {
  return _getAssistantList.apply(this, arguments);
}

function _getAssistantList() {
  _getAssistantList = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id_empleado, assistant, data_members;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_empleado = req.data.id_empleado;
            assistant = new _assistant.Assistant(id_empleado);
            console.log(assistant);
            _context.prev = 3;
            _context.next = 6;
            return assistant.getDataListAssitant();

          case 6:
            data_members = _context.sent;
            res.send({
              data_members: data_members
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            res.status(500).send({
              err: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));
  return _getAssistantList.apply(this, arguments);
}