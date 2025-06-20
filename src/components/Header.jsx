import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <>
    <header id='header'>
      <nav className='flex flex-row flex-nowrap justify-center select-none gap-2 items-center max-sm:h-15 text-white max-sm:text-xl text-2xl font-bold h-20 bg-[#FF5349]'>
        <div className='h-10 max-sm:h-8 cursor-pointer'>
          <img className='h-full' src={logo} alt="logo" />
        </div>
        <div className='cursor-pointer'>Mybindle</div>
      </nav>
    </header>
    </>
  )
}

export default Header
