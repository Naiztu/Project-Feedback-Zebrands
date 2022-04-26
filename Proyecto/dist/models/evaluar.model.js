"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postEvaluar = exports.getEvaluar = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _db = _interopRequireDefault(require("../database/db"));

var _query = require("../util/query");

var getEvaluar = /*#__PURE__*/function () {
  function getEvaluar(_id_user, _id_periodo) {
    (0, _classCallCheck2["default"])(this, getEvaluar);
    this.id_user = _id_user;
    this.id_periodo = _id_periodo;
  }

  (0, _createClass2["default"])(getEvaluar, [{
    key: "getDataEvaluarPendiente",
    value: function () {
      var _getDataEvaluarPendiente = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _yield$pool$execute, _yield$pool$execute2, rows, fields;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _db["default"].execute("SELECT id_empleado, nombre, apellido_paterno, imagen_perfil \n            FROM empleado\n                where id_empleado in (SELECT E.id_empleado_evaluado FROM evaluacion E \n                WHERE id_periodo = ".concat(this.id_periodo, " AND id_empleado_evaluador = ").concat(this.id_user, " \n                AND estatus = \"No Contestado\");"));

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

      function getDataEvaluarPendiente() {
        return _getDataEvaluarPendiente.apply(this, arguments);
      }

      return getDataEvaluarPendiente;
    }()
  }, {
    key: "getDataEvaluar",
    value: function () {
      var _getDataEvaluar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _yield$pool$execute3, _yield$pool$execute4, rows, fields;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _db["default"].execute("SELECT Em.id_empleado, Em.nombre, Em.apellido_paterno, Em.imagen_perfil, E.estatus \n          FROM empleado Em, evaluacion E \n            WHERE Em.id_empleado = E.id_empleado_evaluador AND\n            E.id_empleado_evaluado = ".concat(this.id_user, " AND\n            E.id_periodo = ").concat(this.id_periodo, ";"));

              case 3:
                _yield$pool$execute3 = _context2.sent;
                _yield$pool$execute4 = (0, _slicedToArray2["default"])(_yield$pool$execute3, 2);
                rows = _yield$pool$execute4[0];
                fields = _yield$pool$execute4[1];
                return _context2.abrupt("return", rows);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.log({
                  err: _context2.t0
                });
                throw {
                  err: _context2.t0
                };

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function getDataEvaluar() {
        return _getDataEvaluar.apply(this, arguments);
      }

      return getDataEvaluar;
    }()
  }, {
    key: "getResumen",
    value: function () {
      var _getResumen = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var conn, arrAvg, _yield$conn$query, _yield$conn$query2, evaluadores_data, _yield$conn$query3, _yield$conn$query4, calif, calificaciones_por_evaluador, contestados, promedios, resumen;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                conn = null;
                _context3.prev = 1;
                _context3.next = 4;
                return _db["default"].getConnection();

              case 4:
                conn = _context3.sent;
                _context3.next = 7;
                return conn.beginTransaction();

              case 7:
                arrAvg = function arrAvg(arr) {
                  return arr.reduce(function (a, b) {
                    return a + b;
                  }, 0) / arr.length;
                };

                _context3.next = 10;
                return conn.query("\n      SELECT nombre, apellido_paterno,id_empleado_evaluador, imagen_perfil, estatus FROM\templeado em, evaluacion ev\n      WHERE ev.id_empleado_evaluador=em.id_empleado \n      AND id_periodo=".concat(this.id_periodo, "\n      AND id_empleado_evaluado=").concat(this.id_user, ";\n      "));

              case 10:
                _yield$conn$query = _context3.sent;
                _yield$conn$query2 = (0, _slicedToArray2["default"])(_yield$conn$query, 1);
                evaluadores_data = _yield$conn$query2[0];
                _context3.next = 15;
                return conn.query("\n      SELECT  id_empleado_evaluador, dimension_respuesta, descripcion_respuesta \n      FROM respuesta \n      WHERE id_empleado_evaluado=".concat(this.id_user, " \n      AND id_periodo=").concat(this.id_periodo, ";\n  "));

              case 15:
                _yield$conn$query3 = _context3.sent;
                _yield$conn$query4 = (0, _slicedToArray2["default"])(_yield$conn$query3, 1);
                calif = _yield$conn$query4[0];
                ;
                calificaciones_por_evaluador = evaluadores_data.map(function (element) {
                  if (element.estatus === "Contestado") {
                    return {
                      "id_evaluador": element.id_empleado_evaluador,
                      "nombre": element.nombre,
                      "apellido_paterno": element.apellido_paterno,
                      "imagen": element.imagen_perfil,
                      "estatus": element.estatus,
                      "cal_business": arrAvg(calif.filter(function (cal) {
                        return cal.lista_id_empleado_evaluador === element.lista_id_empleado_evaluador && cal.dimension_respuesta === "business";
                      }).map(function (ob) {
                        return parseInt(ob.descripcion_respuesta);
                      })),
                      "cal_craft": arrAvg(calif.filter(function (cal) {
                        return cal.lista_id_empleado_evaluador === element.lista_id_empleado_evaluador && cal.dimension_respuesta === "craft";
                      }).map(function (ob) {
                        return parseInt(ob.descripcion_respuesta);
                      })),
                      "cal_people": arrAvg(calif.filter(function (cal) {
                        return cal.lista_id_empleado_evaluador === element.lista_id_empleado_evaluador && cal.dimension_respuesta === "people";
                      }).map(function (ob) {
                        return parseInt(ob.descripcion_respuesta);
                      }))
                    };
                  } else {
                    return {
                      "id_evaluador": element.id_empleado_evaluador,
                      "nombre": element.nombre,
                      "apellido_paterno": element.apellido_paterno,
                      "imagen": element.imagen_perfil,
                      "estatus": element.estatus
                    };
                  }
                });
                _context3.next = 22;
                return conn.commit();

              case 22:
                _context3.next = 24;
                return conn.release();

              case 24:
                contestados = calificaciones_por_evaluador.filter(function (cal) {
                  return cal.estatus === "Contestado";
                });
                promedios = [arrAvg(contestados.map(function (ob) {
                  return ob.cal_craft;
                })), arrAvg(contestados.map(function (ob) {
                  return ob.cal_people;
                })), arrAvg(contestados.map(function (ob) {
                  return ob.cal_business;
                }))];
                resumen = {
                  "calificaciones": calificaciones_por_evaluador,
                  "prom_craft": promedios[0],
                  "prom_people": promedios[1],
                  "prom_business": promedios[2],
                  "prom_gen": arrAvg(promedios)
                };
                return _context3.abrupt("return", resumen);

              case 30:
                _context3.prev = 30;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);

                if (!conn) {
                  _context3.next = 38;
                  break;
                }

                _context3.next = 36;
                return conn.rollback();

              case 36:
                _context3.next = 38;
                return conn.release();

              case 38:
                throw _context3.t0;

              case 39:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 30]]);
      }));

      function getResumen() {
        return _getResumen.apply(this, arguments);
      }

      return getResumen;
    }()
  }]);
  return getEvaluar;
}();

exports.getEvaluar = getEvaluar;

var postEvaluar = /*#__PURE__*/function () {
  function postEvaluar(_lista_id_empleado_evaluador, _id_empleado_evaluado, _id_periodo) {
    (0, _classCallCheck2["default"])(this, postEvaluar);
    this.lista_id_empleado_evaluador = _lista_id_empleado_evaluador;
    this.id_empleado_evaluado = _id_empleado_evaluado;
    this.id_periodo = _id_periodo;
  }

  (0, _createClass2["default"])(postEvaluar, [{
    key: "postDataAsignarCompaniero",
    value: function () {
      var _postDataAsignarCompaniero = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _yield$pool$execute5, _yield$pool$execute6, rows, fields;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _db["default"].execute("".concat((0, _query.queryPostSolicitarEvaluaciones)(this.lista_id_empleado_evaluador, this.id_empleado_evaluado, this.id_periodo)));

              case 3:
                _yield$pool$execute5 = _context4.sent;
                _yield$pool$execute6 = (0, _slicedToArray2["default"])(_yield$pool$execute5, 2);
                rows = _yield$pool$execute6[0];
                fields = _yield$pool$execute6[1];
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
        }, _callee4, this, [[0, 10]]);
      }));

      function postDataAsignarCompaniero() {
        return _postDataAsignarCompaniero.apply(this, arguments);
      }

      return postDataAsignarCompaniero;
    }()
  }]);
  return postEvaluar;
}();

exports.postEvaluar = postEvaluar;