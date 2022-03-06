import { Router } from "express";

const UserRoutes = Router();

UserRoutes.get("/", (req, res) => {
  return res.status(200).json({ message: "User Routes" });
});

export default UserRoutes;
