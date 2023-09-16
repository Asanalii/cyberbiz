import './styles/global.scss';
import Home from './pages/Home';
import Navbar from './components/General/Navbar';
import AsideNavbar from './components/General/AsideNavbar';
import About from './pages/About';
import Services from './pages/Services';
import MyWork from './pages/MyWork';
import Connect from './pages/Connect';
import ParticlesContainer from './components/Particles/ParticlesContainer';
import useHomeDirection from './hooks/useHomeDirection';

const App = () => {
  const isLeftDirection = useHomeDirection();
  return (
    <main className="mainContainer">
      <div className="mainWrapper">
        <Navbar isLeftDirection={isLeftDirection} />
        <AsideNavbar isLeftDirection={isLeftDirection} />
        <ParticlesContainer colorOfParticles={'#731bc1'} colorOfLinks={'#ffffff'} />
        <Home isLeftDirection={isLeftDirection} />
        <About />
        <Services />
        <MyWork />
        <Connect />
      </div>
    </main>
  );
};

export default App;
