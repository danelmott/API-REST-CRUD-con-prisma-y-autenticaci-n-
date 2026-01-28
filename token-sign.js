import jwt from 'jsonwebtoken';

const secret =  "motocarro";

const payload = {
    sub: 1,
    role: "USER" 
}

//generando tokens
function signToken(payload,secret){
    return jwt.sign(payload,secret);
}

const token = signToken(payload,secret)
console.log(token);

//verificando tokens
function verifyToken(token,secret){
    return jwt.verify(token,secret);
}

const payloadUser = verifyToken(token,"hola");
console.log(payloadUser);