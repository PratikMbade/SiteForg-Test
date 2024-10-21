import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import authConfig from "@/auth.config";
import { db } from "./db/db";

export const {
  handlers:{GET,POST},
  auth,
  signIn,
  signOut
} = NextAuth({
  pages:{
    signIn:"/login",
    error:"/errorpage"
  },
  callbacks:{
    async session({token,session}){
        if(token.sub && session.user){
          session.user.id  = token.sub
        }
        console.log({session:session})
        return session
    },
    async jwt({token}){
      console.log({token});
      return token
    }
  },
  adapter:PrismaAdapter(db),
  session:{strategy:"jwt"},
  ...authConfig
}) 