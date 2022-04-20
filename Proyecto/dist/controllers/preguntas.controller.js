"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cambiaIndex = cambiaIndex;
exports.eliminaPregunta = eliminaPregunta;
exports.getPreguntas = getPreguntas;
exports.getPreguntasDimension = getPreguntasDimension;
exports.registraPregunta = registraPregunta;
exports.updatePregunta = updatePregunta;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _preguntas = require("../models/preguntas.model");

//Obtener preguntas
function getPreguntas(_x, _x2) {
  return _getPreguntas.apply(this, arguments);
}

function _getPreguntas() {
  _getPreguntas = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var nivel, preguntas;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nivel = req.params.nivel;
            _context.prev = 1;
            _context.next = 4;
            return _preguntas.Pregunta.fetchAllToNivel(nivel);

          case 4:
            preguntas = _context.sent;
            res.status(200).send({
              preguntas: preguntas
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
  return _getPreguntas.apply(this, arguments);
}

function getPreguntasDimension(_x3, _x4) {
  return _getPreguntasDimension.apply(this, arguments);
}

function _getPreguntasDimension() {
  _getPreguntasDimension = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$params, nivel, dimension, preguntas;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$params = req.params, nivel = _req$params.nivel, dimension = _req$params.dimension;
            _context2.prev = 1;
            _context2.next = 4;
            return _preguntas.Pregunta.fetchAllToNivelWithDimension(nivel, dimension);

          case 4:
            preguntas = _context2.sent;
            res.status(200).send({
              preguntas: preguntas
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
  return _getPreguntasDimension.apply(this, arguments);
}

function registraPregunta(_x5, _x6) {
  return _registraPregunta.apply(this, arguments);
}

function _registraPregunta() {
  _registraPregunta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, pregunta, nivel_pregunta, dimension_pregunta, tipo_pregunta, id_chapter, nueva_pregunta, data;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, pregunta = _req$body.pregunta, nivel_pregunta = _req$body.nivel_pregunta, dimension_pregunta = _req$body.dimension_pregunta, tipo_pregunta = _req$body.tipo_pregunta, id_chapter = _req$body.id_chapter;
            nueva_pregunta = new _preguntas.Pregunta(0, pregunta, nivel_pregunta, dimension_pregunta, tipo_pregunta, id_chapter);
            console.log(nueva_pregunta);
            _context3.prev = 3;
            _context3.next = 6;
            return nueva_pregunta.post_pregunta();

          case 6:
            data = _context3.sent;
            res.status(200).send({
              message: data
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            res.status(500).send({
              err: _context3.t0
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return _registraPregunta.apply(this, arguments);
}

function eliminaPregunta(_x7, _x8) {
  return _eliminaPregunta.apply(this, arguments);
}

function _eliminaPregunta() {
  _eliminaPregunta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id_pregunta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id_pregunta = req.params.id_pregunta;

            try {
              _preguntas.Pregunta.deletePregunta(id_pregunta);

              res.status(200).send({
                message: "delete correct"
              });
            } catch (err) {
              res.status(500).send({
                err: err
              });
            }

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _eliminaPregunta.apply(this, arguments);
}

function cambiaIndex(_x9, _x10) {
  return _cambiaIndex.apply(this, arguments);
}

function _cambiaIndex() {
  _cambiaIndex = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, id_pregunta_origen, id_pregunta_destino;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, id_pregunta_origen = _req$body2.id_pregunta_origen, id_pregunta_destino = _req$body2.id_pregunta_destino;

            try {
              _preguntas.Pregunta.changeIndex(id_pregunta_origen, id_pregunta_destino);

              res.status(200).send({
                message: "correct update index"
              });
            } catch (err) {
              res.status(500).send({
                err: err
              });
            }

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _cambiaIndex.apply(this, arguments);
}

function updatePregunta(_x11, _x12) {
  return _updatePregunta.apply(this, arguments);
}

function _updatePregunta() {
  _updatePregunta = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body3, id_pregunta, pregunta, tipo_pregunta, nueva_pregunta, data;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, id_pregunta = _req$body3.id_pregunta, pregunta = _req$body3.pregunta, tipo_pregunta = _req$body3.tipo_pregunta;
            nueva_pregunta = new _preguntas.Pregunta(id_pregunta, pregunta, 0, "", tipo_pregunta, 0);

            try {
              data = nueva_pregunta.update_Pregunta();
              console.log(data);
              res.status(200).send({
                message: "correct update pregunta"
              });
            } catch (err) {
              res.status(500).send({
                err: err
              });
            }

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updatePregunta.apply(this, arguments);
}