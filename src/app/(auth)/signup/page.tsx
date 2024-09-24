'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

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
    <div className="flex items-center justify-center border min-h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center space-y-2">
          <p className="text-4xl font-bold max-w-xl">
            {" "}
            Join millions worldwide who automate their work using RD.
          </p>
          <p className="flex items-center justify-center">
            <FaCheckCircle className="text-green-600" /> Easy setup, no coding
            required
          </p>
          <p className="flex items-center justify-center">
            <FaCheckCircle className="text-green-600" />
            Free forever for core features
          </p>
          <p className="flex items-center justify-center">
            <FaCheckCircle className="text-green-600" />
            14-day trial of premium features & apps
          </p>
        </div>

        <div className="h-auto">
          <div className="border flex flex-col items-center justify-center space-y-4 h-auto py-9 w-auto">
            <button className="bg-blue-500 px-14 py-2 rounded-lg font-medium ">
              Continue with google
            </button>

            <div>
              <div>
                <p className="text-center mb-3">OR</p>
              </div>
              <div className="flex w-full flex-col items-start justify-center  space-y-2">
               <form action="" onSubmit={signupHandler}>
               <Label>name</Label>
                <Input type="name" placeholder="name" className="" name="name" onChange={(e)=>setUserDetails({...userDetail,name:e.target.value})}/>
                <Label>Email</Label>
                <Input type="email" placeholder="Email" className="" name="username" onChange={(e)=>setUserDetails({...userDetail,useranme:e.target.value})}/>
                <Label>Password</Label>
                <Input type="Password" placeholder="Password" className="" onChange={(e)=>setUserDetails({...userDetail,password:e.target.value})}/>

                <Button
                  className="w-72 bg-orange-500 px-6 py-2 rounded-lg font-medium mt-5"
                  type="submit"
                >
                  Continue
                </Button>
               </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
