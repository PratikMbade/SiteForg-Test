"use server"
import * as z from 'zod'
import { RegisterSchema } from "@/schema"
import { db } from '@/db/db'
import bcrypt from "bcryptjs";


export const signup = async (values:z.infer<typeof RegisterSchema>)=>{

    const validatedFields = RegisterSchema.safeParse(values)

    if(!validatedFields.success){
        return {error:"Invalid fields!"}
    }
    const {name,email,password} = validatedFields.data;

    const exitingUser = await db.user.findUnique({
        where:{
            email
        }
    });

    if(exitingUser){
        return{error:"Email already is use!"}
    }

    const hashedPassword = await bcrypt.hash(password,10);

    await db.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    });



    return {success:"User Registered!"}
}