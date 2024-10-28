import { Router } from "express";
import ControllerDoctor from "./controllers/controller.doctor.js";

const router = Router();

router.get("/doctors", ControllerDoctor.List);

export default router;