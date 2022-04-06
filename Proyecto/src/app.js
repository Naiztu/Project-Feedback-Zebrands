//importing dependecies
import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";

//importing routes
import rutas_feedback from "./routes/feedback.routes";
import rutas_preguntas from "./routes/preguntas.routes";
import rutas_assistant_list from "./routes/assistant_list.routes"; //Para probar cosas
import rutas_evaluar from "./routes/evaluar.routes";
import rutas_empleado from "./routes/empleado.routes";
import rutas_respuestas from "./routes/respuestas.routes";

//setings
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(json());
app.use(express.static("public"));

//Routes
app.use("/feedback", rutas_feedback);
app.use("/preguntas", rutas_preguntas);
app.use("/assistant_list", rutas_assistant_list);
app.use("/evaluar", rutas_evaluar);
app.use("/empleado", rutas_empleado);
app.use("/respuestas", rutas_respuestas);


export default app;
