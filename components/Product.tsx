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
import Autoplay from 'embla-carousel-autoplay'

export default function Product() {
  const data = [
    {
      id: '1',
      name: 'Solar Panel',
      price: 100,
      image:
        'https://soleil.axiomthemes.com/wp-content/uploads/2022/11/product-image1-600x600.jpg'
    },
    {
      id: '2',
      name: 'Solar Inverter',
      price: 200,
      image:
        'https://soleil.axiomthemes.com/wp-content/uploads/2022/11/product-image8-600x600.jpg'
    },
    {
      id: '3',
      name: 'Solar Energy Bank',
      price: 300,
      image:
        'https://soleil.axiomthemes.com/wp-content/uploads/2022/11/product-image13-600x600.jpg'
    },
    {
      id: '4',
      name: 'Enphase Micro Inverter',
      price: 400,
      image:
        'https://soleil.axiomthemes.com/wp-content/uploads/2022/11/product-image8-600x600.jpg'
    },
    {
      id: '5',
      name: 'Blueplanet Grid-tied Inverter',
      price: 500,
      image:
        'https://soleil.axiomthemes.com/wp-content/uploads/2022/11/product-image9-600x600.jpg'
    },
    {
      id: '6',
      name: 'Eronet Solar Inverter',
      price: 600,
      image:
        'https://soleil.axiomthemes.com/wp-content/uploads/2022/11/product-image12-600x600.jpg'
    }
  ]
  return (
    <div className='containers px-4'>
      <h1 className='my-3 text-center text-2xl font-bold text-primary/50 md:text-4xl'>
        Trending Items
      </h1>
      <Carousel
        opts={{
          align: 'start',
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 2000
          })
        ]}
        className='mx-auto w-[70%] md:w-[90%]'
      >
        <CarouselContent>
          {data.map(product => (
            <CarouselItem
              key={product.id}
              className='sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4'
            >
              <Card className='border-none shadow-none'>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className='h-66 w-full rounded-tl-xl rounded-tr-xl object-contain transition duration-500 ease-in-out hover:scale-105'
                />

                <CardContent className='mt-3 text-center'>
                  <CardTitle className='mb-2 text-lg'>{product.name}</CardTitle>
                  <span className='text-md'>${product.price?.toFixed(2)}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
