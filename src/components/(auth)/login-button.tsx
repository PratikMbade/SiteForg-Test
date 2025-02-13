'use client';

import { useRouter } from "next/navigation";



interface LoginButtonProps {
    children:React.ReactNode;
    mode?:"modal"|"redirect";
    asChild?:boolean;
}


export const LoginButton = ({children,mode,asChild}:LoginButtonProps) =>{

    const router = useRouter()

    const onClick = () =>{
        router.push("/login")
    }


    if(mode === "redirect"){

        return(
            <span>
                TODO: modal
            </span>
        )

    }


    return(
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}