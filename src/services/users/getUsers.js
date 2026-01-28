import { prisma } from "../../db.js";

export async function getUsersService(){
    try {
        const users = await prisma.user.findMany();
        
        return users;
        
    } catch (error) {
        console.error(error);
        throw error;
    }
}