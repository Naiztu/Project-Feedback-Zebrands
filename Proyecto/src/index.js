//Ejecutable principal del server

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const rutas_feedback = require("./routes/feedback.routes");
const rutas_preguntas = require("./routes/preguntas.routes");

const rutas_example = require("./routes/example.routes");//Para probar cosas

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


//Server On
app.listen(port);
console.log(`Server on port http://localhost:${port}`);
