import passport from "passport";
import { localStrategy } from "./strategies/local.strategy.js";
import { jwtStrategy } from "./strategies/jwt.strategy.js";

//definiendo que estrategia va usar passport
export function authLocalStrategy(){
    passport.use('local',localStrategy);
}

export function authJwtStrategy(){
    passport.use('jwt',jwtStrategy);
}




