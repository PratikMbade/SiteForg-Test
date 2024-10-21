import { ExclamationTriangleIcon } from "@radix-ui/react-icons";


interface FormErrorProps{
    message?:string;
}


export const FormError = ({
    message,
}:FormErrorProps)=>{

    if(!message){
        return null;
    }


    return(
        <div className="bg-destructive/15 p-2 rounded-md flex items-center gap-x-3 tesm text-destructive">
            <ExclamationTriangleIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )

}