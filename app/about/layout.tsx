import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Us | Rehubco'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-[80vh]'>
      {children}
      <Footer />
    </div>
  )
}
