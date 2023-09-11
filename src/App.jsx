import './styles/global.scss';
import Home from './pages/Home';
import Navbar from './components/General/Navbar';
import AsideNavbar from './components/General/AsideNavbar';
import About from './pages/About';
import Services from './pages/Services';
import MyWork from './pages/MyWork';
import Connect from './pages/Connect';

const App = () => {
  return (
    <main className="mainContainer">
      <div className="mainWrapper">
        <Navbar />
        <AsideNavbar />
        <Home />
        <About />
        <Services />
        <MyWork />
        <Connect />
      </div>
    </main>
  );
};

export default App;
