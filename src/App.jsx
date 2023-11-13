import Home from './pages/Home';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

import MobileNavbar from './components/MobileNavbar';
import { useContext } from 'react';
import { NavContext } from './Contexts/NavContext.jsx';

function App() {
  const { toggleMenu } = useContext(NavContext);

  return (
    <div>
      {/* wrapping all components which need the context for them to be able to access the context*/}

      <Navbar />
      {toggleMenu && <MobileNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
