import { Router } from "express";
import starfightersRouter from "./starfightersRouter.js";

const router = Router()

router.use(starfightersRouter);

export default router;