import About from '@/components/About'
import Hero from '@/components/Hero'
import Partner from '@/components/Partner'
import Product from '@/components/Product'
import Project from '@/components/Project'
import Solution from '@/components/Solution'

export default function Home() {
  return (
    <section className='py-10s'>
      <Hero />
      <div className='my-10 md:-mt-10'>
        <Solution />
      </div>
      <div className='my-10'>
        <About />
      </div>
      <div className='my-10'>
        <Product />
      </div>
      <div className='my-10'>
        <Project />
      </div>
      <div className='my-10'>
        <Partner />
      </div>
      <div className='my-32'></div>
    </section>
  )
}
