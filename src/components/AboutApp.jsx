import React from 'react'
import rotateleft from '../images/aboutsection/rotateleft.png'
import rotateright from '../images/aboutsection/rotateright.png'

const AboutApp = () => {
  

  const CardsData = [
    {
      title: "🎥 Short Videos & Reels",
      discription: "Share engaging, bite-sized content that keeps everyone entertained."
    },
    {
      title: "🔔 Smart Notifications",
      discription: "Stay updated on what matters without the noise."
    },
    {
      title: "👥 Interest-Based Communities",
      discription: "Join groups and discussions that match your passion."
    },

  ]
  return (
    <>
      <section id='about' className='mt-30 max-sm:mt-20 lg-h-[550px] mx-10'>
        <div className='flex flex-row max-lg:flex-col max-lg:gap-40'>
          <div className='w-full flex justify-center items-center'>
            <div className={`lg:w-100 lg:h-100 max-sm:h-72 max-sm:w-72 max-lg:h-80 max-lg:w-80 top-10 relative rounded-full bg-[#FF5349]`}>
              <div className='absolute -bottom-5 max-lg:-left-8 lg:-left-10 w-80 h-80 lg:w-120 sm:h-100 sm:w-100 md:h-100 md:w-100 lg:h-120'>
                <img className='relative h-full' src={rotateleft} alt="" />
              </div>
              <div className='absolute bottom-30 left-20 h-60 w-60 sm:h-80 sm:w-80 md:h-80 md:w-80 lg:h-100 lg:w-100 '>
                <img className='relative top-5' src={rotateright} alt="" />
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className='flex flex-col gap-10 px-5'>
              <h1 className='max-sm:text-4xl max-md:text-5xl text-6xl font-bold max-sm:text-center' >Where Every Click Sparks a Connection!</h1>
              <p className='text-lg max-sm:text-sm font-semibold max-sm:text-center'>A small act of kindness today can create a lifetime of
                impact for someone in need. Give from the heart and change a life!
              </p>
              <div className='flex flex-col gap-3'>
                {CardsData.map((item,i) => (
                <div key={i} className='flex min-h-40 py-5 cursor-pointer justify-center gap-5 flex-col max-sm:px-3 px-5 duration-200 rounded-2xl border-4 hover:-translate-y-2 hover:-translate-x-2 shadow-[10px_10px_17px_0px_#d1d1d1]'>
                  <h1 className='text-2xl font-bold text-shadow-lg max-sm:text-center'>{item.title}</h1>
                  <p className='font-semibold max-sm:text-center'>{item.discription}</p>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutApp
