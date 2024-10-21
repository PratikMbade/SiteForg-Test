'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { SingupForm } from '../../../components/(auth)/signup-form';

type Props = {};

interface UserType{
  name:string;
  useranme:string;
  password:string;
}

function Signup({}: Props) {

  const [userDetail,setUserDetails] = useState<UserType>({
    name:"",
    useranme:"",
    password:""
  });

  const router = useRouter()



  const signupHandler =async (e:any) =>{
   e.preventDefault();

   try {

    const res = await axios.post(`http://localhost:4000/api/user/signup`,{
      name:userDetail.name,
      username:userDetail.useranme,
      password:userDetail.password
    })

    if(res.data){
      console.log("res data ",res.data)
      router.push('/login')
    }
    
   } catch (error) {
    console.log("somethign went wrong")
   }

  }

  useEffect(()=>{
     console.log("user info",userDetail)
  },[userDetail])


  return (
 <div>
  <SingupForm/>
 </div>
  );
}

export default Signup;
