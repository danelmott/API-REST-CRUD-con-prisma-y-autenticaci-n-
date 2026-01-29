import { prisma } from "../../db.js";

export async function searchUserService(identifier){
    try{
        const user = await prisma.user.findFirst({
            where:{
                OR:[
                    {email: identifier},
                    {name: identifier}
                ]
            }        
        });
        
        return user
    }
    catch(error){
        console.error(error);
        throw error
    }
}