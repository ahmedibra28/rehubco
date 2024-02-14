import React, { Fragment } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { FaSolarPanel } from 'react-icons/fa'

export default function Solution() {
  return (
    <Fragment>
      {/* <h1 className='absolute z-50 -mt-16 w-full text-center text-4xl font-bold text-secondary'>
        Our Company Solutions
      </h1> */}
      <div className='container grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
        {[1, 2, 3, 4].map(i => (
          <Card
            key={i}
            className='z-50 overflow-hidden rounded-xl bg-white shadow-2xl'
          >
            <Image
              src='https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-trees-and-wind-power-as-a-base-image_2975045.jpg'
              alt='hero'
              width={300}
              height={200}
              className='w-full rounded-tl-xl rounded-tr-xl transition duration-500 ease-in-out hover:scale-105'
            />

            <CardContent className='flex items-center justify-between'>
              <h5 className='text-left font-bold'>Solar Solutions</h5>
              <FaSolarPanel className='text-end text-3xl text-primary' />
            </CardContent>
          </Card>
        ))}
      </div>
    </Fragment>
  )
}
