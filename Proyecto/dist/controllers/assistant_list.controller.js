"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssistantList = getAssistantList;

var _assistant = require("../models/assistant.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Obtener lista de assitant
function getAssistantList(_x, _x2) {
  return _getAssistantList.apply(this, arguments);
}

function _getAssistantList() {
  _getAssistantList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id_assistant, assistant, data_members;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id_assistant = req.params.id_assistant;
            assistant = new _assistant.Assistant(id_assistant);
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