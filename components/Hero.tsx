import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className='relative bg-gradient-to-r from-black to-black'>
      <Image
        src='https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-sustainable-energy-in-a-digital-world-3d-render-of-clean-energy-image_3615184.jpg'
        alt='hero'
        width={1920}
        height={1080}
        className='w-full object-cover opacity-50 shadow-lg lg:h-[90vh]'
      />
      <div className='container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform space-y-1 text-center text-white md:space-y-2 lg:space-y-7'>
        <h1 className='text-xs duration-1000 md:text-lg'>
          Complete Commercial, Residential & Industrial Solar Systems
        </h1>
        <h2 className='text-3xl font-extrabold duration-1000 md:text-5xl lg:text-8xl'>
          Shaping Future Of Solar Energy!
        </h2>
        <p className='hidden justify-center text-center duration-1000 lg:flex'>
          As a world wide distributor of solar supplies we endeavor to provide
          fast and knowledgeable service, we can get you materials by sea or
          air.
        </p>
      </div>

      <div>
        <Button
          className='absolute bottom-5 right-5 animate-bounce spin-in-1 md:bottom-16'
          size='lg'
        >
          <FaArrowRight className='mr-2' />
          Get Quote
        </Button>
      </div>
    </div>
  )
}
