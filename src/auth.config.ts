import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { LoginSchema } from "@/schema"
import { getUserByEmail } from "./data/user";
import Google from "next-auth/providers/google";

export default {
    providers:[
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            async authorize (credentials){
                const validatedFields = LoginSchema.safeParse(credentials);

                if(validatedFields.success) {
                    const {email,password} =validatedFields.data;
                    
                    const user = await getUserByEmail(email);
                    if(!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(password,user.password);
                    if(passwordsMatch) return user;
                }

                return null;
            }
        })
    ],
    debug: true,
} satisfies NextAuthConfig