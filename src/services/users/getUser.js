import { prisma } from "../../db.js";


export async function getUserService(id) {
    try {
        const user = await prisma.user.findFirst({
            where:{id: id}
        });
        
        return user;
    } 
    catch (error) {
        console.error(error);
        throw error;
    }
}