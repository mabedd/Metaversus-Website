'use client'

import { useRef } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Explore from '../components/Explore'
import Feedback from '../components/Feedback'
import GetStarted from '../components/GetStarted'
import Banner from '../components/Banner'
import Insights from '../components/Insights'
import WhatsNew from '../components/WhatsNew'
import World from '../components/World'

export default function Home() {
  const exploreRef = useRef<HTMLDivElement | null>(null)

  const onStampClicked = (): void => {
    exploreRef.current &&
      exploreRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='bg-gray-900 overflow-hidden'>
      <Navbar />
      <Banner onStampClicked={onStampClicked} />
      <div className='relative'>
        <About />
        <div className='gradient-03 z-0' />
        <div ref={exploreRef}>
          <Explore />
        </div>
      </div>
      <div className='relative'>
        <GetStarted />
        <div className='gradient-04 z-0' />
        <WhatsNew />
      </div>
      <World />
      <div className='relative'>
        <Insights />
        <div className='gradient-04 z-0' />
        <Feedback onStampClicked={onStampClicked} />
      </div>
      <Footer />
    </div>
  )
}
