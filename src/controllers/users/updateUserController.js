import { updateUserSchema } from '../../utils/validators/updateUserSchema.js';
import { updateUserService } from '../../services/users/updateUser.js';

//controller para actualizar usuarios
export default async function updateUserController(req,res){
    try {
        //obteniendo id y datos del body
        const id = req.params.id;
        const parseData =  updateUserSchema.safeParse(req.body);
        
        //verificando que los datos sean los correctos
        if(!parseData.success){
            return res.status(400).json({
                message: "Datos invalidos",
                errors: parseData.error.errors
            });
        }
        
        //haciendo peticion al servicio para actualizar usuario
        const userUpdated = await updateUserService(id, parseData.data);
        
        //mensaje de error si el usuario no existe
        if(!userUpdated){
            return res.status(404).json({
                message: "Usuario no encontrado"
            });
        }
        
        //mensaje de exito si el usuario existe y fue actualizado
        return res.status(200).json({
            message: "Usuario actualizado exitosamente",
            user: userUpdated
        });
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error interno del servidor"})
    }
}