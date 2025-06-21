import React, { useEffect, useState } from 'react'
import image1 from '../images/footer/image1.png'
import image2 from '../images/footer/image2.png'

const Footer = () => {
  const [Cwidth, setCwidth] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      console.log('Current width:', width);
      setCwidth(width <= 1180);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section
      id="donate"
      className={`bg-[#FF5349] relative z-20 overflow-hidden text-white rounded-t-3xl mt-40 mx-5 max-sm:h-max ${Cwidth ? 'py-10 pt-0 mx-10 h-[400px]' : 'lg:h-[450px]'
        } `}
    >
      <div className={`mx-10 lg:ml-20 mt-10 flex ${Cwidth ? 'flex-col gap-5' : 'flex-row'}`}>
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
          <button
            className={`bg-white w-max text-xl px-5 py-2 rounded-lg font-semibold cursor-pointer duration-150 hover:scale-105 ease-in hover:border-2 hover:text-white hover:bg-[#ff5349] text-[#ff5349] ${Cwidth ? 'mx-auto' : ''
              }`}
          >
            Donate Now
          </button>
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
