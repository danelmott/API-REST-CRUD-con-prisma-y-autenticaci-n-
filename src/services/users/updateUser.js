import { prisma } from "../../db.js";

export async function updateUserService(id, data){
    try {
        const isExists = await prisma.user.findUnique({
            where:{id:id}
        })
        if(!isExists){
            return null
        }
        
        const updatedUser = await prisma.user.update({
            where:{id:id},
            data
        })
        
        return updatedUser;
    } 
    catch (error) {
        console.error(error);
        throw error
    }
}