import dotenv from "dotenv";
dotenv.config();

import { Hono } from "hono";
import personRoutes from "./routes/personRoutes";
import { serve } from "@hono/node-server";

const app = new Hono();

app.route("/api", personRoutes);

serve(app);

console.log("Servidor rodando na porta 3000");
