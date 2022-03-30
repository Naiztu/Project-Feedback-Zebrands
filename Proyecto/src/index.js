//Ejecutable principal del server

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const rutas_feedback = require("./routes/feedback.routes");
const rutas_preguntas = require("./routes/preguntas.routes");
const rutas_example = require("./routes/example.routes");//Para probar cosas
const rutas_assistant_list = require("./routes/assistant_list.routes");//Para probar cosas
const rutas_evaluar = require("./routes/evaluar.routes");

const app = express();

//setings
const port = 8080;

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes

app.use('/feedback', rutas_feedback);
app.use('/preguntas', rutas_preguntas);
app.use('/example', rutas_example);
app.use('/assistant_list', rutas_assistant_list);
app.use('/evaluar', rutas_evaluar);

//Server On
app.listen(port);
console.log(`Server on port http://localhost:${port}`);
