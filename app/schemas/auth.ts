import { z } from 'zod'

export const RegisterSchema = z.object({
    name: z.string("name is requirded").min(2).max(30),
    email: z.string("email is required"),
    password: z.string("password is required").min(6).max(14)
})