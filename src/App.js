import './App.css';
import ContactMeFooter from './components/ContactMeFooter';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainProject from './components/MainProject';
import OtherProjects from './components/OtherProjects';


function App() {
  return (
    <div className="personal-portfolio-app">
        <Header />
        <Navbar />
        <Banner />
        <MainProject/>
        <OtherProjects />
        <ContactMeFooter />
    </div>
  );
}

export default App;
