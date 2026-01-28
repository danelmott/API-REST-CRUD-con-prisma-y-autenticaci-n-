import { Router } from "express";
import loginController from "../controllers/auth/loginController.js";
import passport from "passport";

const router = Router();

//ruta de login la cual verifica la existencia del usuario
//y en el controlador se crea un jtw
router.route("/login")
.post(passport.authenticate('local',{session:false}),
    loginController
);


export default router;