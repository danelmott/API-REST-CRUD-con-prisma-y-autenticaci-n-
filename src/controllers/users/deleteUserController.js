import { deleteUserService } from '../../services/users/deleteUser.js';


//controller para eliminar usuarios
export default async function deleteUserController(req,res) {
    try{
        const id = req.params.id;
        const deletedUser = await deleteUserService(id);
        
        if(!deletedUser){
            return res.status(404).json({message: "El usuario a eliminar no fue encontrado"})
        }
        
        return res.status(200).json({message:"Usuario eliminado exitosamente"})
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message: "Error interno del servidor"})
    }
}