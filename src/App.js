import './App.css';
import React from 'react';
import Navbar from './Layouts/Navbar';
import HomePage from './Layouts/HomePage';
import About from './Layouts/About';
import Travel from './Layouts/Travel';
import Blog from './Layouts/Blog';
import Footer from './Layouts/Footer';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <HomePage/>
    <About/>
    <Travel/>
   <Blog/>
   <Footer/>
    </div>
  );
}

export default App;
