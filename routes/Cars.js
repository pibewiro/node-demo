import { Router } from "express";

const CarRoutes = Router();

CarRoutes.get("/", (req, res) => {
  return res.status(200).json({ message: "Car Routes" });
});

export default CarRoutes;
