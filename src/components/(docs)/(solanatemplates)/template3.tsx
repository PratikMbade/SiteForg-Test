

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Template3 = () => {
  return (
    <div>

      <div>
        <Button size="lg" className='my-3'>
          Preview
        </Button>
      </div>

        <Image
         src="/Template3.png"
         alt='TemplateImg'
         height={700}
         width={700}
         className='border rounded-xl'
        />
    </div>
  )
}

export default Template3