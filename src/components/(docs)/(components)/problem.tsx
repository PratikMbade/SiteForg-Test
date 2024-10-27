'use client'
import { Brain, Shield, Zap } from 'lucide-react'
import React from 'react'

const data = [
    {
        id:1,
        icon:<Brain/>,
        heading:"Data Overload",
        description:"Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation."
    },
    {
        id:2,
        icon:<Zap/>,
        heading:"Data Overload",
        description:"Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation."
    },
    {
        id:3,
        icon:<Shield/>,
        heading:"Data Overload",
        description:"Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation."
    },
]

const ProblemPage = () => {
  return (
    <div className='my-3'>
        <div>
            <p className='text-center teext-md lg:text-xl font-semibold my-2'>Problem</p>
        </div>

        <div>
            <p className='text-center font-semibold text-xl lg:text-3xl my-2'>Manually entering your data is a hassle.</p>
        </div>

        <div className='flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row items-center justify-center gap-x-3' >
         {
            data.map((item,index)=>(

                 <ProblemCards
                key={index}
                id={item.id}
                icon={item.icon}
                heading={item.heading}
                description={item.description}
                />

            ))
         }
        </div>


    </div>
  )
}

export const ProblemCards = ({icon,heading,description}:any) =>{

    return(
        <div className='border w-fit px-4 py-4 rounded-sm'>
            <div className='bg-slate-400 bg-opacity-50 rounded-full w-fit p-2 '>
                <p className='m-1'> {icon}</p>
            </div>
            <div>
                <p className='font-semibold'>{heading}</p>
            </div>
            <div className='max-w-56 text-muted-foreground/70'>
               {description}
            </div>
        </div>
    )

}

export default ProblemPage