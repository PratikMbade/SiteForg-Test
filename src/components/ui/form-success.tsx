import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CornerUpLeftIcon } from "lucide-react";


interface FormSuccessProps{
    message?:string;
}


export const FormSuccess = ({
    message,
}:FormSuccessProps)=>{

    if(!message){
        return null;
    }


    return(
        <div className="bg-green-200/45 p-2 rounded-md flex items-center gap-x-3 tesm text-green-500">
            <CornerUpLeftIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )

}