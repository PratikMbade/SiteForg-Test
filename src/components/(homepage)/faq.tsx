import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQ1 = () => {
    const accordionData = [
        {
          value: 'item-1',
          triggerText: 'What do I get exactly?',
          contentText: 'You get a fully functional, customizable website boilerplate built with modern web technologies.'
        },
        {
          value: 'item-2',
          triggerText: 'JavaScript or TypeScript?',
          contentText: 'It’s built with TypeScript for strong type-checking and reliability.'
        },
        {
          value: 'item-3',
          triggerText: 'app router or pages router?',
          contentText: 'It uses the /app router for improved routing and performance.'
        },
        {
          value: 'item-4',
          triggerText: 'My tech stack is different, can I still use it?',
          contentText: 'Yes, ShipFast is highly adaptable and can work with various tech stacks.'
        },
        {
          value: 'item-5',
          triggerText: 'Is it a website template?',
          contentText: 'ShipFast is more than a template; it’s a fully-fledged website boilerplate with advanced features.'
        },
        {
          value: 'item-6',
          triggerText: 'How is ShipFast better than other boilerplates?',
          contentText: 'ShipFast offers optimized performance, scalability, and developer-friendly setup, making it stand out.'
        },
        {
          value: 'item-7',
          triggerText: 'Are there any other costs associated?',
          contentText: 'No, ShipFast is a one-time purchase with no additional fees.'
        },
        {
          value: 'item-8',
          triggerText: 'How often is ShipFast updated?',
          contentText: 'ShipFast is regularly updated with new features and improvements to ensure top performance.'
        },
        {
          value: 'item-9',
          triggerText: 'Can I get a refund?',
          contentText: 'Yes, we offer a 30-day money-back guarantee if you’re not satisfied.'
        },
        {
          value: 'item-10',
          triggerText: 'Can I use PayPal?',
          contentText: 'Yes, PayPal is accepted as a payment method.'
        }
      ];
      
  return (

         <div className='w-full  grid grid-cols-1  lg:grid-cols-2 gap-x-10  my-28'>
        
        <div className=' flex flex-col items-end  '>
            <p className='text-6xl font-bold  max-w-2xl text-center mt-10'>Frequently asked questions</p>

        </div>
        <div className=' '>
        <Accordion type="single" collapsible className="w-full lg:w-1/2 text-3xl mt-5">
        {accordionData.map(({ value, triggerText, contentText }) => (
      <AccordionItem key={value} value={value}>
        <AccordionTrigger className='text-xl'>{triggerText}</AccordionTrigger>
        <AccordionContent className='text-lg'>
          {contentText}
        </AccordionContent>
      </AccordionItem>
    ))}
    </Accordion>
        </div>
    </div>

   
  )
}

export default FAQ1