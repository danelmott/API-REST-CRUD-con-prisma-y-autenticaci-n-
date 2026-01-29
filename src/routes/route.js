import { Router } from "express";
import getUserController from "../controllers/users/getUserController.js";
import getUsersController from '../controllers/users/getUsersController.js'
import updateUserController from '../controllers/users/updateUserController.js'
import deleteUserController from '../controllers/users/deleteUserController.js'
import { checkRoles } from "../middlewares/checkRoles.js";
import passport from "passport";

const router = Router();

//crud a los usuarios


//rutas estaticas
//rutas protegidas con el metodo de autenticacion de jwt
router.route("/users")
.get(getUsersController)


//rutas dinamicas
router.route("/users/:id")
.get(getUserController)
.put(
    passport.authenticate('jwt',{session: false}),
    checkRoles('ADMIN'),
    updateUserController
)
.delete(
    passport.authenticate('jwt',{session: false}),
    checkRoles('ADMIN'),
    deleteUserController
)


export default router