import React from 'react'
import herobg from '../images/herosection/herobg.png'
import card1 from '../images/herosection/card1.png'
import card2 from '../images/herosection/card2.png'

const HeroSection = () => {
  return (
    <section id='hero' className='bg-[#FF5349] text-white min-h-[550px]  lg:max-h-[550px] max-md:h-[850px] max-lg:max-h-[900px] max-md:gap-8 py-10'>
      <div className='flex flex-row justify-center max-lg:flex-col max-lg:gap-10'>
        <div className='w-full select-none lg:max-h-[420px] flex flex-col  max-lg:gap-10 gap-5 lg:pl-20 py-5 lg:pr-2 max-lg:justify-center max-lg:items-center '>
          <div className='flex flex-col max-sm:text-4xl max-md:text-5xl text-6xl font-bold flex-nowrap max-sm:leading-12 max-lg:leading-15 items-start max-lg:items-center'>
            <h1 className='flex flex-nowrap '>Stay Connected</h1>
            <h1 className=' opacity-80'>Stay Social</h1>
            <h1 className='opacity-50'>Stay You!</h1>
          </div>
          <div className='flex flex-col text-lg max-sm:text-sm mx-auto max-lg:w-[80%] max-lg:text-center'>
            <p >A place where friendships grow, communities thrive, and moments turn into unforgettable experiences.
              Whether you're looking to reconnect with old friends,
              build new relationships, or share what matters most to you – MyBindle is your home on the internet.
            </p>
          </div>
          <div>
            <button className='bg-white text-xl px-5 py-2 rounded-lg font-semibold cursor-pointer duration-150 hover:scale-105 ease-in hover:border-2 hover:text-white hover:bg-[#ff5349] text-[#ff5349]'>Get Started</button>
          </div>
        </div>
        <div className='w-full'>
          <div className='lg:h-[600px] max-lg:h-[500px] relative max-md:h-[400px] flex z-10 justify-center'>
            <div className='absolute h-40 z-50 w-full left-0'>
            <img className='relative mx-auto max-md:right-20 right-30 top-10 max-md:max-h-[60px] h-20' src={card1} alt="" />
            </div>
            <div>
              <div className='bottom-20 absolute h-40 z-50 w-full left-0'>
            <img className='relative mx-auto left-20 top-10 max-md:max-h-[60px] max-h-20' src={card2} alt="" />
            </div>
            </div>
            <img className='h-full' src={herobg} alt="herobg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
