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

  const [currentPage, setCurrentPage] = useState('Home');

  //check to see what is the value of currentPage
  const renderPage =() =>{
    if (currentPage === 'Home') {
      return <Home/>
    }
    if (currentPage === 'About') {
      return <About/>
    }
    if (currentPage ==='Portfolio') {
      return <Portfolio/>
    }
    if (currentPage === 'Contact') {
      return <Contact/>
    }
    return <Resume/>
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className='container-fluid'>
      <div className='row'>
      <div class="col-md-12 col-xl-2 sticky-bar">
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      </div>
      <div class="col-md-12 col-xl-10">
      {renderPage()}
      </div></div>
      <Footer/>

    </div>
  );
}

export default App;
