"use server"

import { auth } from "@/auth"
import { getUserByEmail } from "@/data/user";


export async function getUserinfo  (){
    try {
        const session = await auth();

        if(!session?.user?.email){
          return null;
        }

        const user = await getUserByEmail(session.user.email);

        return user
        
    } catch (error) {
        
        return null;
    }
}