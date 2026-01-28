import { prisma } from "../../db.js";

export async function deleteUserService(id){
    try{
        //verficando que el usuario exista
        const isExists = await prisma.user.findUnique({
            where:{id:id}
        });
        
        if(!isExists){
            return null;
        }
        
        // Borrando usuario
        const deletedUser = await prisma.user.delete({
            where: { id: id }
        });
        
        return deletedUser;
        
    }
    catch(error){
        console.error(error);
        throw error;
    }
}