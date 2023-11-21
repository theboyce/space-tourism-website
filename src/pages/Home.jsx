import React from 'react';

const Home = () => {
  return (
    <div
      className="h-[100vh] sm:bg-home-sm md:bg-home-md lg:bg-home-lg bg-cover 
    "
    >
      <div className="absolute md:top-[20%] top-[40%] w-full flex md:flex-col gap-5 lg:justify-around border border-red-400 border-solid items-center lg:items-end">
        <section className="w-[55%] md:flex md:flex-col md:items-center border-solid border-green-500 border">
          <h5 className="text-white font-barlow md:text-[1.3rem] lg:text-[1.75rem] tracking-[4.75px]">
            S0, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="text-white text-[9.375rem] font-bellefair">SPACE</h1>
          <p className="text-white font-barlow-regular lg:text-[18px] md:text-[16px] md:text-center">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>

        <button className="md:h-[242px] md:w-[242px] lg:h-[274px] lg:w-[274px] rounded-full bg-white text-black font-bellefair text-[32px]">
          EXPLORE
        </button>
      </div>
    </div>
  );
};

export default Home;
