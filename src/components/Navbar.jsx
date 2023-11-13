import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/shared/logo.svg';
import { NavContext } from '../Contexts/NavContext';

export const navElements = [
  {
    id: '00',
    name: 'HOME',
    link: '/',
  },
  {
    id: '01',
    name: 'DESTINATION',
    link: '/destination',
  },
  {
    id: '02',
    name: 'CREW',
    link: '/crew',
  },
  {
    id: '03',
    name: 'TECHNOLOGY',
    link: '/technology',
  },
];
const Navbar = () => {
  // destructuring our context to be used
  const { toggleMenu, handleToggle } = useContext(NavContext);

  return (
    <div className="sm:h-[3rem] md:h-[6rem] bg-transparent absolute sm:top-[1.5rem] md:top-0 lg:top-[2.5rem] w-[100vw]  ">
      <nav className="flex justify-between items-center h-[100%] sm:pl-[1.5rem] sm:pr-[1.5rem] md:pr-0 md:pl-[2.4rem] lg:pl-[3.5rem] ">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
        <hr className="border absolute border-stroke w-[35%] left-[10rem] z-50 hidden lg:block" />

        <div className="md:flex lg:flex sm:hidden justify-center md:gap-[2rem] lg:gap-[5rem] md:w-[28.125rem] lg:w-[51.875rem] h-[6rem] bg-white bg-opacity-[0.05]  backdrop-blur-[12px] backdrop-filter  ">
          {/* Mapping on the nav elements */}
          {navElements.map((navElement, i) => {
            return (
              <NavLink
                key={i}
                to={`${navElement.link}`}
                style={({ isActive }) =>
                  isActive ? { borderBottom: '4px solid white' } : undefined
                }
                className={
                  'text-white font-barlow text-[16px] tracking-widest flex items-center hover:border-b-4 hover:border-hover'
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

        <svg
          onClick={handleToggle}
          className="md:hidden lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
        >
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </nav>
    </div>
  );
};

export default Navbar;
