

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Template4 = () => {
  return (
    <div>

      <div>
        <Button size="lg" className='my-3'>
          Preview
        </Button>
      </div>

        <Image
         src="/Template1.png"
         alt='TemplateImg'
         height={700}
         width={700}
         className='border roundx'
        />
    </div>
  )
}

export default Template4