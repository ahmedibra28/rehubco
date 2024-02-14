import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { FaCheck } from 'react-icons/fa'

export default function About() {
  return (
    <div className='container grid grid-cols-1 gap-4 md:grid-cols-2'>
      <Image
        src='https://kamleshyadav.com/wp/sunrays/home-one/wp-content/uploads/sites/2/2021/02/Image.png'
        alt='hero'
        width={300}
        height={200}
        className='my-auto h-[80%] w-full rounded-tl-xl rounded-tr-xl object-contain transition duration-500 ease-in-out hover:scale-105'
      />
      <div className='my-auto space-y-3'>
        <div className='flex items-center gap-x-3'>
          <h1 className='text-xl font-bold text-primary/50'>About Us</h1>
          <hr className='w-44' />
        </div>
        <h2 className='text-3xl font-bold'>We Provide You</h2>
        <h3 className='text-2xl text-primary'>Sustainable Future of Energy</h3>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad
          blanditiis ipsam quas, aspernatur, atque numquam, esse dolorem porro
          rerum fugiat! Repellat exercitationem facilis quis laborum sit libero
          iure eius?
        </p>
        <ul className='ml-3 space-y-1 py-2 text-gray-500'>
          {[1, 2, 3, 4].map(item => (
            <li key={item} className='flex items-center justify-start gap-2'>
              <FaCheck className='text-primary' />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                tenetur?
              </span>
            </li>
          ))}
        </ul>
        <Button>Read more</Button>
      </div>
    </div>
  )
}
