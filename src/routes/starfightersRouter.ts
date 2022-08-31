import { Router } from "express";
import * as starfightersController from "../controllers/starfightersController.js";
import { starfightersValidate } from "../middlewares/starfightersMiddleware.js";

const starfightersRouter = Router();

starfightersRouter.post("/battle",starfightersValidate, starfightersController.battleStars);

export default starfightersRouter;