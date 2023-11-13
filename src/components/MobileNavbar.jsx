import React, { useContext } from 'react';

import { NavContext } from '../Contexts/NavContext';

import { navElements } from './Navbar';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
  const { toggleMenu, handleToggle } = useContext(NavContext);

  return (
    <div className="h-[100vh] w-[70%] bg-green-500 md:hidden lg:hidden">
      <div>
        <svg
          onClick={handleToggle}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
        >
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>

        {navElements.map((navElement, i) => {
          return (
            <NavLink>
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
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
