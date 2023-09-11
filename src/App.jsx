import React from 'react';
import './styles/global.scss';
import Home from './pages/Home';
import Navbar from './components/General/Navbar';
import AsideNavbar from './components/General/AsideNavbar';
import About from './pages/About';

const App = () => {
  return (
    <main className="mainContainer">
      <div className="mainWrapper">
        <Navbar />
        <AsideNavbar />
        <Home />
        <About />
      </div>
    </main>
  );
};

export default App;
