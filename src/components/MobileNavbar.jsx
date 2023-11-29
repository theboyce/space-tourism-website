import React, { useContext } from 'react';

import { NavContext } from '../Contexts/NavContext';

import { navElements } from './Navbar';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
  const { toggleMenu, handleToggle } = useContext(NavContext);

  return (
    <div className="h-[100vh] w-[70%] bg-white-500 backdrop-blur-[40px] backdrop-filter backdr md:hidden lg:hidden absolute left-[30%] z-10">
      {/* <div> */}
      <svg
        className="absolute top-[2.5rem] left-[17rem]"
        onClick={handleToggle}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
      >
        <g fill="#D0D6F9" fillRule="evenodd">
          <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
          <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
        </g>
      </svg>

      {/* Mobile nav links */}
      <div className=" flex flex-col items-end gap-[2rem] pl-[2rem] mt-[40%] ">
        {navElements.map((navElement, i) => {
          return (
            <NavLink
              key={i}
              to={`${navElement.link}`}
              style={({ isActive }) =>
                isActive ? { borderRight: '4px solid white' } : undefined
              }
              className={
                'text-white font-barlow w-[100%]  text-[16px] tracking-widest flex items-center hover:border-b-4 hover:border-hover'
              }
            >
              <span className="pr-[11px] font-bold md:hidden lg:block">
                {navElement.id}
              </span>
              {navElement.name}
            </NavLink>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default MobileNavbar;
