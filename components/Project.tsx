'use client'
import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Project() {
  const data = [
    {
      id: '1',
      name: 'Solar Panel',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates deleniti facere eaque quisquam nesciunt modi nisi nobis eos ratione exercitationem officia, omnis nostrum ducimus obcaecati optio. Nam provident placeat est.
        Sapiente aut odio modi nemo quas illo, repudiandae earum quis consequuntur iusto dolorem provident qui dolores sint inventore tempora maxime. Vero consectetur officiis ratione molestias doloribus doloremque repudiandae iure accusamus!`,
      image:
        'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  return (
    <div className='container px-4'>
      <div className='my-5 flex items-center'>
        <hr className='flex-grow' />
        <h1 className='px-2 text-center text-2xl font-bold text-primary/50 md:text-4xl'>
          Our Projects
        </h1>
        <hr className='flex-grow' />
      </div>
      <div className='mx-auto mb-3 max-w-3xl'>
        <p className='text-center'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure tenetur
          assumenda, magnam molestias voluptatibus dicta rem placeat vero velit
          excepturi iste eligendi exercitationem amet numquam temporibus ullam.
          Cum, harum neque?
        </p>
      </div>

      <Card className='border-none shadow-none'>
        <CardContent className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <Image
            src={data[0].image}
            alt={data[0].name}
            width={300}
            height={200}
            className='my-auto h-72 w-full rounded-xl object-cover transition duration-500 ease-in-out hover:scale-105 md:h-96 lg:h-[28rem]'
          />

          <div className='mx-auto mt-3 w-full'>
            <CardTitle className='md:text-xl lg:text-5xl'>
              <Link href='/'> {data[0].name}</Link>
            </CardTitle>
            <p className='leading-7 text-gray-500'>{data[0].description}</p>
          </div>
        </CardContent>
      </Card>

      <div className='container text-end md:right-10'>
        <Button variant='outline' className='mx-auto mt-10'>
          View All Projects
        </Button>
      </div>
    </div>
  )
}
