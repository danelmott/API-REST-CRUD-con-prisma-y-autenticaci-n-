import z from 'zod';


export const createUserSchema = z.object({
    name: z.string().min(1).max(100),
    email : z.string().email(),
    password: z.string().min(5),
    rol : z.enum(["ADMIN","USER"]).optional()
});