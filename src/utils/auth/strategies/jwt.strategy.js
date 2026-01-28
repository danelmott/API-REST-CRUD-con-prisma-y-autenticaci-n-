import 'dotenv/config'
import { Strategy, ExtractJwt } from 'passport-jwt';

//esta estrategia sirve para las apis y funciona despues del login(despues de generado el jtw)
//valida la autenticacion y los permisos del usuario

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_SIGNATURE
}

export const jwtStrategy = new Strategy(options,(payload, done)=>{
    return done(null, payload);
});