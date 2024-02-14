import About from '@/components/About'
import Hero from '@/components/Hero'
import Solution from '@/components/Solution'

export default function Home() {
  return (
    <section className='py-10s'>
      <Hero />
      <div className='my-10 md:-mt-10'>
        <Solution />
      </div>
      <div className=''>
        <About />
      </div>
      <div className='my-32'></div>
    </section>
  )
}
