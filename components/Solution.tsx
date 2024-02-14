import React, { Fragment } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { FaSolarPanel } from 'react-icons/fa'

export default function Solution() {
  const data = [
    {
      id: '1',
      title: 'Solar Solutions',
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '2',
      title: 'Wind Turbine',
      image:
        'https://plus.unsplash.com/premium_photo-1671808063028-3a67407aeea7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '3',
      title: 'Renewable Energy',
      image:
        'https://images.unsplash.com/photo-1509390726584-faaa21c8ac95?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '4',
      title: 'Energy Transition',
      image:
        'https://images.unsplash.com/photo-1548613053-22087dd8edb8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  return (
    <Fragment>
      {/* <h1 className='absolute z-50 -mt-16 w-full text-center text-4xl font-bold text-secondary'>
        Our Company Solutions
      </h1> */}
      <div className='container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {data.map(item => (
          <Card
            key={item.id}
            className='z-50 overflow-hidden rounded-xl bg-white shadow-2xl'
          >
            <Image
              src={item.image}
              alt='hero'
              width={300}
              height={200}
              className='h-56 w-full rounded-tl-xl rounded-tr-xl object-cover transition duration-500 ease-in-out hover:scale-105'
            />

            <CardContent className='flex items-center justify-between'>
              <h5 className='mt-4 text-left'>{item.title}</h5>
              <FaSolarPanel className='text-end text-3xl text-primary' />
            </CardContent>
          </Card>
        ))}
      </div>
    </Fragment>
  )
}
