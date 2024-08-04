import { Router } from "express";
import {
  createDataController,
  deleteDataController,
  getDataController,
  updateDataController,
} from "../../../controller/data.controller.js";
const dataRoutes = Router();

dataRoutes.get("/", getDataController);
dataRoutes.post("/", createDataController);
dataRoutes.put("/:id", updateDataController);
dataRoutes.delete("/:id", deleteDataController);

export default dataRoutes;
