import 'dotenv/config'
import { Strategy, ExtractJwt } from 'passport-jwt';

//esta estrategia sirve para las apis y funciona despues del login(despues de generado el jtw)
//valida la autenticacion y los permisos del usuario


//FUNCION PARA EXTRAER COOKIE DEL REQ
function cookieExtractor(req) {
    if(req && req.cookies){
        return req.cookies.token;
    }
    return null;
};

const options = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.SECRET_SIGNATURE
}

export const jwtStrategy = new Strategy(options,(payload, done)=>{
    return done(null, payload);
});