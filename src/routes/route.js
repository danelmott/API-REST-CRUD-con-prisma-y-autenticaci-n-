import { Router } from "express";
import getUserController from "../controllers/users/getUserController.js";
import getUsersController from '../controllers/users/getUsersController.js'
import createUserController from '../controllers/users/createUserController.js'
import updateUserController from '../controllers/users/updateUserController.js'
import deleteUserController from '../controllers/users/deleteUserController.js'
import passport from "passport";

const router = Router();

//crud a los usuarios


//rutas estaticas
//rutas protegidas con el metodo de autenticacion de jwt
router.route("/users")
.get(getUsersController)
.post(passport.authenticate('jwt',{session: false}), createUserController)

//rutas dinamicas
router.route("/users/:id")
.get(getUserController)
.put(passport.authenticate('jwt',{session: false}),    updateUserController)
.delete(passport.authenticate('jwt',{session: false}), deleteUserController)


export default router