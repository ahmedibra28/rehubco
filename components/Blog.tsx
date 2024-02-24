import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Blog() {
  return (
    <div className='container px-4'>
      <div className='my-5 flex items-center'>
        <hr className='flex-grow' />
        <h1 className='px-2 text-center text-2xl font-bold text-primary/50 md:text-4xl'>
          Latest News
        </h1>
        <hr className='flex-grow' />
      </div>

      <div className='grid grid-cols-1 gap-4 gap-y-32 p-4 md:grid-cols-2 lg:grid-cols-4'>
        {[1, 2, 3, 4].map(item => (
          <Card key={item} className='border-none shadow'>
            <CardHeader>
              <Image
                src='https://images.unsplash.com/photo-1601158935942-52255782d322?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='partner'
                width={200}
                height={200}
                className='h-44 w-full scale-105 rounded-lg object-cover shadow duration-1000'
              />
            </CardHeader>
            <CardContent>
              <CardTitle className='text-xl'>Solar Wind Energy</CardTitle>
              <CardDescription className='mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
              <span className='text-xs text-gray-400'>
                {new Date().toISOString()}
              </span>
            </CardContent>
            <CardFooter className='text-gray-500'>
              <Button className='w-full' variant='outline'>
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
