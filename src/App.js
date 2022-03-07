import React, {useState} from 'react';
import Header from '../src/components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <Home/>
      <About/>
      <Footer/>

    </div>
  );
}

export default App;
