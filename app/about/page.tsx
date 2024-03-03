import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import React, { Fragment } from 'react'

export default function Page() {
  const teams = [
    {
      id: '19',
      name: 'Josie Dennis',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cecilia Wright'
    },
    {
      id: '55',
      name: 'Effie Lucas',
      image:
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Helen Spencer'
    },
    {
      id: '95',
      name: 'Justin Viola',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Christine Henry'
    },
    {
      id: '2',
      name: 'Rena Betty',
      image:
        'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Clara Ferguson'
    }
  ]
  return (
    <Fragment>
      <div className='relative bg-gradient-to-r from-black to-black'>
        <Image
          src='https://plus.unsplash.com/premium_photo-1678743133528-9afcd2b72b70?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='hero'
          width={1920}
          height={1080}
          className='h-40 w-full object-cover opacity-50 shadow-lg md:h-80'
        />
        <div className='container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform space-y-1 text-center text-white md:space-y-2 lg:space-y-7'>
          <h2 className='text-2xl font-extrabold duration-1000 md:text-4xl lg:text-6xl'>
            About Us
          </h2>
        </div>
      </div>

      <div className='container my-10'>
        <div className='container grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='my-auto space-y-3'>
            <div className='my-5 flex items-center'>
              <Button
                className='rounded-full text-2xl font-bold text-primary outline-primary'
                variant='outline'
                size='lg'
              >
                Why Choose Us
              </Button>
            </div>

            <h2 className='text-3xl font-bold'>
              We Are Here To Give You The Best
            </h2>
            <h3 className='text-2xl text-primary'>Solar Panel For Your Home</h3>
            <p className='text-gray-500'>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
              gravida. Risus commodo viverra maecenas accumsan.
            </p>
            <Card className='mb-3 border-none hover:shadow'>
              <CardHeader>
                <CardTitle className='text-xl font-light text-primary'>
                  Mission
                </CardTitle>
                <CardDescription>
                  Consectetur adipiscing elit sed do eiusmod tempor incididunt
                  ut labore et dolore mesureme aliquaum suspendisse ultrices
                  gravidisus .
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='mb-3 border-none hover:shadow'>
              <CardHeader>
                <CardTitle className='text-xl font-light text-primary'>
                  Vision
                </CardTitle>
                <CardDescription>
                  Consectetur adipiscing elit sed do eiusmod tempor incididunt
                  ut labore et dolore mesureme aliquaum suspendisse ultrices
                  gravidisus .
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Image
            src='https://kamleshyadav.com/wp/sunrays/home-one/wp-content/uploads/sites/2/2021/02/Image.png'
            alt='hero'
            width={300}
            height={200}
            className='my-auto h-[80%] w-full rounded-tl-xl rounded-tr-xl object-contain transition duration-500 ease-in-out hover:scale-105'
          />
        </div>
      </div>

      <div className='my-10'>
        <div className='text-center'>
          <Button
            className='rounded-full text-2xl font-bold text-primary outline-primary'
            variant='outline'
            size='lg'
          >
            Meet Our Experts
          </Button>
        </div>
        <div className='container grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4'>
          {teams.map(item => (
            <Card key={item.id} className='border-none shadow'>
              <CardHeader>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className='h-64 w-full scale-105 rounded-lg object-cover shadow duration-1000'
                />
              </CardHeader>
              <CardContent className='text-center'>
                <CardTitle className='text-xl'>{item.name}</CardTitle>
                <CardDescription className='mb-2'>{item.title}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
