'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}
interface UserType{

  useranme:string;
  password:string;
}



function Login({}: Props) {

  const [userDetail,setUserDetails] = useState<UserType>({

    useranme:"",
    password:""
  });
  
  const router = useRouter()


  const signinHandler =async (e:any) =>{
   e.preventDefault();

   try {

    const res = await axios.post(`http://localhost:4000/api/user/signin`,{

      username:userDetail.useranme,
      
      password:userDetail.password

    })

    if(res.data){
      console.log("res data ",res.data)
      localStorage.setItem("token",res.data.token)
      router.push('/dashboard')
    }
    
   } catch (error) {
    console.log("somethign went wrong")
   }

  }

  useEffect(()=>{
     console.log("user info",userDetail)
  },[userDetail])
  return (
    <div  className='flex items-center justify-center border min-h-screen '>

     <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='flex flex-col items-start justify-center'>
        <p className='text-4xl font-bold'> Automate across your teams</p>
        <p className='max-w-xl my-2 font-semibold'>RD Enterprise empowers everyone in your business to securely automate their work in minutes, not months—no coding required.</p>
        <button className='bg-orange-500 px-6 py-2 rounded-lg font-medium'>Enable RD Enterprise</button>
      </div>


      <div className='h-auto'>
        <div className='border flex flex-col items-center justify-center space-y-4 h-auto py-9 w-auto'>
          <button className='bg-blue-500 px-14 py-2 rounded-lg font-medium '>Continue with google</button>
          <button className='bg-blue-700 px-12 py-2 rounded-lg font-medium'>Continue with facebook</button>
          <button className='bg-black text-white px-12 py-2 rounded-lg font-medium'>Continue with Microsoft</button>
           
          <div>
            <div> 
              <p className='text-center mb-3'>OR</p>
            </div>
          <div className="flex w-full flex-col items-start justify-center  space-y-2">
         <form action="" onSubmit={signinHandler}>
         <Label >Email</Label>
      <Input type="email" placeholder="Email" className='' onChange={(e)=>setUserDetails({...userDetail,useranme:e.target.value})}/>
      <Label>Password</Label>
      <Input type="Password" placeholder="Password" className='' onChange={(e)=>setUserDetails({...userDetail,password:e.target.value})}/>
      
      <Button className='w-72 bg-orange-500 px-6 py-2 rounded-lg font-medium mt-5' type="submit" >Continue</Button>
         </form>
    </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Login