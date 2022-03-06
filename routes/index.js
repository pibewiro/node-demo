import { Router } from "express";
import CarRoutes from "./Cars.js";
import UserRoutes from "./Users.js";

const routes = Router();

const cars = routes.use("/cars", CarRoutes);
const users = routes.use("/Users", UserRoutes);

routes.use([cars, users]);

export default routes;
