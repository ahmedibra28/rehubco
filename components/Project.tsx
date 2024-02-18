'use client'
import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Project() {
  const data = [
    {
      id: '1',
      name: 'Solar Panel',
      description:
        'Solar Panel is a device that converts solar energy into electric energy.',
      image:
        'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '2',
      name: 'Solar Inverter',
      description:
        'Solar Inverter is a device that converts direct current (DC) electricity to alternating current (AC) electricity.',
      image:
        'https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: '3',
      name: 'Solar Energy Bank',
      description:
        'Solar Energy Bank is a device that stores solar energy for later use.',
      image:
        'https://images.unsplash.com/flagged/photo-1566838634584-c541648798ab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  const [visible, setVisible] = React.useState('')

  return (
    <div className='containers px-4'>
      <div className='mx-auto mb-3 max-w-3xl'>
        <h1 className='my-3 text-center text-2xl font-bold text-primary/50 md:text-4xl'>
          Our Projects
        </h1>
        <p className='text-center'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure tenetur
          assumenda, magnam molestias voluptatibus dicta rem placeat vero velit
          excepturi iste eligendi exercitationem amet numquam temporibus ullam.
          Cum, harum neque?
        </p>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        className='mx-auto w-[70%] md:w-[90%]'
      >
        <CarouselContent>
          {data.map(product => (
            <CarouselItem key={product.id} className='basis-1 p-4 md:basis-1/2'>
              <Card
                onTouchMove={() => setVisible(product.id)}
                onTouchEnd={() => setVisible('')}
                onMouseEnter={() => setVisible(product.id)}
                onMouseLeave={() => setVisible('')}
                className='relative border-none shadow-none'
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className='h-[40rem] w-full rounded-xl object-cover transition duration-500 ease-in-out hover:scale-105'
                />

                <CardContent
                  className={`${visible === product.id ? '' : 'hidden'} absolute bottom-10 left-1/2 z-50 mt-3 w-full -translate-x-1/2 -translate-y-1/2 transform text-center text-white`}
                >
                  <CardTitle className='to-danger mb-2 bg-gradient-to-b from-gray-100 to-primary bg-clip-text text-transparent md:text-xl lg:text-5xl'>
                    <Link href='/'> {product.name}</Link>
                  </CardTitle>
                  <p className='to-danger mb-2 bg-gradient-to-b from-gray-100 to-primary bg-clip-text text-transparent'>
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className='text-end md:right-10'>
        <Button variant='link' className='mx-auto mt-10 underline'>
          View All Projects
        </Button>
      </div>
    </div>
  )
}
