import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export function ContextProvider(props) {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    // console.log(toggleMenu);
  };

  return (
    <NavContext.Provider value={{ toggleMenu, handleToggle }}>
      {props.children}
    </NavContext.Provider>
  );
}
