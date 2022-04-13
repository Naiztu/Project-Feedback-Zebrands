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
import rutas_rol from "./routes/rol.routes";
import rutas_periodo from "./routes/periodo.routes";

//setings
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(json());
app.use(express.static("public"));

//Routes
app.use("/api/feedback", rutas_feedback);
app.use("/api/preguntas", rutas_preguntas);
app.use("/api/assistant_list", rutas_assistant_list);
app.use("/api/evaluar", rutas_evaluar);
app.use("/api/empleado", rutas_empleado);
app.use("/api/respuestas", rutas_respuestas);
app.use("/api/rol", rutas_rol);
app.use("/api/periodo", rutas_periodo);


export default app;
