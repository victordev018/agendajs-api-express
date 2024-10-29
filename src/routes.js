import { Router } from "express";
import controllerDoctor from "./controllers/controller.doctor.js";
import controllerUser from "./controllers/controller.user.js";
import controllerAppointment from "./controllers/controller.appointment.js";
import jwt from "./token.js";

const router = Router();

// doctors
router.get("/doctors", jwt.ValidateToken, controllerDoctor.List);
router.post("/doctors", jwt.ValidateToken, controllerDoctor.Insert);
router.put("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Update);
router.delete("/doctors/:id_doctor", jwt.ValidateToken, controllerDoctor.Delete);
router.get("/doctors/:id_doctor/services", jwt.ValidateToken, controllerDoctor.ListServices);

// users
router.post("/users/register", controllerUser.Insert);
router.post("/users/login", controllerUser.Login);
router.get("/users/profile", jwt.ValidateToken, controllerUser.Profile);

// appointments (reservas)
router.get("/appointments", jwt.ValidateToken, controllerAppointment.ListByUser);
router.post("/appointments", jwt.ValidateToken, controllerAppointment.Insert);
router.delete("/appointments/:id_appointment", jwt.ValidateToken, controllerAppointment.Delete);


export default router;