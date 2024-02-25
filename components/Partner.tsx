import Image from 'next/image'
import React from 'react'

export default function Partner() {
  return (
    <div className='container px-4'>
      <div className='my-5 flex items-center'>
        <hr className='flex-grow' />
        <h1 className='px-2 text-center text-2xl font-bold text-primary/50 md:text-4xl'>
          Partners
        </h1>
        <hr className='flex-grow' />
      </div>

      <div className='grid grid-cols-2 gap-4 p-4 lg:grid-cols-4'>
        <picture className='mx-auto size-44'>
          <Image
            src='https://images.unsplash.com/photo-1601158935942-52255782d322?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='partner'
            width={200}
            height={200}
            className='mx-auto h-44 rounded-lg object-cover shadow'
          />
        </picture>
        <picture className='mx-auto size-44'>
          <Image
            src='https://images.unsplash.com/photo-1572094382897-21abe88fb269?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='partner'
            width={200}
            height={200}
            className='mx-auto h-44 rounded-lg object-cover shadow'
          />
        </picture>
        <picture className='mx-auto size-44'>
          <Image
            src='https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='partner'
            width={200}
            height={200}
            className='mx-auto h-44 rounded-lg object-cover shadow'
          />
        </picture>
        <picture className='mx-auto size-44'>
          <Image
            src='https://images.unsplash.com/photo-1553835973-dec43bfddbeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='partner'
            width={200}
            height={200}
            className='mx-auto h-44 rounded-lg object-cover shadow'
          />
        </picture>
      </div>
    </div>
  )
}
