import React, { useEffect, useState } from 'react'
import image1 from '../images/footer/image1.png'
import image2 from '../images/footer/image2.png'
import apple from '../images/footer/apple.png'
import playstore from '../images/footer/googleplay.png'
import { motion } from "motion/react"

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
      className={`bg-[#FF5349] relative z-20 overflow-hidden text-white rounded-t-3xl mt-40 mx-5 max-md:mx-0 max-md:px-5 max-sm:h-max ${Cwidth ? 'py-10 pt-0 mx-10 h-[400px]' : 'lg:h-[450px]'
        } `}
    >
      <div className={`mx-5 mt-10 flex ${Cwidth ? 'flex-col mx-5 justify-center items-center gap-5 mr-0 max-md:mx-0 ml-0' : 'flex-row ml-20'}`}>
        <div
          className={`flex relative z-40 overflow-visible flex-col gap-8 ${Cwidth ? 'text-center justify-center w-full items-center mr-0 mx-0 px-0' : 'w-[65%]'
            }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`break-words text-5xl font-bold ${Cwidth ? 'text-4xl text-center' : ''
              } max-sm:text-3xl`}
          >
            Join the Fun – Download MyBindle Now!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .3, duration: '1' }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-md max-sm:text-sm font-semibold lg:w-md">
            Your Social Network, Your Way
            Download MyBindle Now and Be a Part of a Community That’s Always Evolving!
          </motion.p>
          <div className='flex flex-wrap max-lg:justify-center gap-5'>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: .2, duration: .2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='flex flex-row group gap-2 justify-center hover:scale-105 cursor-pointer duration-150 py-2 pr-8 px-3 rounded-4xl bg-white max-w-max text-black items-center'>
              <div className='h-8'>
                <img className='h-full group-hover:scale-130 duration-150' src={apple} alt="appstore" />
              </div>
              <div className='flex flex-col'>
                <p className='text-[8px] text-slate-700 group-hover:scale-120 duration-150'>DOWNLOAD ON THE</p>
                <p className='font-semibold text-lg group-hover:scale-110 duration-150'>App Store</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: .2, duration: .2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className='flex flex-row group gap-2 justify-center hover:scale-105 duration-150 cursor-pointer h-max py-2 px-5 rounded-4xl bg-white max-w-max text-black items-center'>
              <div className='h-7'>
                <img className='h-full group-hover:scale-130 duration-150' src={playstore} alt="appstore" />
              </div>
              <div className='flex items-start flex-col'>
                <p className='text-[8px] text-slate-700 group-hover:scale-130 duration-150 '>GET IT ON</p>
                <p className='font-semibold text-lg group-hover:scale-110 duration-150 '>Google Play</p>
              </div>
            </motion.div>
          </div>
        </div>

        {!Cwidth && (
          <div className={`overflow-hidden absolute z-10 h-full justify-end gap-5 ${Cwidth ? 'right-0' : 'right-8'} items-end flex flex-row w-full`}>
            <div className="w-70 relative -top-10">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .3, duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="h-max w-max" src={image1} alt="image1" />
            </div>
            <div className="w-70 lg:relative top-5">
              <motion.img
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="h-max w-max" src={image2} alt="image2" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Footer
