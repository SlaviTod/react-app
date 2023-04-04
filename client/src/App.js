import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { AboutUs } from './components/About/About-us/About-us';
import { Conductor } from './components/About/Conductor/Conductor';
import { Concerts } from './components/Concerts/Concerts';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { NotFound } from './components/NotFound/NotFound';
import { ScroolToTop } from './components/ScroolToTop/ScroolToTop';

import './App.css';


function App() {
  const scroolToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/conductor" element={<Conductor />}></Route>
        <Route path="/concerts" element={<Concerts />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />

      <ScroolToTop scroolToTop={scroolToTop} />
    </>
  );
}

export default App;
