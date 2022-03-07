import React, {useState} from 'react';
import Header from '../src/components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Resume from './components/Resume';

function App() {
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <div>
      <Header
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      portfolioSelected={portfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      resumeSelected={resumeSelected}
      setResumeSelected={setResumeSelected}

      ></Header>
      

      <main>
        {contactSelected ? <Contact/>
        : portfolioSelected ? <Portfolio></Portfolio>
        : resumeSelected ? <Resume/>
        :
        <>
        <Home/>
        <About/>
      </>}
      </main>


      <Footer/>

    </div>
  );
}

export default App;
