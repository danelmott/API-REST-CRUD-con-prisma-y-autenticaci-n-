import { prisma } from "../../db.js";

export async function searchUserService(email){
    try{
        const user = await prisma.user.findFirst({
            where:{email: email}        
        })
        return user
    }
    catch(error){
        console.error(error);
        throw error
    }
}