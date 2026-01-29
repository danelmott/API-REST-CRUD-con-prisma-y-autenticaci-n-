import { prisma } from '../../db.js';
import bcrypt from 'bcrypt';


//servicio 
export async function createUserService(data){
    try {
        //encriptando la contraseña
        const passwordHashed = await bcrypt.hash(data.password, 10);
        
        //asi no se retorna ni las contraseñas de los usuarios
        const user = await prisma.user.create({
            data:{
                ...data,
                password: passwordHashed
            },
            select:{
                id: true,
                name: true,
                email: true,
                rol: true
            }
            
        });
        
        return user
    } 
    catch (error) {
        console.error(error);
        const isDuplicate = error.code === "P2002" || error.code === "23505";
        
        isDuplicate
        ? error.message = 'el email o el name del usuario ya estan en la base de datos'
        : error.message = 'Error al intentar crear el usuario'
        
        throw error
    }
}