import { Strategy } from 'passport-local';
import { searchUserService } from '../../../services/auth/searchUser.js';
import bcrypt from 'bcrypt';

//estrategia de autenticacion local para ver si el usuario existe cuando se loguea
export const localStrategy = new Strategy({
    usernameField: 'identifier',
    passwordField: 'password'
},
    async (identifier, password, done) => {
        try {
            const user = await searchUserService(identifier);
            
            if(!user){
                return done (null, false, {message: "Usuario no encontrado"})
            }
            
            const isMatch = await bcrypt.compare(password, user.password);
            
            if(!isMatch){
                return done(null,false,{message: "contraseña incorrecta"})
            }
            
            return done(null, user);
        } 
        catch (error) {
            return done(error);
        }
    }
)