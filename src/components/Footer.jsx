import React, { useEffect, useState } from 'react'
import image1 from '../images/footer/image1.png'
import image2 from '../images/footer/image2.png'
import apple from '../images/footer/apple.png'
import playstore from '../images/footer/googleplay.png'

const Footer = () => {
  const [Cwidth, setCwidth] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setCwidth(width <= 1180);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section
      id="donate"
      className={`bg-[#FF5349] relative z-20 max-sm:mx-0 overflow-hidden text-white rounded-t-3xl mt-40 mx-5 max-sm:h-max ${Cwidth ? 'py-10 pt-0 mx-10 h-[400px]' : 'lg:h-[450px]'
        } `}
    >
      <div className={`mx-5 lg:ml-20 mt-10 flex ${Cwidth ? 'flex-col gap-5' : 'flex-row'}`}>
        <div
          className={`flex relative z-40 overflow-visible flex-col gap-8 w-[65%] ${Cwidth ? 'text-center justify-center w-full items-center' : ''
            }`}
        >
          <h1
            className={`break-words text-5xl font-bold ${Cwidth ? 'text-4xl text-center' : ''
              } max-sm:text-3xl`}
          >
            Join the Fun – Download MyBindle Now!
          </h1>
          <p className="text-md max-sm:text-sm font-semibold lg:w-md">
            Your Social Network, Your Way
            Download MyBindle Now and Be a Part of a Community That’s Always Evolving!
          </p>
          <div className='flex flex-wrap max-lg:justify-center gap-5'>
          <div className='flex flex-row group gap-2 justify-center hover:scale-105 cursor-pointer duration-150 py-2 pr-8 px-3 rounded-4xl bg-white max-w-max text-black items-center'>
            <div className='h-8'>
              <img className='h-full group-hover:scale-130 duration-150' src={apple} alt="appstore" />
            </div>
            <div className='flex flex-col'>
              <p className='text-[8px] text-slate-700 group-hover:scale-120 duration-150'>DOWNLOAD ON THE</p>
              <p className='font-semibold text-lg group-hover:scale-110 duration-150'>App Store</p>
            </div>
          </div>
          <div className='flex flex-row group gap-2 justify-center hover:scale-105 duration-150 cursor-pointer h-max py-2 px-5 rounded-4xl bg-white max-w-max text-black items-center'>
            <div className='h-7'>
              <img className='h-full group-hover:scale-130 duration-150' src={playstore} alt="appstore" />
            </div>
            <div className='flex items-start flex-col'>
              <p className='text-[8px] text-slate-700 group-hover:scale-130 duration-150 '>GET IT ON</p>
              <p className='font-semibold text-lg group-hover:scale-110 duration-150 '>Google Play</p>
            </div>
          </div>
          </div>
        
        </div>

        {/* {Cwidth && (
            <div className="absolute inset-0 z-10 flex justify-center items-center">
              <img
                src={heart}
                alt="heart"
                className="opacity-50 w-[300px] max-w-[60%] h-auto object-contain"
              />
            </div>
          )} */}

        {!Cwidth && (
          <div className="overflow-hidden absolute z-10 h-full justify-end right-8 items-end flex flex-row w-full">
            <div className="w-70">
              <img className="h-max w-max" src={image1} alt="image1" />
            </div>
            <div className="w-70 lg:relative top-5">
              <img className="h-max w-max" src={image2} alt="image2" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Footer
