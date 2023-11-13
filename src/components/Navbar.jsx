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
    <div className="h-[6rem] bg-transparent absolute top-[2.5rem] w-[100%] ">
      <nav className="flex justify-between h-[100%]  items-center pl-[3.5rem]">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
        <hr className="border absolute border-stroke w-[38%] left-[11rem] z-50" />
        {/* <div className="flex justify-around w-[55%] bg-slate-100/20 h-[6rem] border items-center backdrop-filter backdrop-blur-[20px] opacity-20"> */}
        <div className="flex justify-center gap-20 w-[55%] h-[6rem] bg-white bg-opacity-[0.05]  backdrop-blur-[12px] backdrop-filter">
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
                <span className="pr-[11px] font-bold">{navElement.id}</span>
                {navElement.name}
              </NavLink>
            );
          })}
          {/* home */}
          {/* <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? { borderBottom: '2px solid red' } : undefined
            }
            className={
              'text-white font-barlow text-[16px] tracking-widest flex items-center'
            }
          >
            <span className="pr-[11px] font-bold">00</span> HOME
          </NavLink>
          <NavLink
            to="/crew"
            style={({ isActive }) =>
              isActive ? { borderBottom: '2px solid red' } : undefined
            }
            className={
              'text-white font-barlow text-[16px] tracking-widest flex items-center'
            }
          >
            <span className="pr-[11px] font-bold">02</span> CREW
          </NavLink> */}
        </div>
        <button
          onClick={handleToggle}
          className="text-white px-8 py-4 bg-yellow-400"
        >
          Test
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
