import * as z from "zod"


export const LoginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(1,{
        message:"Password is required"
    })
})

export const RegisterSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6,{
        message:"Password length must be greater than 6"
    }),
    name:z.string().min(1,{
        message:"name is required"
    })
})