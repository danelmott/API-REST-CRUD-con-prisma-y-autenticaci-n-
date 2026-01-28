import z from 'zod';


export const createUserSchema = z.object({
    email : z.string().email(),
    password: z.string().min(5),
    rol : z.enum(["ADMIN","USER"]).optional()
});