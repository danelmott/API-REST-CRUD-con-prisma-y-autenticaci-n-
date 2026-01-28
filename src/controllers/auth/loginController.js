import jtw from 'jsonwebtoken';
import 'dotenv/config';

export default function (req,res){
    const user = req.user;
    
    //informacion que va ir en el payload del usuario
    const payloadUser = {
        id: user.id,
        role: user.rol
    };
    
    const userToken = jtw.sign(payloadUser,process.env.SECRET_SIGNATURE);
    
    return res.status(200).json({user: user, token: userToken});
}