import { Router } from "express";
import authRoutes from "./auth.route.js";
import dataRoutes from "./data.route.js";

const v1Routes = Router();

v1Routes.use("/auth", authRoutes);

v1Routes.use("/tasks", dataRoutes);

export default v1Routes;
