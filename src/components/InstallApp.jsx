import React, { useState } from 'react'

const InstallApp = ({id}) => {
  const [color, setcolor] = useState(1)
    const CardsData = [
    {
      id: 1,
      title: "Download",
      discription: "Open Play Store or App Store"
    },
    {
      id: 2,
      title: "Install App ",
      discription: "The app will install automatically."
    },
    {
      id: 3,
      title: "Ready to Use",
      discription: "Sign up or log in to start exploring!"
    },

  ]
  return (
    <>
      <section id='install' className='mt-40'>
        <div className='flex flex-col justify-center items-center gap-15 mx-10' >
          <h1 className='max-sm:text-4xl max-md:text-5xl max-sm:text-center text-6xl font-bold'>How to Install Our App</h1>
          <p className='text-lg text-center max-sm:text-sm font-semibold'>Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.</p>
          <div className='flex flex-row justify-between items-center gap-5 text-2xl font-bold max-sm:w-full max-md:w-xl w-2xl' >
            <p className={`${color === 1 ? 'text-[#FF5349]' : 'text-black'}`}>01</p>
            <hr className='text-slate-400 border-1 w-full' />
            <p className={`${color === 2 ? 'text-[#FF5349]' : 'text-black'}`}>02</p>
            <hr className='text-slate-400 border-1 w-full' />
            <p className={`${color === 3 ? 'text-[#FF5349]' : 'text-black'}`}>03</p>
            </div>
            <div className='flex flex-row gap-5 flex-wrap justify-center'>
              {CardsData.map((item,i) => (
            <div key={i} onClick={() => setcolor(item.id)} className='flex flex-col cursor-pointer gap-5 items-center justify-center border-4 duration-200 hover:-translate-y-2 hover:-translate-x-2 h-30 lg:w-80 md:w-80 sm:w-80 max-sm:min-w-60 max-sm:p-5 px-10 rounded-2xl shadow-[10px_10px_17px_0px_#d1d1d1]'>
              <h1 className='text-2xl text-center font-bold text-shadow-lg'>{item.title}</h1>
              <p className='text-center font-semibold'>{item.discription}</p>
            </div>
            ))}
            </div>
          
        </div>
      </section>
    </>
  )
}

export default InstallApp
