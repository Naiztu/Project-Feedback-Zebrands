//Ejecutable principal del server

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes/feedback.routes");

const app = express();

//setings
const port = 8080;

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use(router);

//Server On
app.listen(port);
console.log(`Server on port http://localhost:${port}`);
