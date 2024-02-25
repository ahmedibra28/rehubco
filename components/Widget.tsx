import React from 'react'
import { Button } from '@/components/ui/button'

export default function Widget() {
  return (
    <div className='bg-primary'>
      <div className='container mx-auto h-52 px-4'>
        <div className='flex h-full items-center justify-between text-white'>
          <h2 className='text-lg font-bold md:text-3xl'>
            Power Your Home or Business with <b>Rehubco Energey</b>
          </h2>
          <Button
            className='rounded-full bg-transparent outline-white'
            variant='outline'
          >
            Estimate Cost
          </Button>
        </div>
      </div>
    </div>
  )
}
