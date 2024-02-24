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
        <div className='my-5 flex items-center'>
          <h1 className='pr-2 text-center text-2xl font-bold text-primary/50 md:text-4xl'>
            About Us
          </h1>
          <hr className='flex-grow' />
        </div>

        <h2 className='text-3xl font-bold'>We Provide You</h2>
        <h3 className='text-2xl text-primary'>Sustainable Future of Energy</h3>
        <p className='text-gray-500'>
          In 2017, Renewable Energy Hub Company, or REHUBCO, commenced its
          operations in Hargeisa, Somaliland, expanding strategically into
          Somalia, Kenya, and Djibouti.{' '}
        </p>
        <p className='text-gray-500'>
          As a key player in the renewable energy sector, REHUBCO is a leading
          provider of solar photovoltaic solutions, offering a range of services
          from off-grid to on-grid solutions.{' '}
        </p>
        <p className='text-gray-500'>
          Our commitment to delivering top-quality green energy products and
          timely Engineering, Procurement, and Construction (EPC) services has
          solidified our position in the industry.
        </p>

        <Button>Read more</Button>
      </div>
    </div>
  )
}
