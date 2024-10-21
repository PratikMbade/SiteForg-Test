"use server"
import * as z from 'zod'
import { LoginSchema } from "@/schema"

import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'
import { Scaling } from 'lucide-react'


export const login = async (values:z.infer<typeof LoginSchema>)=>{

    const validatedFields = LoginSchema.safeParse(values)

    if(!validatedFields.success){
        return {error:"Invalid fields!"}

    }

    console.log("request got")

    const  {email,password} = validatedFields.data;

    try {
        const result = await signIn("credentials", {
            email,
            password,
            redirectTo:DEFAULT_LOGIN_REDIRECT // Prevent NextAuth from redirecting automatically
        });

        if(result){
            return {success:"logged in "}
        }
        
     

    } catch (error) {
        if(error instanceof AuthError){
            console.log("error",error)

        
            switch(error.type){
                case "CredentialsSignin":
                    return {error:"Invalid credentials"}
                default:
                    return {error: "Something went wrong!"}
            }

        }
  
        throw error

    }

    // const exitingUser = await db.user.findUnique({
    //     where:{
    //         email
    //     }
    // })

    // if(!exitingUser){
    //     return {error:"User not registered,Please do registration"}
    // }

    // const isMatched = await bcrypt.compare(password,exitingUser.password!);

    // if(!isMatched){
    //     return {error:"Incorrect Password!"}
    // }

    // return {success:"Logged In!"}

}