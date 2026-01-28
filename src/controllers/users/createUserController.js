import { createUserService } from '../../services/users/createUser.js';
import { createUserSchema } from '../../utils/validators/createUserSchema.js';


//controller para crear usuarios
export default async function createUserController(req, res){
    try {
        // Validar el body con Zod
        const parseData = createUserSchema.safeParse(req.body);
        
        if (!parseData.success) {
            return res.status(400).json({
                message: "Datos inválidos",
                errors: parseData.error.errors
            });
        }
        
        // Llamar al servicio con los datos validados
        const user = await createUserService(parseData.data);
        return res.status(201).json(user);
    } 
    catch (error) {
        console.error(error);
        return res.status(500).json({message: "Error interno del servidor"})
    }
}