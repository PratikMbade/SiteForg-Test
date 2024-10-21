import { db } from "@/db/db"


export const getVerificationTokenByEmail = async (email:string)=>{
    try {
        const verificaitonToken = await db.verificationToken.findFirst({
            where:{email}
        })

        return verificaitonToken;
    } catch (error) {
        return null;
    }
}

export const getVerificationTokenByToken = async (token:string)=>{
    try {
        const verificaitonToken = await db.verificationToken.findFirst({
            where:{token}
        }) 

        return verificaitonToken;
    } catch (error) {
        return null;
    }
}