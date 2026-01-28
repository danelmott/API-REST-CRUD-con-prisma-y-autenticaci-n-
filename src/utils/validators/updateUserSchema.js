import z from 'zod';


export const updateUserSchema = z.object({
    email: z.string().email().optional(),
    password: z.string().min(5).optional(),
    rol: z.enum(["ADMIN","USER"]).optional()
})

