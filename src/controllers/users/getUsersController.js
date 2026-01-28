import { getUsersService } from '../../services/users/getUsers.js';

//controller para obtener todos los usuarios
export default async function getUsersController(req,res) {
    try{
        const users = await getUsersService();
        
        if(users.length === 0){
            return res.status(404).json({message: "No se encontraron usuarios en la base de datos", users: []})
        }
        
        return res.status(200).json({message: "Usuarios obtenidos con exito", users: users})
        
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message: "Error interno del servidor"})
    }
}