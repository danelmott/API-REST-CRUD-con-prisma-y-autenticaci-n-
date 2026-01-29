import jwt from 'jsonwebtoken'
import 'dotenv/config';

export default function loginController (req,res){
    const user = req.user;
    
    //informacion que va ir en el payload del usuario
    const payloadUser = {
        sub: user.id,
        rol: user.rol
    };
    
    const userToken = jwt.sign(payloadUser,process.env.SECRET_SIGNATURE,{expiresIn: "1d"});
    
    res.cookie("token",userToken,{
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 24 * 60 * 60* 1000
    })

    return res.status(200).json({user: user, token: userToken});
}