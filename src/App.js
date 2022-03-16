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

  const [currentPage, setCurrentPage] = useState('About');

  //check to see what is the value of currentPage
  const renderPage =() =>{
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
      
      <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      {renderPage()}
      <Footer/>

    </div>
  );
}

export default App;
