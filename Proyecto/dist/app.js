"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _feedback = _interopRequireDefault(require("./routes/feedback.routes"));

var _preguntas = _interopRequireDefault(require("./routes/preguntas.routes"));

var _assistant_list = _interopRequireDefault(require("./routes/assistant_list.routes"));

var _evaluar = _interopRequireDefault(require("./routes/evaluar.routes"));

var _empleado = _interopRequireDefault(require("./routes/empleado.routes"));

var _respuestas = _interopRequireDefault(require("./routes/respuestas.routes"));

var _rol = _interopRequireDefault(require("./routes/rol.routes"));

var _periodo = _interopRequireDefault(require("./routes/periodo.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//importing dependecies
//importing routes
//Para probar cosas
//setings
var app = (0, _express["default"])(); //middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use((0, _express.json)());
app.use(_express["default"]["static"]("public")); //Routes

app.use("/api/feedback", _feedback["default"]);
app.use("/api/preguntas", _preguntas["default"]);
app.use("/api/assistant_list", _assistant_list["default"]);
app.use("/api/evaluar", _evaluar["default"]);
app.use("/api/empleado", _empleado["default"]);
app.use("/api/respuestas", _respuestas["default"]);
app.use("/api/rol", _rol["default"]);
app.use("/api/periodo", _periodo["default"]);
var _default = app;
exports["default"] = _default;