import React from 'react';

const Home = () => {
  return (
    <div
      className="h-[100vh] sm:bg-home-sm md:bg-home-md lg:bg-home-lg bg-cover 
    "
    >
      <div className="absolute sm:top-[15%] md:top-[20%] lg:top-[55%] w-full  flex sm:flex-col md:flex-col lg:flex-row gap-5 sm:gap-[6rem] md:gap-[8rem] md:justify-between lg:justify-around sm:px-[24px] items-center lg:items-end">
        <section className="sm:w-[100%] md:w-[55%] lg:w-[30%] flex sm:flex-col md:flex md:flex-col items-center lg:items-start border-solid ">
          <h5 className="text-white font-barlow text-[1.3rem] lg:text-[1.75rem] tracking-wider lg:tracking-[4.75px]">
            S0, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="text-white sm:text-[5rem] text-[9.375rem] font-bellefair">
            SPACE
          </h1>
          <p className="text-white font-barlow-regular lg:text-[18px] md:text-[16px] sm:text-[15px] sm:text-center md:text-center lg:text-left">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        <button className="sm:h-[242px] sm:w-[242px]  md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px] rounded-full bg-white text-black font-bellefair text-[32px]">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Home;
