import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa6'

export default function Footer() {
  return (
    <div className='bg-gray-700'>
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <Card className='border-none bg-transparent text-white shadow-none'>
            <CardContent className='grid grid-cols-1 flex-col items-center gap-2 p-4 md:flex-row'>
              <FaClock className='mx-auto text-3xl md:text-5xl' />
              <div className='mx-auto mt-3 w-full text-center'>
                <CardTitle className='mb-2 lg:text-xl'>
                  Operating Hours
                </CardTitle>
                <p className='leading-7'>
                  Monday - Friday 09.00 - 18.00 <br /> Saturday 09.00 - 14.00
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className='border-none bg-transparent text-white shadow-none'>
            <CardContent className='grid grid-cols-1 flex-col items-center gap-2 p-4 md:flex-row'>
              <FaPhone className='mx-auto text-3xl md:text-5xl' />
              <div className='mx-auto mt-3 w-full text-center'>
                <CardTitle className='mb-2 lg:text-xl'>
                  Call Us Anytime
                </CardTitle>
                <p className='leading-7'>
                  <a href='tel:(+91) 1800-214-122'>(+91) 1800-214-122</a> <br />
                  <a href='tel:(+91) 1800-214-122'>(+91) 1800-214-122</a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className='border-none bg-transparent text-white shadow-none'>
            <CardContent className='grid grid-cols-1 flex-col items-center gap-2 p-4 md:flex-row'>
              <FaEnvelope className='mx-auto text-3xl md:text-5xl' />
              <div className='mx-auto mt-3 w-full text-center'>
                <CardTitle className='mb-2 lg:text-xl'>Email Us</CardTitle>
                <p className='leading-7'>
                  <a href='mailto:info@rehubco.com'>info@rehubco.com</a> <br />
                  <a href='mailto:info@rehubco.com'>info@rehubco.com</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
