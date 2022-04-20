"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllFeedbacks = getAllFeedbacks;
exports.getFeedback = getFeedback;
exports.getFeedbackHistory = getFeedbackHistory;
exports.postFeedback = postFeedback;

var _feedback = require("../models/feedback.model");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getFeedback(_x, _x2) {
  return _getFeedback.apply(this, arguments);
}

function _getFeedback() {
  _getFeedback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$params, id_user, id_periodo, data_feedback;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, id_user = _req$params.id_user, id_periodo = _req$params.id_periodo;
            _context.prev = 1;
            _context.next = 4;
            return _feedback.Feedback.getDataFeedback(id_user, id_periodo);

          case 4:
            data_feedback = _context.sent;
            res.send({
              data_feedback: data_feedback
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).send({
              err: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _getFeedback.apply(this, arguments);
}

function getFeedbackHistory(_x3, _x4) {
  return _getFeedbackHistory.apply(this, arguments);
}

function _getFeedbackHistory() {
  _getFeedbackHistory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id_user, data_feedbackHistory;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_user = req.params.id_user;
            _context2.prev = 1;
            _context2.next = 4;
            return _feedback.Feedback.getDataHistoryFeedback(id_user);

          case 4:
            data_feedbackHistory = _context2.sent;
            res.send({
              data_feedbackHistory: data_feedbackHistory
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).send({
              err: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getFeedbackHistory.apply(this, arguments);
}

function getAllFeedbacks(_x5, _x6) {
  return _getAllFeedbacks.apply(this, arguments);
}

function _getAllFeedbacks() {
  _getAllFeedbacks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$data, id_empleado, apellido_paterno, nivel_business, nivel_craft, nivel_people, data_feedbackAll;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$data = req.data, id_empleado = _req$data.id_empleado, apellido_paterno = _req$data.apellido_paterno, nivel_business = _req$data.nivel_business, nivel_craft = _req$data.nivel_craft, nivel_people = _req$data.nivel_people;
            _context3.prev = 1;
            _context3.next = 4;
            return _feedback.Feedback.getDataAllFeedback();

          case 4:
            data_feedbackAll = _context3.sent;
            res.send({
              data_feedbackAll: data_feedbackAll
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            res.status(500).send({
              err: _context3.t0
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getAllFeedbacks.apply(this, arguments);
}

function postFeedback(_x7, _x8) {
  return _postFeedback.apply(this, arguments);
}

function _postFeedback() {
  _postFeedback = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, calificacion_craft, calificacion_personal, calificacion_business, calificacion_promedio, comentario_craft, comentario_personal, comentario_business, comentario_general, id_member, id_assistant, id_periodo, feedback, data_post_feedback;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, calificacion_craft = _req$body.calificacion_craft, calificacion_personal = _req$body.calificacion_personal, calificacion_business = _req$body.calificacion_business, calificacion_promedio = _req$body.calificacion_promedio, comentario_craft = _req$body.comentario_craft, comentario_personal = _req$body.comentario_personal, comentario_business = _req$body.comentario_business, comentario_general = _req$body.comentario_general, id_member = _req$body.id_member, id_assistant = _req$body.id_assistant, id_periodo = _req$body.id_periodo;
            feedback = new _feedback.Feedback(calificacion_craft, calificacion_personal, calificacion_business, calificacion_promedio, comentario_craft, comentario_personal, comentario_business, comentario_general, id_member, id_assistant, id_periodo);
            _context4.prev = 2;
            _context4.next = 5;
            return feedback.postDataFeedback();

          case 5:
            data_post_feedback = _context4.sent;
            res.send({
              data_post_feedback: data_post_feedback
            });
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](2);
            res.status(500).send({
              err: _context4.t0
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 9]]);
  }));
  return _postFeedback.apply(this, arguments);
}