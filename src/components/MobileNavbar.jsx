import React, { useContext } from 'react';

import { NavContext } from '../Contexts/NavContext';

import { navElements } from './Navbar';

const MobileNavbar = () => {
  const { toggleMenu, handleToggle } = useContext(NavContext);

  return (
    <div className="h-[100vh] bg-green-500">
      <button onClick={handleToggle}>Close</button>
    </div>
  );
};

export default MobileNavbar;
