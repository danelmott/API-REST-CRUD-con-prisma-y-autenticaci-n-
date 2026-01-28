import { getUserService } from "../../services/users/getUser.js";


//controller para obtener un usuario especifico
export default async function getUserController(req,res){
    try {
        const id = req.params.id;
        
        const user = await getUserService(id);
        
        if(!user){
            return res.status(404).json({message: "Usuario no encontrado"});
        }
        
        return res.status(200).json({message: "Usuario Obtenido Exitosamente", user: user})
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error interno del servidor"})
    }
}