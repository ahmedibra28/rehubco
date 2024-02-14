import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div className='relative rounded-lg bg-gradient-to-r from-black to-black'>
      <Image
        src='https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-sustainable-energy-in-a-digital-world-3d-render-of-clean-energy-image_3615184.jpg'
        alt='hero'
        width={1920}
        height={1080}
        className='w-full rounded-lg object-cover opacity-50 shadow-lg lg:h-[45rem]'
      />
      <div className='absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 transform space-y-1 text-white md:space-y-2 lg:space-y-3'>
        <h1 className='duration-1000 md:text-xl'>
          It&apos;s new day for solar power
        </h1>
        <h2 className='text-2xl font-extrabold duration-1000 sm:text-3xl md:text-5xl lg:text-7xl'>
          Soleil. Powerful for shop of solar panel
        </h2>
      </div>

      <Button className='absolute bottom-5 left-1/2 -translate-x-1/2'>
        Get Quote
      </Button>
    </div>
  )
}
